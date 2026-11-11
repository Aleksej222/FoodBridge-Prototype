
const STORAGE_KEY = "foodBridgePreferences";

// Save preferences in the browser.
export function savePreferences(preferences) {
    try {
        const currentPreferences = loadPreferences() || {};

        const updatedPreferences = {
            ...currentPreferences,
            ...preferences
        };

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updatedPreferences)
        );

    } catch (error) {
        console.error("Could not save preferences:", error);
    }
}

// Load saved preferences from the browser.
export function loadPreferences() {
    try {
        const savedPreferences = localStorage.getItem(STORAGE_KEY);

        return savedPreferences
            ? JSON.parse(savedPreferences)
            : null;

    } catch (error) {
        console.error("Could not load preferences:", error);
        return null;
    }
}
