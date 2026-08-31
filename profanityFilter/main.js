//Array med variablen curseWords og 3 objekter.
const curseWords = [
    {
        bad: "var",
        good: "const",
    },
    {
        bad: "float",
        good: "grid",
    },
    {
        bad: "marquee",
        good: "just don't",
    },
];

//console.log(curseWords[0].bad) //ordet "var"
//console.log(curseWords[2].bad) //ordet "marquee"
//console.log(curseWords[1].good) //ordet "grid"


//Hent teksten fra HTML
const text = document.querySelector(".text");

//Hent knappen
const button = document.querySelector(".skift");

//Hent dialogboksen 
const dialog = document.querySelector(".dialog");

//Hent knappen i dialogboksen
const luk = document.querySelector(".luk");


//Document.querySelector:
//const text = document.querySelector(".text");
//Gå ind i min HTML-side, find det element, der har class-navnet text,
//og gem det i en variabel, der hedder text.


//Lav et flag - for at se om teksten allerede er ændret
let updated = false;


//Laver en funktion der skrifter ordene ud.
//sentence betyder den tekst/sætning, som funktionen skal arbejde med.
//Vi kunne egentlig kalde den hvad som helst:

function replaceWords(sentence) {

    //Gå igennem arrayet
    curseWords.forEach((word) => {

        //Udskift det dårlige ord med det gode ord. ❤︎
        //word.bad er det dårlige ord.
        //word.good er det gode ord.
        //
        //span bruges til at markere det nye ord med en class,
        //så vi kan give ordet en anden baggrundsfarve med CSS.
        sentence = sentence.replaceAll(
            word.bad,
            `<span class="changed">${word.good}</span>`
        );

    });

    //Send den færdige tekst tilbage.
    return sentence;
}


//Reager på klik - Når brugeren klikker på knappen, gør dette.
button.addEventListener("click", () => {

    //Tjek om teksten allerede er ændret
    if (updated === true) {
        //showModal() viser vores <dialog>.
        dialog.showModal();

    } else {

        //Hvis teksten IKKE er ændret.
        //
        //innerHTML bruges i stedet for textContent,
        //fordi vi har lavet et <span> omkring de nye ord.
        //
        //replaceWords() tager teksten fra <p>
        //og erstatter de dårlige ord med de gode.
        text.innerHTML = replaceWords(text.textContent);

        //Sæt flaget til true
        //Nu ved programmet, at teksten allerede er ændret.
        updated = true;
    }

});


//Luk-knappen - Når der klikkes på Luk, så luk dialogboksen.
luk.addEventListener("click", () => {

    //close() lukker dialogboksen.
    dialog.close();

});
