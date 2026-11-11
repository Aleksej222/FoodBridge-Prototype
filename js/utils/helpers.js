// Escape HTML characters to prevent HTML injection when inserting dynamic values into HTML templates.
export function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];

    });

}

// Get a localized field from an ingredient or alternative.
// Falls back to the default value if no translation exists.

export function getLocalized(item, field, language) {

    if (!item) return "";

    return item.translations?.[language]?.[field]
        ?? item[field]
        ?? "";

}
