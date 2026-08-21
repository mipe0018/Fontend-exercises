"use strict";

let computerDecide;
let playerDecide;

const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click",rockClicked)
paperBtn.addEventListener("click",paperClicked)
scissorsBtn.addEventListener("click",scissorsClicked)


function rockClicked() {
    //console.log(rockClicked)
    playerDecide = "rock"
    decide()
}

function paperClicked() {
    //console.log(paperClicked)
    playerDecide = "paper"
    decide()
}

function scissorsClicked() {
    //console.log(scissorsClicked)
    playerDecide = "scissors"
    decide()
}


function decide() {
    console.log("playerDecide", playerDecide);
    computerDecide = "scissors";  
    countdown();  
}

function countdown() {
    player1.classList.add("shake");
    player2.classList.add("shake");
    player1.addEventListener("animationed", choice);
}

function choice() {

}

function result() {

}

//Resultat



//klaus siger vi skal tænke over at vi kan hurtgt skifte computerens valg ud 
//med noget random. (F-sætning f - computerens valg = scissors)

//husk at fjerne classes eller eftertjekke classes hvis der opstår problemer. 

//hidden resultat kan ses i html

//ctrl + f (find og skift ud alle af samme fx navn, funktion whatever)



//Return vinder