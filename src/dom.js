"use strict";
import { ProjectContainer, todoElement } from "./UIElements";
const addTodo = function () {
  const contents = document.querySelector(".contents");
  contents.insertAdjacentHTML("beforebegin", ProjectContainer);
  const todos = document.querySelector(".todos");
  todos.insertAdjacentHTML("beforebegin", todoElement);
};

export { addTodo };
