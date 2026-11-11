
import {
    t,
    setLanguage,
    getLanguage,
    applyTranslations
} from "../i18n/i18n.js";
import {
    savePreferences,
    loadPreferences
} from "./user-preferences.js";


export function initializeLanguageSelector({
    cuisineSelect,
    searchState,
    searchSection,
    renderIngredientSearch,
    renderResult
}) {

    const languageToggle = document.querySelector(".language-button");
    const languagePanel = document.getElementById("language-panel");

    if (!languageToggle || !languagePanel) return;


    // Restore previously selected language.
    const savedPreferences = loadPreferences();

    if (savedPreferences?.language) {
        setLanguage(savedPreferences.language);
    }

    const languageOptions = languagePanel.querySelectorAll(
        ".language-option"
    );


    function updateLanguageSelector() {

        const currentLanguage = getLanguage();

        languageOptions.forEach(button => {

            const isActive = button.dataset.language === currentLanguage;

            button.classList.toggle("active", isActive);

            const indicator = button.querySelector(
                ".language-option-indicator"
            );

            if (indicator) {
                indicator.textContent = isActive ? "✓" : "";
            }

            button.setAttribute("aria-pressed", String(isActive));

        });

    }


    languageToggle.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();

        languagePanel.hidden = !languagePanel.hidden;

        languageToggle.setAttribute(
            "aria-expanded",
            String(!languagePanel.hidden)
        );

    });


    languageOptions.forEach(button => {

        button.addEventListener("click", () => {

            const language = button.dataset.language;

            // Update language.
            setLanguage(language);

            // Save language preference.
            savePreferences({
                language: language
            });
            applyTranslations();

            updateLanguageSelector();

            const selectedCuisine = cuisineSelect.value;

            if (selectedCuisine) {

                renderIngredientSearch(selectedCuisine);

                const ingredientInput = searchSection.querySelector(
                    "#ingredient-input"
                );

                if (ingredientInput) {
                    ingredientInput.value = searchState.ingredientInput;
                }

                const suggestionsContainer = searchSection.querySelector(
                    ".ingredient-suggestions"
                );

                if (suggestionsContainer) {
                    suggestionsContainer.hidden =
                        searchState.suggestionsHidden;
                }

                if (searchState.searchedIngredient) {

                    renderResult(
                        searchState.searchedIngredient,
                        selectedCuisine
                    );

                }

            }

            languagePanel.hidden = true;

            languageToggle.setAttribute("aria-expanded", "false");

        });

    });


    updateLanguageSelector();

}
