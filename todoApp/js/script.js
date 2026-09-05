"use strict";

//<button class="create_task">New Task</button>
//<input type="text" class="task_text">
//<ul class="tasks"></ul>

const task_input = document.querySelector(".task_text");
const createTask_btn = document.querySelector(".create_task");
const ul_elm = document.querySelector("tasks");
const task_arr = [];

createTask_btn.addEventListener("click", createTask);

function createTask() {
    const task_obj = {
        taskText: task_input.value,
        taskDone: false,
        id:self.crypto.randomUUID()
    };

    task_arr.push(task_obj);

    console.log("task_arr", task_arr);
returnList();
}

function renderList() {
    ul_elm.innerHTML = "";

    task_arr.forEach((task) => {
        const li = document.createElement("li");
        ul_elm.innerHTML += `<li><p>${task.taskText}</p></li>`;
    });
}