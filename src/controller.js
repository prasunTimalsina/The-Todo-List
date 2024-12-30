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
};

const controlDeleteProject = function (projectName) {
  projectName = projectName.toLowerCase();

  //find Project Index
  const index = modal.state.projects.findIndex(
    (proejct) => proejct.title === projectName
  );

  //delete from state
  modal.state.projects.splice(index, 1);
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
};

const controlShowForm = function () {
  if (modal.state.projects.length === 0) {
    alert("Add projects first");
    return false;
  }
  return true;
};

const init = function () {
  todoView._addHandlerDelete(controlDeleteTodo);
  sidebarProjectView._addHandlerDeleteProject(controlDeleteProject);
  addProjectView.addHandlerAddProject(controlAddProject);
  todoView.addHandlerCompleteTask(controlCompleteTodo);
  addTaskView._addHandlerAddTask(controlAddTodo);
  addTaskView._addHandlerShowForm(controlShowForm);
};
init();
