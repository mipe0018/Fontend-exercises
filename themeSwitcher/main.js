"use strict";

// Det rigtige element her:
const themeSelect = document.getElementById('theme-select');

// Funktionen der ændrer farvetema:
function optionChoice() {
    const choice = themeSelect.value;

    // Nulstil altid klassen på body først, så temaerne ikke blandes sammen
    document.body.className = '';

    if (choice === "light") {
        document.body.classList.add("light-theme");
    } else if (choice === "pink") {
        document.body.classList.add("pink-theme");
    } else if (choice === "dark") {
        document.body.classList.add("dark-theme");
    }
}

// Ændrer 'select' til 'themeSelect', så det matcher variabelen i toppen
themeSelect.addEventListener("change", optionChoice);