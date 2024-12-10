"use strict";
"use strict";
import nid from "nid";

// Project constructor
const mynid = nid({ length: 4 });
class Project {
  constructor(title) {
    this.projectId = mynid();
    this.title = title;
    this.todo;
  }

  getProjectId() {
    return this.projectId;
  }

  getProjectTitle() {
    return this.title;
  }
}

class Todo {
  constructor(title, dueDate, priority) {
    this.todoId = nid();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = false;
    this.project;
  }

  // Getters and Setters
  getTodoId() {
    return this.todoId;
  }

  setProject(project) {
    project.todo = this;
    this.project = project;
  }

  getProject() {
    return this.project;
  }

  getName() {
    return this.title;
  }

  getIsComplete() {
    return this.isComplete;
  }

  setIsComplete(isComplete) {
    this.isComplete = isComplete;
  }

  flipIsComplete() {
    this.isComplete = !this.isComplete;
  }

  getPriority() {
    return this.priority;
  }

  getDueDate() {
    return this.date;
  }
}

export { Todo, Project };
