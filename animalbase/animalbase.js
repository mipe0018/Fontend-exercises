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
//tilføjer funktionen "a"dd.eventlisteners på buttons"
    registerButtons();
    loadJSON();
}

// add.eventlisteners på buttons. aka Registrer knapper. 
function registerButtons() {
    //indsætter vi denne i konsollen kan vi se de 3 knapper fra html siden. 
    document.querySelectorAll("[data-action='filter']")
    .forEach(button => button.addEventListener("click", selectFilter));
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

// selectFilter function
function selectFilter(event) {
    const filter = event.target.dataset.filter;
    //console.log viser hvilket data-filter der tilhøre hvilken knap, dvs når der trykkes på en knap kan tilhørende filter ses i konsollen. 
    console.log(`User Selected ${filter}`);
    filterList(filter);
}


// Filter animals
function filterList(filterBy) {

    let filteredList = allAnimals;

    if (filterBy === "cat") {

        // Only cats
        filteredList = allAnimals.filter(isCat);

    } else if (filterBy === "dog") {

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

// selectSort function
function selectSort(event) {
    const sortBy = event.target.dataset.sort;
    console.log(`User Selected ${sortBy}`);
    sortList(sortBy);
}


//SortList sortere listen
function sortList(sortBy) {
    let sortedList = allAnimals;

    if (sortBy === "name") {
        sortedList = sortedList.sort(sortByName);
    } else if (sortBy === "type") {
        sortedList = sortedList.sort(sortByType);
    }

    
    displayList(sortedList);
};

//Sort by name funktion
function sortByName(animal1A, animal1B) {
    if (animal1A.name < animal1B.name) {
        return -1;
    } else {
        return 1;
    }
}

//Sort by type funktion
function sortByType(animal1A, animal1B) {
    if (animal1A.type < animal1B.type) {
        return -1;
    } else {
        return 1;
    }
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
