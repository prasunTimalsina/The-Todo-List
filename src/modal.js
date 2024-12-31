import generateUniqueId from "generate-unique-id";
import { format, compareAsc } from "date-fns";
export const state = {
  projects: [],
};

export const createProject = function (title) {
  title = title.toLowerCase();
  const project = {
    id: generateUniqueId({
      length: 6,
      useLetters: false,
    }),
    title,
    todos: [],
  };
  state.projects.push(project);
  presistProjects();
  return project;
};

export const createTask = function (taskTitle, dueDate, projectName) {
  projectName = projectName.toLowerCase();
  const todo = {
    id: generateUniqueId({
      length: 9,
      useLetters: false,
    }),
    taskTitle,
    dueDate,
    completed: false,
  };

  if (projectName) {
    const index = state.projects.findIndex(
      (project) => project.title == projectName
    );
    const project = state.projects[index];
    todo.projectId = project.id;

    //add todo to project
    project.todos.push(todo);
  }
  presistProjects();
  return todo;
};

export const deleteTodo = function (projectName, Id) {
  const projects = state.projects;

  //delete todo from project
  const projectIndex = state.projects.findIndex(
    (project) => project.title === projectName
  );

  const todoIndexInProject = projects[projectIndex].todos.findIndex(
    (todo) => todo.id === Id
  );
  projects[projectIndex].todos.splice(todoIndexInProject, 1);
  presistProjects();
};

export const deleteProject = function (projectName) {
  const projectIndex = state.projects.findIndex(
    (project) => project.title === projectName
  );
  state.projects.splice(projectIndex, 1);
  presistProjects();
};

const presistProjects = function () {
  localStorage.setItem("projects", JSON.stringify(state.projects));
};

const init = function () {
  const storage = localStorage.getItem("projects");
  if (storage) state.projects = JSON.parse(storage);
};
init();
