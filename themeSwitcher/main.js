"use strict";

//hent select knappen
const themeSelect = document.getElementById("theme-select");

//Ved forskellige valg tilføj resprektiv value (choice = value under option i html)

//tilføj derefter det resprektive tema til body.
function optionChoice() {
    const choice = themeSelect.value;

    document.body.className = "";

    if (choice === "light") {
        document.body.classList.add("light-theme");
    } else if (choice === "pink") {
        document.body.classList.add("pink-theme");
    } else if (choice === "dark") {
        document.body.classList.add("dark-theme");
    }
    else if (choice === "mocha") {
        document.body.classList.add("mocha-them");
    }
    else if (choice === "pastel") {
        document.body.classList.add("pastel-theme");
    } else if (choice === "cloud") {
        document.body.classList.add("cloud-theme");
    }
}

themeSelect.addEventListener("change", optionChoice);