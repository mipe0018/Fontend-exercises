"use strict";

/*
=========================================================
    HVAD BETYDER "use strict"?

    "use strict" fortæller JavaScript, at vi gerne vil
    bruge en mere sikker og streng måde at skrive kode på.

    Det hjælper blandt andet med at opdage fejl, som
    JavaScript ellers måske ville ignorere.

    Eksempel:
        x = 10;

    Uden strict mode kan JavaScript i nogle tilfælde
    oprette en global variabel.

    Med "use strict" vil det give en fejl, hvis x ikke
    først er blevet erklæret.
=========================================================
*/


/* =========================
   DATA
========================= */

/*
    "lists" er et array.

    Et array er en liste, hvor vi kan gemme flere værdier.

    Her gemmer vi vores forskellige lister:

    - Hus
    - Indkøb
    - Studie

    Hver liste er et objekt med:
        id
        name
        icon

    Et objekt bruger key/value-par:

        id: 1

    betyder:
        key = id
        value = 1
*/

let lists = [

    {
        // Et unikt ID for listen
        id: 1,

        // Navnet på listen
        name: "Hus",

        // Emoji som bruges som ikon
        icon: "🏠"
    },

    {
        id: 2,
        name: "Indkøb",
        icon: "🛒"
    },

    {
        id: 3,
        name: "Studie",
        icon: "🎓"
    }
];


/*
    "todos" er også et array.

    Det indeholder alle vores opgaver.

    Hver opgave er et objekt.

    En opgave har:

        id
        title
        listId
        person
        deadline
        completed

    Eksempel:

        listId: 1

    betyder, at opgaven hører til listen med id 1.

    Det er altså sådan, vi forbinder en todo med en liste.
*/

let todos = [

    {
        // Unikt ID til opgaven
        id: 1,

        // Navnet på opgaven
        title: "Støvsuge",

        // Opgaven hører til listen med id 1 = Hus
        listId: 1,

        // Den person der skal udføre opgaven
        person: "Mig",

        // Deadline for opgaven
        // Formatet er YYYY-MM-DD
        deadline: "2026-08-31",

        // false betyder, at opgaven ikke er færdig
        completed: false
    },

    {
        id: 2,
        title: "Købe mælk",

        // Hører til listen "Indkøb"
        listId: 2,

        person: "Kæreste",
        deadline: "2026-09-01",

        // Opgaven er ikke færdig
        completed: false
    },

    {
        id: 3,
        title: "Lave JavaScript",

        // Hører til listen "Studie"
        listId: 3,

        person: "Mig",
        deadline: "2026-08-31",
        completed: false
    }
];


/* =========================
   HTML ELEMENTER
========================= */

/*
    Her finder vi HTML-elementer fra vores HTML-side.

    document.querySelector("#lists-container")

    betyder:

    "Find det HTML-element, som har id='lists-container'."

    Eksempel på HTML:

        <div id="lists-container"></div>

    Når elementet er fundet, gemmer vi det i en variabel.

    Så kan vi senere skrive:

        listsContainer.innerHTML = ...

    og dermed ændre HTML'en.
*/

const listsContainer =
    document.querySelector("#lists-container");


/*
    Finder HTML-elementet, hvor dagens opgaver skal vises.

    Eksempel:

        <ul id="today-list"></ul>
*/
const todayList =
    document.querySelector("#today-list");


/*
    Finder knappen til at oprette en ny liste.

    Eksempel:

        <button id="add-list-btn">
            Tilføj liste
        </button>
*/
const addListBtn =
    document.querySelector("#add-list-btn");


/*
    Finder popup/modal-vinduet til oprettelse
    af en ny liste.
*/
const listModal =
    document.querySelector("#list-modal");


/*
    Finder popup/modal-vinduet til oprettelse
    af en ny todo/opgave.
*/
const todoModal =
    document.querySelector("#todo-modal");


/*
    Finder knappen "Gem liste".
*/
const saveListBtn =
    document.querySelector("#save-list");


/*
    Finder knappen "Gem opgave".
*/
const saveTodoBtn =
    document.querySelector("#save-todo");


/*
    Denne variabel holder styr på, hvilken liste
    brugeren har valgt.

    I starten har brugeren ikke valgt nogen liste.

    Derfor:

        null

    betyder:
        "Der er ikke valgt nogen liste endnu."
*/
let selectedListId = null;


/* =========================
   VIS LISTER
========================= */

/*
    Funktionen renderLists() sørger for at vise
    alle lister på skærmen.

    "render" betyder typisk:

        Tag data fra JavaScript
        og vis det i HTML'en.
*/
function renderLists() {

    /*
        Vi sletter først alt indhold i containeren.

        Hvorfor?

        Fordi vi gerne vil bygge listen op igen
        fra den aktuelle data.

        Hvis vi ikke gjorde dette, kunne vi risikere
        at få de samme lister vist flere gange.
    */
    listsContainer.innerHTML = "";


    /*
        .forEach() går igennem hvert element i arrayet.

        "list" er den aktuelle liste.

        Første gang:
            list = Hus

        Anden gang:
            list = Indkøb

        Tredje gang:
            list = Studie
    */
    lists.forEach(list => {


        /*
            Vi opretter et nyt HTML <div>-element.

            Det findes endnu ikke på siden.

            Det eksisterer kun i JavaScript.
        */
        const listCard =
            document.createElement("div");


        /*
            Vi giver vores nye div CSS-klassen:

                list-card

            CSS'en kan derefter style elementet.
        */
        listCard.classList.add("list-card");


        /*
            Her finder vi ud af, hvor mange IKKE-færdige
            opgaver der hører til den aktuelle liste.
        */

        const numberOfTodos =
            todos.filter(todo => {

                /*
                    Første betingelse:

                        todo.listId === list.id

                    betyder:

                    "Hører denne todo til den aktuelle liste?"
                */

                /*
                    Anden betingelse:

                        todo.completed === false

                    betyder:

                    "Er opgaven ikke færdig?"
                */

                /*
                    Begge betingelser skal være sande.

                    && betyder "OG".
                */

                return todo.listId === list.id &&
                       todo.completed === false;

            }).length;


        /*
            Nu laver vi HTML-indholdet til vores listekort.

            Template literals bruger:

                ` ... `

            i stedet for:

                " ... "

            Fordelen er, at vi kan indsætte
            JavaScript-variabler direkte med:

                ${variabel}
        */

        listCard.innerHTML = `

            <div class="list-info">

                <span class="list-icon">
                    ${list.icon}
                </span>

                <strong>
                    ${list.name}
                </strong>

            </div>

            <span>
                ${numberOfTodos}
            </span>
        `;


        /*
            Her laver vi en click-event på listen.

            Det betyder:

            "Når brugeren klikker på dette listekort,
            skal denne funktion køre."
        */

        listCard.addEventListener("click", () => {


            /*
                Vi gemmer ID'et på den liste,
                brugeren lige har klikket på.

                Eksempel:

                    Hvis brugeren klikker på Hus:

                    selectedListId = 1
            */
            selectedListId = list.id;


            /*
                Vi fjerner CSS-klassen "hidden"
                fra todoModal.

                Hvis CSS eksempelvis siger:

                    .hidden {
                        display: none;
                    }

                vil modal-vinduet nu blive synligt.
            */
            todoModal.classList.remove("hidden");

        });


        /*
            Til sidst indsætter vi det nye listekort
            i HTML-containeren.

            appendChild betyder:

                "Tilføj dette HTML-element som barn
                 af dette element."
        */
        listsContainer.appendChild(listCard);

    });
}


/* =========================
   VIS DAGENS OPGAVER
========================= */

/*
    Denne funktion finder alle opgaver,
    der har deadline i dag,
    og viser dem på siden.
*/
function renderTodayTodos() {


    /*
        Vi sletter først den eksisterende liste
        over dagens opgaver.

        Derefter bygger vi den op igen.
    */
    todayList.innerHTML = "";


    /*
        new Date() opretter et Date-objekt
        med den aktuelle dato og tid.

        Eksempel:

            2026-09-04T11:14:00

        .toISOString() laver datoen om til et
        standardiseret tekstformat.

        Eksempel:

            2026-09-04T09:14:00.000Z

        .split("T") deler teksten ved "T".

        Det giver fx:

            ["2026-09-04", "09:14:00.000Z"]

        [0] tager det første element:

            "2026-09-04"

        Derfor får vi kun dagens dato.
    */

    const today =
        new Date().toISOString().split("T")[0];


    /*
        .filter() laver et nyt array.

        Vi beholder kun de todos,
        hvor deadline er lig med dagens dato.
    */

    const todayTodos =
        todos.filter(todo => {

            /*
                Hvis:

                    todo.deadline === today

                er true,

                kommer todo'en med i todayTodos.
            */

            return todo.deadline === today;

        });


    /*
        Nu går vi igennem alle opgaver,
        der har deadline i dag.
    */

    todayTodos.forEach(todo => {


        /*
            Opretter et nyt <li>-element.

            Det skal bruges til at vise én opgave.
        */
        const li =
            document.createElement("li");


        /*
            Giver <li>-elementet CSS-klassen:

                todo
        */
        li.classList.add("todo");


        /*
            Hvis opgaven allerede er færdig,
            tilføjer vi også CSS-klassen "completed".

            Det kan CSS'en eksempelvis bruge til
            at lave gennemstregning.

            Eksempel:

                .completed {
                    text-decoration: line-through;
                }
        */

        if (todo.completed) {
            li.classList.add("completed");
        }


        /*
            Her laver vi HTML'en for opgaven.

            Vi laver:

                1. En checkbox
                2. Opgavens titel
                3. Personen

            ${todo.completed ? "checked" : ""}

            er en ternary operator.

            Den betyder:

                Hvis todo.completed er true:
                    skriv "checked"

                Ellers:
                    skriv ""

            Eksempel:

                completed = true

                => checked

            completed = false

                => ""
        */

        li.innerHTML = `

            <input
                type="checkbox"
                ${todo.completed ? "checked" : ""}
            >

            <div class="todo-info">

                <span>
                    ${todo.title}
                </span>

                <span class="todo-date">
                    👤 ${todo.person}
                </span>

            </div>

        `;


        /*
            Nu finder vi checkboxen inde i vores <li>.

            querySelector("input") finder det første
            <input>-element inde i li.
        */

        const checkbox =
            li.querySelector("input");


        /*
            Vi laver en change-event på checkboxen.

            "change" sker eksempelvis,
            når brugeren sætter eller fjerner fluebenet.
        */

        checkbox.addEventListener("change", () => {


            /*
                Vi opdaterer todo.completed.

                checkbox.checked fortæller,
                om checkboxen er markeret.

                Hvis brugeren sætter flueben:

                    checkbox.checked = true

                Så bliver:

                    todo.completed = true
            */

            todo.completed =
                checkbox.checked;


            /*
                Nu renderer vi listerne igen.

                Det er nødvendigt, fordi antallet af
                aktive opgaver i listen kan have ændret sig.

                Eksempel:

                    Før:
                    Hus = 1 opgave

                    Efter opgaven bliver færdig:
                    Hus = 0 opgaver
            */
            renderLists();


            /*
                Vi renderer også dagens opgaver igen.

                Det sørger blandt andet for,
                at CSS-klassen "completed" bliver
                opdateret.
            */

            renderTodayTodos();

        });


        /*
            Til sidst tilføjer vi vores <li>
            til todayList.
        */

        todayList.appendChild(li);

    });


    /*
        Hvis der ikke er nogen opgaver i dag,
        viser vi en besked.

        todayTodos.length fortæller,
        hvor mange elementer der er i arrayet.
    */

    if (todayTodos.length === 0) {

        todayList.innerHTML =
            "<p>Ingen opgaver i dag 🎉";

    }

}


/* =========================
   OPRET NY LISTE
========================= */

/*
    Her fortæller vi JavaScript:

    "Når brugeren klikker på knappen
     addListBtn, skal denne funktion køres."
*/

addListBtn.addEventListener("click", () => {


    /*
        Vi viser modal-vinduet til oprettelse
        af en ny liste.

        remove("hidden") gør elementet synligt.
    */

    listModal.classList.remove("hidden");

});


/*
    Nu laver vi en click-event på
    "Gem liste"-knappen.
*/

saveListBtn.addEventListener("click", () => {


    /*
        Vi finder inputfeltet med id:

            list-name

        og henter brugerens tekst med:

            .value
    */

    const name =
        document.querySelector("#list-name").value;


    /*
        Det samme gør vi for ikon-inputfeltet.
    */

    const icon =
        document.querySelector("#list-icon").value;


    /*
        Vi tjekker om brugeren har skrevet
        et navn til listen.

        === betyder "er præcis lig med".
    */

    if (name === "") {


        /*
            alert() viser en popup-besked.
        */

        alert("Skriv et navn til listen");


        /*
            return stopper funktionen.

            Det betyder, at der ikke bliver oprettet
            nogen liste, hvis navnet er tomt.
        */

        return;

    }


    /*
        Hvis navnet ikke er tomt,
        opretter vi et nyt objekt.

        Date.now() giver det aktuelle tidspunkt
        i millisekunder.

        Det bruges her som et simpelt unikt ID.
    */

    const newList = {

        id: Date.now(),

        name: name,

        /*
            Hvis brugeren ikke skriver et ikon,
            bruges 📋 som standardikon.

            || betyder "ELLER".

            Hvis icon er tom/falsy:

                icon || "📋"

            bliver:

                "📋"
        */

        icon: icon || "📋"

    };


    /*
        push() tilføjer den nye liste
        til vores lists-array.
    */

    lists.push(newList);


    /*
        Efter listen er gemt,
        tømmes inputfeltet.

        Det gør, at næste gang modal-vinduet åbnes,
        er feltet tomt.
    */

    document.querySelector("#list-name").value = "";


    /*
        Tømmer også ikon-inputfeltet.
    */

    document.querySelector("#list-icon").value = "";


    /*
        Lukker modal-vinduet.
    */

    listModal.classList.add("hidden");


    /*
        Vi renderer listerne igen.

        Det er vigtigt, fordi den nye liste
        nu skal kunne ses på skærmen.
    */

    renderLists();

});


/* =========================
   OPRET NY OPGAVE
========================= */

/*
    Her laver vi en click-event på
    "Gem opgave"-knappen.
*/

saveTodoBtn.addEventListener("click", () => {


    /*
        Henter teksten fra inputfeltet
        til opgavens titel.
    */

    const title =
        document.querySelector("#todo-title").value;


    /*
        Henter den valgte deadline.
    */

    const deadline =
        document.querySelector("#todo-deadline").value;


    /*
        Henter den valgte person.
    */

    const person =
        document.querySelector("#todo-person").value;


    /*
        Vi tjekker, om brugeren har skrevet
        en titel til opgaven.
    */

    if (title === "") {

        alert("Skriv en opgave");

        /*
            Stopper funktionen,
            hvis titlen er tom.
        */

        return;

    }


    /*
        Vi opretter et nyt todo-objekt.

        selectedListId fortæller,
        hvilken liste brugeren klikkede på,
        før todo-modal blev åbnet.
    */

    const newTodo = {

        /*
            Nyt unikt ID.
        */
        id: Date.now(),

        /*
            Opgavens titel.
        */
        title: title,

        /*
            ID'et på den valgte liste.

            Eksempel:

                Brugeren klikker på "Studie".

                Studie har:

                    id: 3

                Derfor:

                    listId: 3
        */
        listId: selectedListId,

        /*
            Den valgte person.
        */
        person: person,

        /*
            Opgavens deadline.
        */
        deadline: deadline,

        /*
            En ny opgave er ikke færdig endnu.
        */
        completed: false

    };


    /*
        Tilføjer den nye todo til todos-arrayet.
    */

    todos.push(newTodo);


    /*
        Tømmer titel-inputfeltet.
    */

    document.querySelector("#todo-title").value = "";


    /*
        Tømmer deadline-inputfeltet.

        Bemærk:

        Person-inputfeltet bliver IKKE tømt her.
    */

    document.querySelector("#todo-deadline").value = "";


    /*
        Lukker todo-modal.
    */

    todoModal.classList.add("hidden");


    /*
        Opdaterer listerne.

        Det er nødvendigt, fordi antallet af
        opgaver i den valgte liste er ændret.
    */

    renderLists();


    /*
        Opdaterer også dagens opgaver.

        Hvis den nye opgave har dagens dato
        som deadline, bliver den vist med det samme.
    */

    renderTodayTodos();

});


/* =========================
   LUK POPUPS
========================= */

/*
    Her finder vi knappen, der lukker
    "Opret liste"-modalvinduet.

    Når brugeren klikker på den,
    tilføjer vi "hidden"-klassen igen.
*/

document
    .querySelector("#close-list-modal")
    .addEventListener("click", () => {

        listModal.classList.add("hidden");

    });


/*
    Det samme gør vi for todo-modal.

    Når brugeren klikker på
    "Luk" i todo-modal,
    bliver modal-vinduet skjult.
*/

document
    .querySelector("#close-todo-modal")
    .addEventListener("click", () => {

        todoModal.classList.add("hidden");

    });


/* =========================
   START APPEN
========================= */

/*
    Når JavaScript-filen bliver kørt,
    kalder vi renderLists().

    Det betyder:

        "Vis alle lister på skærmen."
*/

renderLists();


/*
    Derefter kalder vi renderTodayTodos().

    Det betyder:

        "Find alle opgaver med dagens dato
         og vis dem på skærmen."
*/

renderTodayTodos();
