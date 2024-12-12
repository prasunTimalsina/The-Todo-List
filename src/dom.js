"use strict";

import { Todo } from "./modules";
import HandleTodos from "./handleTodos";
import { addTaskFormEl, CreatetodoEl } from "./UIElements";
const handleTodos = new HandleTodos();
///////////////elements////////////////

const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector(".add-task");
const addTaskForm = document.querySelector(".add-task-form");
const submitTaskBtn = document.querySelector(".submit-task");
const closeBtn = document.querySelector(".close-btn");
const todosContainer = document.querySelector(".todos");
///////////////Fuctions/////////////////////////

///Modal related function
const hideModal = function () {
  modal.style.display = "none";
};

const showModal = function () {
  modal.style.display = "flex";
};

const validateAddTaskForm = function () {
  const taskTitle = document.getElementById("task-title");
  const taskDate = document.getElementById("task-date");
  const taskPriority = document.getElementById("task-priority");
  const taskProject = document.getElementById("task-project");

  // Check if required fields are filled
  if (
    taskTitle.value.trim() === "" ||
    taskDate.value.trim() === "" ||
    taskPriority.value.trim() === ""
  ) {
    return false; // Invalid: Required fields are empty
  }

  return true; // Valid: Required fields are filled
};

function clearAddTaskFormFields() {
  const taskTitle = document.getElementById("task-title");
  const taskDate = document.getElementById("task-date");
  const taskPriority = document.getElementById("task-priority");
  const taskProject = document.getElementById("task-project");

  taskTitle.value = "";
  taskDate.value = "";
  taskPriority.value = "";
  taskProject.value = "";
}

const renderTodos = function () {
  todosContainer.textContent = ``;
  const todos = handleTodos.getTodos();
  todos.forEach((todo) => {
    const todoEl = addTaskFormEl(todo.title, todo.dueDate, todo.priority);
    todosContainer.insertAdjacentHTML("beforeend", todoEl);
  });
};

const renderTaskForm = function () {
  modal.textContent = ``;
  const formEl = addTaskFormEl;
  modal.insertAdjacent;
};
//form related task

/////////////////Events/////////////////////

////Task form related event
addTaskBtn.addEventListener("click", function () {
  showModal();
});

closeBtn.addEventListener("click", function () {
  hideModal();
});

submitTaskBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateAddTaskForm()) {
    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const project = document.getElementById("task-project").value;
    const todo = new Todo(title, date, priority);
    handleTodos.addTodo(todo);
    console.log(handleTodos.getTodos());
    renderTodos();
    clearAddTaskFormFields();
  } else {
    alert("Fill the form correctly");
    clearAddTaskFormFields();
  }
});

export { hideModal, showModal };
