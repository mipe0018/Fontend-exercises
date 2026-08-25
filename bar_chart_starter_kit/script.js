"use strict";

const arr = [];
const amount = "20";
setInterval(theFunction, 200);

const list = document.querySelector("ul");

const randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

const li = document.createElement("li");

//Generer Array

function theFunction() {
    arr.push(Math.floor(Math.random() * 101));
    if (arr.length >= amount) {
        arr.shift();
    }  
    console.log("arr", arr);
    render();
}

//Render 20 søjler med forskellige værdier 

function render() {
    document.querySelectorAll("li").forEach((elm, i) => {
        elm.style.setProperty("--height", arr[i]);
    })
}

//li.style.setProperty("--height", randomNumber); //30 skal være navnet på funktionen randomNumber 
//list.appendChild(li);



