"use strict";

let computerDecide;
let playerDecide;
let randomChoice;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// Knapper
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);

//slutresultat

const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");


// Spilleren vælger rock
function rockClicked() {
    playerDecide = "rock";
    decide();
}


// Spilleren vælger paper
function paperClicked() {
    playerDecide = "paper";
    decide();
}


// Spilleren vælger scissors
function scissorsClicked() {
    playerDecide = "scissors";
    decide();
}


// Computeren vælger tilfældigt
function decide() {

    randomChoice = Math.floor(Math.random() * 3);

    console.log("Spiller:", playerDecide);
    console.log("Random:", randomChoice);

    countdown();
}


// Hænderne ryster
function countdown() {

    // Fjern gamle valg
    player1.classList.remove("rock", "paper", "scissors");
    player2.classList.remove("rock", "paper", "scissors");

    // Fjern gammel shake
    player1.classList.remove("shake");
    player2.classList.remove("shake");

    // Tving animationen til at starte igen
    void player1.offsetWidth;
    void player2.offsetWidth;

    // Start shake-animation
    player1.classList.add("shake");
    player2.classList.add("shake");
      lose.classList.add("hidden");
        draw.classList.add("hidden");
        win.classList.add("hidden");
    // Vent til animationen er færdig
    player1.addEventListener("animationend", choice, { once: true });
}


// Vis valgene EFTER animationen
function choice() {

    // Spillerens valg
    if (playerDecide === "rock") {

        player1.classList.add("rock");

    } else if (playerDecide === "paper") {

        player1.classList.add("paper");

    } else {

        player1.classList.add("scissors");
    }


    // Computerens valg
    if (randomChoice === 0) {

        computerDecide = "rock";
        player2.classList.add("rock");

    } else if (randomChoice === 1) {

        computerDecide = "paper";
        player2.classList.add("paper");

    } else {

        computerDecide = "scissors";
        player2.classList.add("scissors");
    }


    console.log("Spiller:", playerDecide);
    console.log("Computer:", computerDecide);

    result();
}


// Resultatet
function result() {

    if (playerDecide === computerDecide) {

        console.log("Uafgjort!");
        draw.classList.remove("hidden");
        lose.classList.add("hidden");
        win.classList.add("hidden");

    } else if (
        (playerDecide === "rock" && computerDecide === "scissors") ||
        (playerDecide === "paper" && computerDecide === "rock") ||
        (playerDecide === "scissors" && computerDecide === "paper")
    ) {

        console.log("Du vinder!");
        win.classList.remove("hidden");
        draw.classList.add("hidden");
        lose.classList.add("hidden");

    } else {

        console.log("Computeren vinder!");
        lose.classList.remove("hidden");
        draw.classList.add("hidden");
        win.classList.add("hidden");
    }
}

//Restart game



//klaus siger vi skal tænke over at vi kan hurtgt skifte computerens valg ud 
//med noget random. (F-sætning f - computerens valg = scissors)

//husk at fjerne classes eller eftertjekke classes hvis der opstår problemer. 

//hidden resultat kan ses i html

//ctrl + f (find og skift ud alle af samme fx navn, funktion whatever)



//Return vinder