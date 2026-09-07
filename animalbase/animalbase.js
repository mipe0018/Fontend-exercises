"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
    name: "-default name-",
    desc: "-no description-",
    type: "-unknown-",
    age: 0
};

const allAnimals = [];

function start() {
    console.log("ready");

    loadJSON();
}

function loadJSON() {
    fetch("animals.json")
        .then(response => response.json())
        .then(jsonData => {
            // Når JSON er loaded, lav objekter
            prepareObjects(jsonData);
        })
        .catch(error => {
            console.error("Fejl ved loading af JSON:", error);
        });
}

function prepareObjects(jsonData) {
    jsonData.forEach(jsonObject => {

        // Create new object
        const animal = Object.create(Animal);

        // Extract data from JSON object
        const fullname = jsonObject.fullname;

        const firstSpace = fullname.indexOf(" ");
        const secondSpace = fullname.indexOf(" ", firstSpace + 1);
        const lastSpace = fullname.lastIndexOf(" ");

        const name = fullname.substring(0, firstSpace);
        const desc = fullname.substring(secondSpace + 1, lastSpace);
        const type = fullname.substring(lastSpace + 1);

        // Put cleaned data into newly created object
        animal.name = name;
        animal.desc = desc;
        animal.type = type;
        animal.age = jsonObject.age;

        console.log(
            `name: _${animal.name}_
            desc: _${animal.desc}_
            type: _${animal.type}_`
        );

        // Add object to global array
        allAnimals.push(animal);
    });

    // Show all animals initially
    displayList(allAnimals);
}


// Filter animals
function filterList(animalType) {

    let filteredList = allAnimals;

    if (animalType === "cat") {

        // Only cats
        filteredList = allAnimals.filter(isCat);

    } else if (animalType === "dog") {

        // Only dogs
        filteredList = allAnimals.filter(isDog);

    }

    // Display filtered list
    displayList(filteredList);
}


// Check if animal is a cat
function isCat(animal) {
    return animal.type === "cat";
}


// Check if animal is a dog
function isDog(animal) {
    return animal.type === "dog";
}


// Display animals
function displayList(animals) {

    // Clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // Build a new list
    animals.forEach(displayAnimal);
}


// Display one animal
function displayAnimal(animal) {

    // Create clone
    const clone = document
        .querySelector("template#animal")
        .content
        .cloneNode(true);

    // Set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // Append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}
