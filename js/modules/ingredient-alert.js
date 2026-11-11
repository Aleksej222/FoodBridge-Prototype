
import { t } from "../i18n/i18n.js";
import { getLocalized, escapeHTML } from "../utils/helpers.js";


/**
 * Generate the ingredient alert HTML.
 */
export function renderIngredientAlert(result, location) {

    return `
        <section class="ingredient-alert"
                 aria-label="${escapeHTML(t("alertLabel"))}">

            <p class="ingredient-alert-label">
                ${t("alertLabel")}
            </p>

            <div class="ingredient-alert-card">

                <div class="ingredient-alert-header">

                    <h3>
                        ${t("alertHeading")}
                    </h3>

                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                        <path d="m3 7 9 6 9-6"></path>
                    </svg>

                </div>

                <div class="ingredient-alert-body">

                    <p>
                        ${escapeHTML(t("alertDescription", {
                            ingredient: getLocalized(result, "name"),
                            location
                        }))}
                    </p>

                    <form class="ingredient-alert-form">

                        <label for="alert-email" class="visually-hidden">
                            ${t("emailLabel")}
                        </label>

                        <input
                            id="alert-email"
                            type="email"
                            autocomplete="email"
                            required
                            placeholder="${escapeHTML(t("emailPlaceholder"))}"
                        >

                        <button type="submit">
                            ${t("alertButton")}
                        </button>

                    </form>

                    <div class="alert-feedback" aria-live="polite"></div>

                </div>

            </div>

        </section>
    `;
}


/**
 * Initialize the demo email alert.
 * No email addresses are collected or stored.
 */
export function initializeIngredientAlert(searchSection) {

    const alertForm = searchSection.querySelector(
        ".ingredient-alert-form"
    );

    const feedback = searchSection.querySelector(
        ".alert-feedback"
    );

    if (!alertForm || !feedback) return;

    alertForm.addEventListener("submit", event => {

        event.preventDefault();

        feedback.innerHTML = `
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <circle cx="12" cy="12" r="9"></circle>
                <path d="m8 12 2.5 2.5L16 9"></path>
            </svg>

            <p>
                ${t("alertSuccess")}
            </p>
        `;

        alertForm.reset();

    });

}
