
import { t, getLanguage } from "../i18n/i18n.js";
import { escapeHTML, getLocalized } from "../utils/helpers.js";

// Get the currently translated field.
function localized(item, field) {
    return getLocalized(item, field, getLanguage());
}

// Generate the HTML for alternative cards.
export function renderAlternativeCards(alternatives) {

    if (!alternatives.length) {
        return `
            <p class="no-alternatives">
                ${t("noAlternatives")}
            </p>
        `;
    }

    return alternatives.map((alternative, index) => `

        <div class="alternative-card"
             style="--match-color: ${escapeHTML(alternative.color)}">

            <div class="alternative-card-header">

                <div class="alternative-title">

                    <span class="alternative-rank">
                        #${index + 1}
                    </span>

                    <span class="alternative-name">
                        ${escapeHTML(localized(alternative, "name"))}
                        ${localized(alternative, "description")
                            ? `(${escapeHTML(localized(alternative, "description"))})`
                            : ""}
                    </span>

                </div>

                <div class="similarity-cluster">

                    <div class="similarity-track">

                        <div class="similarity-fill"
                             style="width: ${alternative.match}%; background: ${escapeHTML(alternative.color)}">
                        </div>

                    </div>

                    <span class="similarity-value">
                        ${alternative.match}% ${t("match")}
                    </span>

                    <button
                        type="button"
                        class="alternative-dismiss"
                        data-index="${index}"
                        aria-label="${escapeHTML(t("removeAlternative", {
                            ingredient: localized(alternative, "name")
                        }))}"
                        title="${escapeHTML(t("removeAlternative", {
                            ingredient: localized(alternative, "name")
                        }))}"
                    >
                        <svg viewBox="0 0 24 24"
                             width="16"
                             height="16"
                             fill="none"
                             stroke="currentColor"
                             stroke-width="1.8"
                             stroke-linecap="round">

                            <path d="m7 7 10 10M17 7 7 17"></path>

                        </svg>
                    </button>

                </div>

            </div>

            <div class="alternative-impact">

                <p class="impact-heading">
                    ${t("howItDiffers")}
                </p>

                <p>
                    ${escapeHTML(localized(alternative, "impact"))}
                </p>

            </div>

        </div>

    `).join("");
}


// Handle alternative dismissal.
export function initializeAlternativeDismissal(
    container,
    alternatives,
    searchState,
    onUpdate
) {

    container.querySelectorAll(".alternative-dismiss").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);
            const removedAlternative = alternatives[index];

            if (!removedAlternative) return;

            searchState.dismissedAlternatives.push(
                removedAlternative.name
            );

            onUpdate();

        });

    });

}
