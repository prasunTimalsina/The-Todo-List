"use strict";

import { Todo } from "./modules";
import HandleTodos from "./handleTodos";
const handleTodos = new HandleTodos();
///////////////elements////////////////

const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector(".add-task");
const addTaskForm = document.querySelector(".add-task-form");
const submitTaskBtn = document.querySelector(".submit-task");
const closeBtn = document.querySelector(".close-btn");

///////////////Fuctions/////////////////////////

///Modal related function
const hideModal = function () {
  modal.style.display = "none";
};

const showModal = function () {
  modal.style.display = "flex";
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

submitTaskBtn.addEventListener("click", function () {
  /* checkValidateInfo(); */
  const title = document.getElementById("task-title").value;
  const date = document.getElementById("task-date").value;
  const priority = document.getElementById("task-priority").value;
  const project = document.getElementById("task-project").value;
  const todo = new Todo(title, date, priority);
  handleTodos.addTodo(todo);
  console.log(handleTodos.getTodos());
});

export { hideModal, showModal };
