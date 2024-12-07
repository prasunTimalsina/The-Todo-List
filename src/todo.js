"use strict";
import nid from "nid";
export default class Todo {
  constructor() {
    this.todoId = nid();
    this.title;
    this.dueDate;
    this.priority;
    this.isComplete;
    this.project = null;
  }

  // Getters and Setters
  getTodoId() {
    return this.todoId;
  }

  setProject(project) {
    this.project = project;
  }

  getProject() {
    return this.project;
  }

  getName() {
    return this.title;
  }

  setName(title) {
    this.title = title;
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

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getDueDate() {
    return this.date;
  }

  setDueDate(date) {
    this.date = date;
  }
}
