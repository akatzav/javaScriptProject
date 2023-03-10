import { Task } from "./task.js";
import { tm } from "./taskManager.js";
const tasksDiv = document.getElementById("tasks") as HTMLDivElement;
const todoDescription = document.getElementById(
    "todo-description"
) as HTMLInputElement;
const btnAddTodo = document.getElementById("btn-add-todo") as HTMLButtonElement;

btnAddTodo.addEventListener("click", () => {
    let text = todoDescription.value;
    let task = new Task(text);
    tm.addTask(task);

    //remove all children from tasksDiv
    //tasksDiv.replaceChildren();

    //add the task to tasksDiv
    addTaskToHTML(task);
});

function addTaskToHTML(task: Task) {
    let row = document.createElement("div");
    row.classList.add("task", "row", "bg-primary");
    row.id = task.timeStamp;
    let input = document.createElement("input");
    input.classList.add("col-10");
    input.placeholder = "description";
    input.disabled = true; //when edit is clicked => disable = false
    input.value = task.description;

    input.addEventListener("input", () => {
        task.description = input.value;
        tm.updateTask(task);
    });

    let btnEdit = document.createElement("button");
    btnEdit.classList.add("btn", "btn-warning", "col", "text-light");
    btnEdit.innerHTML = 'Edit: <i class="bi bi-pencil-square"></i>';
    btnEdit.addEventListener("click", () => {
        input.disabled = !input.disabled;
    });

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btn", "btn-danger", "col");
    btnDelete.innerHTML = 'Delete: <i class="bi bi-trash3-fill"></i>';
    btnDelete.addEventListener("click", () => {
        tm.removeTask(task.timeStamp);
        deleteTaskFromHTML(task);
    });

    row.appendChild(input);
    row.appendChild(btnEdit);
    row.appendChild(btnDelete);

    tasksDiv.appendChild(row);
}

function deleteTaskFromHTML(task: Task) {
    document.getElementById(task.timeStamp)?.remove();
}
