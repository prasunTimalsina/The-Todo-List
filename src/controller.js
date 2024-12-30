import "./style.css";
import { format, compareAsc } from "date-fns";
import * as modal from "./modal.js";
import todoView from "./view/todoView";
import projectView from "./view/projectView.js";
import sidebarProjectView from "./view/sidebarProjectView.js";
import addProjectView from "./view/addProjectView.js";
import { ckb } from "date-fns/locale";

const reRenderProject = function () {
  //render projects
  projectView.render(modal.state.projects);

  // Re-attach event handlers for delete buttons
  todoView._addHandlerDelete(controlDeleteTodo);
};

const reRenderProjectList = function () {
  //re render project-list
  sidebarProjectView.render(modal.state.projects);
};

const controlTodo = function () {
  const date = format(new Date(), "MM/dd/yyyy");

  // Create Projects
  const College = modal.createProject("College");
  const Work = modal.createProject("Work");

  // Add Tasks to College Project
  modal.createTask("Do math homework", "12/02/2020", "college");
  modal.createTask("Prepare for Physics exam", "12/15/2020", "college");

  // Add Tasks to Work Project
  modal.createTask("Finish project report", "12/05/2020", "work");
  modal.createTask("Prepare presentation", "12/08/2020", "work");

  projectView.render(modal.state.projects);

  /* 
  console.log(modal.state.todos[0]);
  todoView.render(modal.state.todos); */
};

const controlAddProject = function (projectName) {
  const newProject = modal.createProject(projectName);

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

  //render projects
  projectView.render(modal.state.projects);

  // Re-attach event handlers for delete buttons
  todoView._addHandlerDelete(controlDeleteTodo);
};

const init = function () {
  controlTodo();
  todoView._addHandlerDelete(controlDeleteTodo);
  sidebarProjectView._addHandlerDeleteProject(controlDeleteProject);
  addProjectView.addHandlerAddProject(controlAddProject);
};

init();
