import "./style.css";
import * as modal from "./modal.js";
import todoView from "./view/todoView";

const controlTodo = function () {
  modal.createTask("Do math hw", "2014-12-7", "homework");
  console.log(modal.state.todos[0]);
  todoView.render(modal.state.todos[0]);
};

const init = function () {
  controlTodo();
};

init();
