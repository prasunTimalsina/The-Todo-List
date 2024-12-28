import "./style.css";
import { format, compareAsc } from "date-fns";
import * as modal from "./modal.js";
import todoView from "./view/todoView";
import projectView from "./view/projectView.js";

const controlTodo = function () {
  const date = format(new Date(), "MM/dd/yyyy");

  const College = modal.createProject("College");

  modal.createTask("Do math hw", "12/02/2020", "college");

  projectView.render(modal.state.projects);

  /* 
  console.log(modal.state.todos[0]);
  todoView.render(modal.state.todos); */
};

const init = function () {
  controlTodo();
};

init();
