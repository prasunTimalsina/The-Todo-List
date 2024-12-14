"use strict";

import { Todo, Project } from "./modules";
import HandleTodos from "./handleTodos";
import {
  addTaskFormEl,
  createProjectOptionEl,
  CreatetodoEl,
} from "./UIElements";
const handleTodos = new HandleTodos();
///////////////elements////////////////

const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector(".add-task");
const addTaskForm = document.querySelector(".add-task-form");
const projectOption = document.getElementById("task-project");
const addProjectBtn = document.querySelector(".add-projects");
const addProjectForm = document.querySelector(".add-project-form");
const submitTaskBtn = document.querySelector(".submit-task");
const submitProjectBtn = document.querySelector(".submit-project");
const closeBtn = document.querySelectorAll(".close-btn");
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
    const todoEl = CreatetodoEl(todo.title, todo.dueDate, todo.priority);
    todosContainer.insertAdjacentHTML("beforeend", todoEl);
  });
};

const renderTaskForm = function () {
  if (handleTodos.getProject() != 0) {
    addTaskForm.style.display = "";
    showModal();
    addProjectForm.style.display = "none";
    console.log(projectOption);
    handleTodos.getProject().forEach((project) => {
      projectOption.insertAdjacentHTML(
        "beforeend",
        createProjectOptionEl(project.getProjectTitle())
      );
    });
  } else {
    alert("Add some project first");
  }
};
//form related task

/////////////////Events/////////////////////

////Task form related event
addTaskBtn.addEventListener("click", function () {
  renderTaskForm();
});

addProjectBtn.addEventListener("click", function () {
  showModal();
  addTaskForm.style.display = "none";
});

closeBtn.forEach((clsbtn) => {
  clsbtn.addEventListener("click", function () {
    hideModal();
  });
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

submitProjectBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const titleEl = document.getElementById("project-title");
  const title = titleEl.value;
  handleTodos.addProject(new Project(title));
  console.log(handleTodos.getProject());
  titleEl.value = "";
  hideModal();
});

export { hideModal, showModal };
