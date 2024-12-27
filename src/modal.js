import generateUniqueId from "generate-unique-id";
import { format, compareAsc } from "date-fns";
export const state = {
  todos: [],
  projects: [],
};

export const createProject = function (title) {
  title = title.toLowerCase();
  const project = {
    id: generateUniqueId({
      length: 9,
      useLetters: false,
    }),
    title,
    todos: [],
  };
  state.projects.push(project);
  return project;
};

export const createTask = function (taskTitle, dueDate, projectName = null) {
  projectName = projectName.toLowerCase();
  const todo = {
    id: generateUniqueId({
      length: 4,
      useLetters: false,
    }),
    taskTitle,
    dueDate,
    completed: true,
  };
  //add todo to state
  state.todos.push(todo);
  if (projectName) {
    const index = state.projects.findIndex(
      (project) => project.title == projectName
    );
    const project = state.projects[index];
    todo.projectId = project.id;

    //add todo to project
    project.todos.push(todo);
  }

  return todo;
};

const project1 = createProject("Homework");
