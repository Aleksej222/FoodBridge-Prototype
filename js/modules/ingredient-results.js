
import { cuisineIngredients } from "../data/ingredients.js";
import {
    t,
    getLanguage
} from "../i18n/i18n.js";
import {
    escapeHTML,
    getLocalized
} from "../utils/helpers.js";

import {
    renderIngredientAlert,
    initializeIngredientAlert
} from "./ingredient-alert.js";
import {
    renderAlternativeCards,
    initializeAlternativeDismissal
} from "./ingredient-alternatives.js";

export function createIngredientResults({
    searchSection,
    searchState,
    getLocation,
    findIngredient
}) {

    // Get the currently translated field.
    function localized(item, field) {
        return getLocalized(item, field, getLanguage());
    }


    // Display search results.
    function renderResult(ingredient, cuisineKey) {

        const location = getLocation();

        const normalizedIngredient = ingredient.trim().toLowerCase();

        const result = findIngredient(cuisineKey, normalizedIngredient);

        const resultsContainer = searchSection.querySelector(
            "#results-container"
        );


        // Ingredient not found in database.
        if (!result) {

            const cuisineName =
                cuisineIngredients[cuisineKey]?.name || cuisineKey;

            const suggestionsContainer = searchSection.querySelector(
                ".ingredient-suggestions"
            );

            if (suggestionsContainer) {
                suggestionsContainer.hidden = false;
            }

            resultsContainer.innerHTML = `

                <div class="ingredient-not-found">

                    <p class="not-found-title">
                        ${escapeHTML(t("notFound", {
                ingredient,
                cuisine: cuisineName
            }))}
                    </p>

                    <p class="not-found-description">
                        ${t("notFoundDescription")}
                    </p>

                </div>

            `;

            return;
        }


        // Available ingredient.
        if (result.available) {

            const language = getLanguage();

            const stores = result.stores?.["Oslo"] || [];

            const localizedStores =
                result.translations?.[language]?.stores?.["Oslo"]
                || stores;


            const storeList = localizedStores.length
                ? localizedStores.map(store => `
                    <li>
                        <span class="store-arrow">→</span>
                        ${escapeHTML(store)}
                    </li>
                `).join("")
                : `<li>${t("noStoreSuggestions", {
                    location: escapeHTML(location)
                })}</li>`;


            resultsContainer.innerHTML = `

                <div class="results-section">

                    <p class="results-heading">
                        ${t("resultsLabel")}
                        "${escapeHTML(localized(result, "name"))}" ·
                        ${escapeHTML(location)}
                    </p>

                    <div class="results-list">

                        <article class="result-card is-available">

                            <div class="result-card-header">

                                <h3 class="result-ingredient-name">
                                    ${escapeHTML(localized(result, "name"))}
                                    ${localized(result, "description")
                    ? `(${escapeHTML(localized(result, "description"))})`
                    : ""}
                                </h3>

                                <span class="availability-badge">
                                    <span>✓</span>
                                    <span>${t("available")}</span>
                                </span>

                            </div>

                            <div class="result-card-body">

                                <p class="store-heading">
                                    ${t("storeSuggestions")}
                                    ${escapeHTML(location)}
                                </p>

                                <ul class="store-list">
                                    ${storeList}
                                </ul>

                            </div>

                        </article>

                    </div>

                </div>

            `;

            return;
        }


        // Unavailable ingredient.
        renderUnavailableResult(
            result,
            ingredient,
            location,
            resultsContainer
        );

    }


    // Display unavailable ingredient and its alternatives.

    function renderUnavailableResult(
        result,
        ingredient,
        location,
        container
    ) {

        function render() {

            // Remove alternatives that the user has dismissed.
            const remainingAlternatives = (result.alternatives || [])
                .filter(alternative =>
                    !searchState.dismissedAlternatives.includes(alternative.name)
                );

            // Only display the first two remaining alternatives.
            const visibleAlternatives = remainingAlternatives.slice(0, 2);

            // Generate alternative cards.
            const alternativesHTML = renderAlternativeCards(
                visibleAlternatives
            );

            container.innerHTML = `

            <div class="results-section">

                <p class="results-heading">
                    ${t("resultsLabel")}
                    "${escapeHTML(localized(result, "name"))}" ·
                    ${escapeHTML(location)}
                </p>

                <article class="result-card is-unavailable">

                    <div class="result-card-header">

                        <h3 class="result-ingredient-name">
                            ${escapeHTML(localized(result, "name"))}
                            ${localized(result, "description")
                    ? `(${escapeHTML(localized(result, "description"))})`
                    : ""}
                        </h3>

                        <span class="availability-badge unavailable-badge">
                            <span>✗</span>
                            <span>${t("unavailable")}</span>
                        </span>

                    </div>

                    <div class="alternatives-shell">

                        <p class="alternatives-heading">
                            ${visibleAlternatives.length}
                            ${visibleAlternatives.length === 1
                    ? t("alternative")
                    : t("alternatives")}
                            ${visibleAlternatives.length
                    ? `— ${t("bestFirst")}`
                    : ""}
                        </p>

                        <div class="alternatives-list">
                            ${alternativesHTML}
                        </div>

                    </div>

                </article>

                ${renderIngredientAlert(result, location)}

            </div>

        `;

            // Initialize the email alert.
            initializeIngredientAlert(searchSection);

            // Initialize alternative dismissal.
            initializeAlternativeDismissal(
                container,
                visibleAlternatives,
                searchState,
                render
            );

        }

        render();

    }



    // Return the function so ingredient-search.js can use it.
    return renderResult;

}
