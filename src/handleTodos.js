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

  addTodoToProject() {
    this.todos.forEach((todo) => {
      todo.project.todo = todo;
    });
  }
}
