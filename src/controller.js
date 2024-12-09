import { Todo, Project } from "./modules.js";

export default class HandleTodos {
  constructor() {
    this.todos = [];
    this.projects = [];
  }

  addTodo(...todos) {
    this.todos.push(...todos);
  }

  removeTodo(todoId) {
    const index = this.todos.findIndex((todo) => todo.getTodoId() === todoId);
    this.todos.splice(index, 1);
  }

  getTodos() {
    return this.todos;
  }

  addProject(...projects) {
    this.projects.push(...projects);
  }

  removeProject(projectId) {
    const todosAssociated = this.todos.filter(
      (todo) => todo.getProject()?.getProjectId() === projectId
    );

    todosAssociated.forEach((todo) => this.removeTodo(todo.getTodoId()));

    const index = this.projects.findIndex(
      (project) => project.projectId === projectId
    );
    this.projects.splice(index, 1);
  }

  getProject() {
    return this.projects;
  }
}

const project1 = new Project("Timeless");
const handleTask = new HandleTodos();

const todo1 = new Todo(
  "Buy groceries",
  "Get milk, eggs, bread, and fruits",
  "2024-12-10",
  "High"
);

todo1.setIsComplete(false);
todo1.setProject(project1);

const todo2 = new Todo("Workout", "Go for a 5km run", "2024-12-08", "Medium");

todo2.setIsComplete(false);
todo2.setProject(project1);

const todo3 = new Todo(
  "Study JavaScript",
  "Complete the ES6 modules tutorial",
  "2024-12-09",
  "High"
);
todo3.setIsComplete(false);
todo3.setProject(project1);

const todo4 = new Todo(
  "Clean the house",
  "Vacuum, dusting, and organize the living room",
  "2024-12-11",
  "Low"
);

todo4.setIsComplete(false);

const todo5 = new Todo(
  "Plan weekend trip",
  "Decide on destination and book accommodations",
  "2024-12-15",
  "Medium"
);

todo5.setIsComplete(false);

handleTask.addTodo(todo1, todo2, todo3, todo4, todo5);

// Logging the todos
handleTask.removeProject(project1.getProjectId());
console.log(handleTask.getTodos());
