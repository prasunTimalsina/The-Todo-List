import "./style.css";
import { format, compareAsc } from "date-fns";
import * as modal from "./modal.js";
import todoView from "./view/todoView";
import projectView from "./view/projectView.js";
import sidebarProjectView from "./view/sidebarProjectView.js";
import addProjectView from "./view/addProjectView.js";
import addTaskView from "./view/addTaskView.js";
import { ckb } from "date-fns/locale";

const reRenderProject = function () {
  //render projects
  projectView.render(modal.state.projects);

  // Re-attach event handlers for delete buttons
  todoView._addHandlerDelete(controlDeleteTodo);

  todoView.addHandlerCompleteTask(controlCompleteTodo);
};

const reRenderProjectList = function () {
  //re render project-list
  sidebarProjectView.render(modal.state.projects);
};

const controlAddTodo = function (title, dueDate, project) {
  if (modal.state.projects.length === 0) alert("Add some project first");
  modal.createTask(title, dueDate, project);
  reRenderProject();
};

const controlAddProject = function (projectName) {
  const newProject = modal.createProject(projectName);
  addTaskView.addProjectOption(modal.state.projects);

  reRenderProject();
  reRenderProjectList();
};

const controlDeleteTodo = function (Id, projectName) {
  //delete todo
  modal.deleteTodo(projectName, Id);

  console.log(modal.state.projects);

  //render projects
  projectView.render(modal.state.projects);

  // Re-attach event handlers for delete buttons
  todoView._addHandlerDelete(controlDeleteTodo);
  /* 
  //render taskremaining
  renderTaskRemaining(); */
};
const controlDeleteProject = function (projectName) {
  modal.deleteProject(projectName);

  console.log(modal.state.projects);

  reRenderProjectList();

  reRenderProject();
};

const controlCompleteTodo = function (todoId) {
  modal.state.projects.forEach((project) => {
    project.todos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
  });

  reRenderProject();

  /*  renderTaskRemaining(); */
};

const controlShowForm = function () {
  if (modal.state.projects.length === 0) {
    alert("Add projects first");
    return false;
  }
  return true;
};

// this should not be in this controller.js but i got to
/* const renderTaskRemaining = function () {
  let count = 0;
  const taskRemaining = document.querySelector(".task-remaining span");
  modal.state.projects.forEach((project) => {
    project.todo.forEach((todo) => {
      if (todo.completed === false) count++;
    });
  });

  taskRemaining.textContent = count;
}; */

const init = function () {
  todoView._addHandlerDelete(controlDeleteTodo);
  sidebarProjectView._addHandlerDeleteProject(controlDeleteProject);
  addProjectView.addHandlerAddProject(controlAddProject);
  todoView.addHandlerCompleteTask(controlCompleteTodo);
  addTaskView._addHandlerAddTask(controlAddTodo);
  addTaskView._addHandlerShowForm(controlShowForm);

  reRenderProject(modal.state.projects);
  reRenderProjectList(modal.state.projects);
};
init();
