const translations = {
    en: {
        // Header
        brandTagline: "ingredient bridge · Norway",
        language: "Language",

        // Location
        shoppingLocation: "Shopping location",
        locationDescription: "Enter an address or city in Norway to tailor store suggestions.",
        addressLabel: "Address or city",
        addressPlaceholder: "e.g. Storgata 1, Bergen",
        locationHint: "Leave empty to search in Oslo.",
        applyLocation: "Apply location",
        locationFooter: "Store stock isn't live.",
        changeLocation: "Change shopping location",

        // Introduction
        introHeading: "Cook your food,",
        introHeadingEmphasis: "wherever you are.",
        introDescription:
            "Search for an ingredient from your home cuisine. We'll tell you if it's available in Norway — and where to buy it, or what to use instead.",

        // Cuisine selection
        cuisineLabel: "01 — Select your cuisine",
        cuisinePlaceholder: "Select a country / cuisine…",
        cuisineAriaLabel: "Select your cuisine",

        // Ingredient search
        searchLabel: "02 — Search for an ingredient",
        searchPlaceholder: "e.g. {ingredient}",
        searchAriaLabel: "Ingredient name",
        searchButton: "Search",
        suggestionsLabel: "Try:",
        pleaseEnterIngredient: "Please enter an ingredient.",

        // Search results
        resultsLabel: "03 — Results for",
        available: "Available in Norway",
        unavailable: "Not sold in Norway",
        storeSuggestions: "Store suggestions for",
        notFound: 'No results found for "{ingredient}" in {cuisine} cuisine.',
        notFoundDescription:
            "Try a different spelling, or browse the suggestions above.",

        // Alternatives
        howItDiffers: "How it differs",
        alternative: "alternative",
        alternatives: "alternatives",
        bestFirst: "best first",
        noAlternatives:
            "No more alternatives are available for this ingredient.",
        match: "match",
        removeAlternative: "Remove {ingredient}",

        // Ingredient alert
        alertLabel: "Ingredient alert",
        alertHeading: "Want to know when it arrives?",
        alertDescription:
            "This is a fake alert used for testing the {ingredient} alert flow around {location}. Your email address is not collected or stored.",
        emailLabel: "Email address for ingredient alert",
        emailPlaceholder: "Your email address",
        alertButton: "Alert me",
        alertSuccess:
            "Test alert confirmed. This is a demo only—your email was not collected or stored.",

        // Empty state
        emptyState: "Choose a cuisine above to get started.",

        // Footer
        footer: "FoodBridge · Find familiar ingredients and alternatives in Norway"
    },

    no: {
        // Header
        brandTagline: "ingrediensbro · Norge",
        language: "Språk",

        // Location
        shoppingLocation: "Handleområde",
        locationDescription:
            "Skriv inn en adresse eller by i Norge for å tilpasse butikkforslagene.",
        addressLabel: "Adresse eller by",
        addressPlaceholder: "f.eks. Storgata 1, Bergen",
        locationHint: "La feltet stå tomt for å søke i Oslo.",
        applyLocation: "Bruk plassering",
        locationFooter: "Lagerstatusen i butikkene er ikke oppdatert i sanntid.",
        changeLocation: "Endre handleområde",

        // Introduction
        introHeading: "Lag maten du elsker,",
        introHeadingEmphasis: "uansett hvor du er.",
        introDescription:
            "Søk etter en ingrediens fra ditt hjemlands kjøkken. Vi forteller deg om den er tilgjengelig i Norge – og hvor du kan kjøpe den, eller hva du kan bruke som erstatning.",

        // Cuisine selection
        cuisineLabel: "01 — Velg kjøkken",
        cuisinePlaceholder: "Velg et land / kjøkken…",
        cuisineAriaLabel: "Velg kjøkken",

        // Ingredient search
        searchLabel: "02 — Søk etter en ingrediens",
        searchPlaceholder: "f.eks. {ingredient}",
        searchAriaLabel: "Ingrediensnavn",
        searchButton: "Søk",
        suggestionsLabel: "Prøv:",
        pleaseEnterIngredient: "Vennligst skriv inn en ingrediens.",

        // Search results
        resultsLabel: "03 — Resultater for",
        available: "Tilgjengelig i Norge",
        unavailable: "Selges ikke i Norge",
        storeSuggestions: "Butikkforslag for",
        notFound:
            'Fant ingen resultater for "{ingredient}" i {cuisine}-kjøkkenet.',
        notFoundDescription:
            "Prøv en annen stavemåte, eller se forslagene ovenfor.",

        // English
        noStoreSuggestions: "No store suggestions available for {location}.",
        // Norwegian
        noStoreSuggestions: "Ingen butikkforslag tilgjengelig for {location}.",

        // Alternatives
        howItDiffers: "Hvordan den skiller seg",
        alternative: "alternativ",
        alternatives: "alternativer",
        bestFirst: "beste først",
        noAlternatives:
            "Det finnes ingen flere alternativer for denne ingrediensen.",
        match: "samsvar",
        removeAlternative: "Fjern {ingredient}",

        // Ingredient alert
        alertLabel: "Ingrediensvarsel",
        alertHeading: "Vil du få beskjed når den kommer?",
        alertDescription:
            "Dette er et testvarsel for å teste varslingsfunksjonen for {ingredient} i {location}. E-postadressen din blir ikke samlet inn eller lagret.",
        emailLabel: "E-postadresse for ingrediensvarsel",
        emailPlaceholder: "E-postadressen din",
        alertButton: "Varsle meg",
        alertSuccess:
            "Testvarsel bekreftet. Dette er kun en demonstrasjon – e-postadressen din ble ikke samlet inn eller lagret.",

        // Empty state
        emptyState: "Velg et kjøkken ovenfor for å komme i gang.",

        // Footer
        footer: "FoodBridge · Finn kjente ingredienser og alternativer i Norge"
    }
};

let currentLanguage = "en";

export function t(key, variables = {}) {
    const translation =
        translations[currentLanguage]?.[key] ??
        translations.en[key] ??
        key;

    return translation.replace(/\{(\w+)\}/g, (match, variable) => {
        return variables[variable] !== undefined
            ? String(variables[variable])
            : match;
    });
}

export function setLanguage(language) {
    if (!translations[language]) return;

    currentLanguage = language;
    applyTranslations();
}

export function getLanguage() {
    return currentLanguage;
}

export function applyTranslations() {
    document.documentElement.lang = currentLanguage;

    // Translate regular HTML text
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = t(key);
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder = t(key);
    });

    // Translate accessibility labels
    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
        const key = element.dataset.i18nAriaLabel;
        element.setAttribute("aria-label", t(key));
    });
}
