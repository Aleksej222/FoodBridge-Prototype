import { cuisineIngredients } from "./data/ingredients.js";
import { initializeLanguageSelector } from "./modules/language-selector.js";
import { initializeLocationSelector } from "./modules/location-selector.js";
import { t } from "./i18n/i18n.js";
import { createIngredientResults } from "./modules/ingredient-results.js";
import { escapeHTML } from "./utils/helpers.js";
import { findIngredient } from "./modules/ingredient-lookup.js";

export function initializeIngredientSearch() {

    const emptyState = document.getElementById("empty-state");
    const searchSection = document.getElementById("ingredient-search-section");
    const cuisineSelect = document.getElementById("cuisine-select");
    const searchState = {
        selectedCuisine: "",
        ingredientInput: "",
        searchedIngredient: "",
        suggestionsHidden: false,
        dismissedAlternatives: []
    };

    // Check that the required HTML elements exist
    if (!emptyState || !searchSection || !cuisineSelect) {
        console.error("Ingredient search: Required HTML elements not found.");
        return;
    }

    // Get selected location
    function getLocation() {
        const locationElement = document.querySelector(".location-name");
        return locationElement?.textContent.trim() || "Oslo";
    }

    const renderResult = createIngredientResults({
        searchSection,
        searchState,
        getLocation,
        findIngredient
    });

    // Render ingredient search when cuisine changes
    function renderIngredientSearch(cuisineKey) {

        searchState.selectedCuisine = cuisineKey;
        const cuisine = cuisineIngredients[cuisineKey];

        // No cuisine selected
        if (!cuisine) {
            searchSection.hidden = true;
            emptyState.hidden = false;
            searchSection.innerHTML = "";
            return;
        }

        // Generate suggestion buttons
        const suggestionButtons = cuisine.suggestions
            .map(ingredient => `
                <button
                    type="button"
                    class="suggestion-button"
                    data-ingredient="${escapeHTML(ingredient)}"
                >
                    ${escapeHTML(ingredient)}
                </button>
            `)
            .join("");

        // Generate ingredient search HTML
        searchSection.innerHTML = `

            <section class="ingredient-search">

                <p class="section-label">
                    ${t("searchLabel")}
                </p>

                <form class="ingredient-form" id="ingredient-form">

                    <input
                        type="text"
                        id="ingredient-input"
                        placeholder="${escapeHTML(
            t("searchPlaceholder", {
                ingredient: cuisine.suggestions[0] || "ingredient"
            })
        )}"
                        aria-label="${t("searchAriaLabel")}"
                        autocomplete="off"
                        required
                    >

                    <button type="submit" class="search-button">
                        ${t("searchButton")}
                    </button>

                </form>

                <div class="ingredient-suggestions">

                    <span class="suggestions-label">
                        ${t("suggestionsLabel")}
                    </span>

                    ${suggestionButtons}

                </div>

                <div
                    class="search-feedback"
                    id="search-feedback"
                    aria-live="polite"
                ></div>

                <div id="results-container" aria-live="polite"></div>

            </section>
        `;

        // Show search section
        emptyState.hidden = true;
        searchSection.hidden = false;

        // Get elements
        const ingredientInput = searchSection.querySelector("#ingredient-input");

        ingredientInput.addEventListener("input", () => {
            searchState.ingredientInput = ingredientInput.value;
        });

        const ingredientForm = searchSection.querySelector("#ingredient-form");
        const feedback = searchSection.querySelector("#search-feedback");
        const resultsContainer = searchSection.querySelector("#results-container");
        const suggestionsContainer = searchSection.querySelector(
            ".ingredient-suggestions"
        );


        // Suggestion button clicks
        searchSection.querySelectorAll(".suggestion-button").forEach(button => {

            button.addEventListener("click", () => {

                ingredientInput.value = button.dataset.ingredient;

                feedback.textContent = "";
                resultsContainer.innerHTML = "";

                ingredientInput.focus();
            });
        });

        // Search form submission
        ingredientForm.addEventListener("submit", event => {

            event.preventDefault();

            const ingredient = ingredientInput.value.trim();
            searchState.ingredientInput = ingredientInput.value;
            searchState.searchedIngredient = ingredient;
            searchState.suggestionsHidden = true;
            searchState.dismissedAlternatives = [];

            if (!ingredient) {
                searchState.searchedIngredient = "";
                searchState.suggestionsHidden = false;

                feedback.textContent = t("pleaseEnterIngredient");
                return;
            }

            feedback.textContent = "";
            resultsContainer.innerHTML = "";

            // Hide ingredient suggestions after searching
            suggestionsContainer.hidden = true;

            renderResult(ingredient, cuisineKey);
        });
    }

    initializeLanguageSelector({
        cuisineSelect,
        searchState,
        searchSection,
        renderIngredientSearch,
        renderResult
    });

    initializeLocationSelector();

    // Listen directly to original HTML dropdown.
    cuisineSelect.addEventListener("change", event => {

        const cuisineKey = event.target.value;

        // Reset search state when changing cuisine
        searchState.selectedCuisine = cuisineKey;
        searchState.ingredientInput = "";
        searchState.searchedIngredient = "";
        searchState.suggestionsHidden = false;
        searchState.dismissedAlternatives = [];

        renderIngredientSearch(cuisineKey);

    });

    // Initial state
    if (cuisineSelect.value) {
        renderIngredientSearch(cuisineSelect.value);
    } else {
        searchSection.hidden = true;
        emptyState.hidden = false;
    }
}
