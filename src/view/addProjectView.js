import { fromUnixTime } from "date-fns";
import View from "./View";

class AddProjectView extends View {
  _parentEl = document.querySelector(".add-projects");

  _projectContainer = document.querySelector(".projects-container");
  _modal = document.querySelector(".modal");
  _addProjectForm = document.querySelector(".add-project-form");
  _closeBtn = document.querySelector(".add-project-form  .close-btn");
  _addProjectBtn = document.querySelector(".add-projects");
  _submitBtn = document.querySelector(".submit-project");
  constructor() {
    super();
    this.addHandlerShowAddProjectModal();
    this.addHandlerCloseAddProjectModal();
  }

  toogleWindow() {
    this._modal.classList.toggle("hidden");
    this._addProjectForm.classList.toggle("hidden");
  }

  addHandlerShowAddProjectModal() {
    this._addProjectBtn.addEventListener("click", this.toogleWindow.bind(this));
  }

  addHandlerCloseAddProjectModal() {
    this._closeBtn.addEventListener("click", this.toogleWindow.bind(this));
  }

  clearForm() {
    this._addProjectForm.querySelector("#project-title").value = "";
  }

  addHandlerAddProject(handler) {
    this._addProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const projectTitle =
        this._addProjectForm.querySelector("#project-title").value;

      handler(projectTitle);

      this.clearForm();
    });
  }
}

export default new AddProjectView();
