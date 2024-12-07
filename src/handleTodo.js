import Todo from "./todo.js";

export default class HandleTodos {
  constructor() {
    this.todos = [];
    this.projects = [];
  }

  addTodo(...todos) {
    this.todos.push(...todos);
  }

  removeTodo(todoId) {
    const index = this.todos.findIndex((todo) => todo.todoId === todoId);
    this.todos.splice(index, 1);
  }

  getTodos() {
    return this.todos;
  }
}

const handleTask = new HandleTodos();

const todo1 = new Todo();
todo1.setName("Buy groceries");
todo1.setDescription("Get milk, eggs, bread, and fruits");
todo1.setDueDate("2024-12-10");
todo1.setPriority("High");
todo1.setIsComplete(false);

const todo2 = new Todo();
todo2.setName("Workout");
todo2.setDescription("Go for a 5km run");
todo2.setDueDate("2024-12-08");
todo2.setPriority("Medium");
todo2.setIsComplete(false);

const todo3 = new Todo();
todo3.setName("Study JavaScript");
todo3.setDescription("Complete the ES6 modules tutorial");
todo3.setDueDate("2024-12-09");
todo3.setPriority("High");
todo3.setIsComplete(false);

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
handleTask.removeTodo(todo2.todoId);
console.log(handleTask.getTodos());
