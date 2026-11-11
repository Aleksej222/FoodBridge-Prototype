import { searchResults } from "../data/search-results.js";

// Find an ingredient using its English or Norwegian name.
export function findIngredient(cuisineKey, searchTerm) {

    const ingredients = searchResults[cuisineKey];

    if (!ingredients) return null;

    const normalizedSearch = searchTerm.trim().toLowerCase();

    for (const [key, ingredient] of Object.entries(ingredients)) {

        const englishName = key.toLowerCase();

        const norwegianName = (
            ingredient.translations?.no?.name || ""
        ).toLowerCase();

        if (
            normalizedSearch === englishName ||
            normalizedSearch === ingredient.name.toLowerCase() ||
            normalizedSearch === norwegianName
        ) {
            return ingredient;
        }
    }

    return null;
}