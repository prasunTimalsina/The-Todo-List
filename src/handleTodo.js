import Todo from "./module.js";
import Project from "./module.js";
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

const todo1 = new Todo();
todo1.setName("Buy groceries");
todo1.setDescription("Get milk, eggs, bread, and fruits");
todo1.setDueDate("2024-12-10");
todo1.setPriority("High");
todo1.setIsComplete(false);
todo1.setProject(project1);

const todo2 = new Todo();
todo2.setName("Workout");
todo2.setDescription("Go for a 5km run");
todo2.setDueDate("2024-12-08");
todo2.setPriority("Medium");
todo2.setIsComplete(false);
todo2.setProject(project1);

const todo3 = new Todo();
todo3.setName("Study JavaScript");
todo3.setDescription("Complete the ES6 modules tutorial");
todo3.setDueDate("2024-12-09");
todo3.setPriority("High");
todo3.setIsComplete(false);
todo3.setProject(project1);

const todo4 = new Todo();
todo4.setName("Clean the house");
todo4.setDescription("Vacuum, dusting, and organize the living room");
todo4.setDueDate("2024-12-11");
todo4.setPriority("Low");
todo4.setIsComplete(false);

const todo5 = new Todo();
todo5.setName("Plan weekend trip");
todo5.setDescription("Decide on destination and book accommodations");
todo5.setDueDate("2024-12-15");
todo5.setPriority("Medium");
todo5.setIsComplete(false);

handleTask.addTodo(todo1, todo2, todo3, todo4, todo5);

// Logging the todos
handleTask.removeProject(project1.getProjectId());
console.log(handleTask.getTodos());
