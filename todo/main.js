"use strict";


/* =========================
   DATA
========================= */

let lists = [
    {
        id: 1,
        name: "Hus",
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


let todos = [
    {
        id: 1,
        title: "Støvsuge",
        listId: 1,
        person: "Mig",
        deadline: "2026-08-31",
        completed: false
    },

    {
        id: 2,
        title: "Købe mælk",
        listId: 2,
        person: "Kæreste",
        deadline: "2026-09-01",
        completed: false
    },

    {
        id: 3,
        title: "Lave JavaScript",
        listId: 3,
        person: "Mig",
        deadline: "2026-08-31",
        completed: false
    }
];


/* =========================
   HTML ELEMENTER
========================= */

const listsContainer =
    document.querySelector("#lists-container");

const todayList =
    document.querySelector("#today-list");

const addListBtn =
    document.querySelector("#add-list-btn");

const listModal =
    document.querySelector("#list-modal");

const todoModal =
    document.querySelector("#todo-modal");

const saveListBtn =
    document.querySelector("#save-list");

const saveTodoBtn =
    document.querySelector("#save-todo");


let selectedListId = null;


/* =========================
   VIS LISTER
========================= */

function renderLists() {

    listsContainer.innerHTML = "";

    lists.forEach(list => {

        const listCard =
            document.createElement("div");

        listCard.classList.add("list-card");

        const numberOfTodos =
            todos.filter(todo => {
                return todo.listId === list.id &&
                       todo.completed === false;
            }).length;


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


        listCard.addEventListener("click", () => {

            selectedListId = list.id;

            todoModal.classList.remove("hidden");

        });


        listsContainer.appendChild(listCard);

    });
}


/* =========================
   VIS DAGENS OPGAVER
========================= */

function renderTodayTodos() {

    todayList.innerHTML = "";


    const today =
        new Date().toISOString().split("T")[0];


    const todayTodos =
        todos.filter(todo => {
            return todo.deadline === today;
        });


    todayTodos.forEach(todo => {

        const li =
            document.createElement("li");

        li.classList.add("todo");


        if (todo.completed) {
            li.classList.add("completed");
        }


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


        const checkbox =
            li.querySelector("input");


        checkbox.addEventListener("change", () => {

            todo.completed =
                checkbox.checked;

            renderLists();
            renderTodayTodos();

        });


        todayList.appendChild(li);

    });


    if (todayTodos.length === 0) {

        todayList.innerHTML =
            "<p>Ingen opgaver i dag 🎉</p>";

    }

}


/* =========================
   OPRET NY LISTE
========================= */

addListBtn.addEventListener("click", () => {

    listModal.classList.remove("hidden");

});


saveListBtn.addEventListener("click", () => {

    const name =
        document.querySelector("#list-name").value;

    const icon =
        document.querySelector("#list-icon").value;


    if (name === "") {

        alert("Skriv et navn til listen");

        return;

    }


    const newList = {

        id: Date.now(),

        name: name,

        icon: icon || "📋"

    };


    lists.push(newList);


    document.querySelector("#list-name").value = "";

    document.querySelector("#list-icon").value = "";


    listModal.classList.add("hidden");


    renderLists();

});


/* =========================
   OPRET NY OPGAVE
========================= */

saveTodoBtn.addEventListener("click", () => {

    const title =
        document.querySelector("#todo-title").value;

    const deadline =
        document.querySelector("#todo-deadline").value;

    const person =
        document.querySelector("#todo-person").value;


    if (title === "") {

        alert("Skriv en opgave");

        return;

    }


    const newTodo = {

        id: Date.now(),

        title: title,

        listId: selectedListId,

        person: person,

        deadline: deadline,

        completed: false

    };


    todos.push(newTodo);


    document.querySelector("#todo-title").value = "";

    document.querySelector("#todo-deadline").value = "";


    todoModal.classList.add("hidden");


    renderLists();

    renderTodayTodos();

});


/* =========================
   LUK POPUPS
========================= */

document
    .querySelector("#close-list-modal")
    .addEventListener("click", () => {

        listModal.classList.add("hidden");

    });


document
    .querySelector("#close-todo-modal")
    .addEventListener("click", () => {

        todoModal.classList.add("hidden");

    });


/* =========================
   START APPEN
========================= */

renderLists();

renderTodayTodos();