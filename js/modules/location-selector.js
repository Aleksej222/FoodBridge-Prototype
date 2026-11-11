import {
    savePreferences,
    loadPreferences
} from "./user-preferences.js";

export function initializeLocationSelector() {

    const locationToggle = document.querySelector(".location-button");
    const locationPanel = document.getElementById("location-panel");
    const locationForm = document.getElementById("location-form");
    const addressInput = document.getElementById("shopping-address");
    const locationName = document.querySelector(".location-name");

    if (
        !locationToggle ||
        !locationPanel ||
        !locationForm ||
        !addressInput ||
        !locationName
    ) {
        console.error("Location selector: Missing HTML elements.");
        return;
    }

    // Restore previously selected location.
    const savedPreferences = loadPreferences();

    if (savedPreferences?.location) {
        locationName.textContent = savedPreferences.location;
    }

    // Open and close the location panel
    locationToggle.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();

        locationPanel.hidden = !locationPanel.hidden;

        if (!locationPanel.hidden) {
            addressInput.focus();
        }

    });

    // Apply selected location.
    locationForm.addEventListener("submit", event => {

        event.preventDefault();

        const newLocation = addressInput.value.trim() || "Oslo";

        // Update displayed location.
        locationName.textContent = newLocation;

        // Save location preference.
        savePreferences({
            location: newLocation
        });

        locationPanel.hidden = true;

        addressInput.value = "";

    });

}
