import View from "./View";

class AddTaskView extends View {
  _parentEl = document.querySelector(".add-task-form");
  _modal = document.querySelector(".modal");

  _addTaskForm = document.querySelector(".add-task-form");
  _addTaskBtn = document.querySelector(".add-task");
  _closeBtn = document.querySelector(".add-task-form  .close-btn");
  _submitBtn = document.querySelector(".submit-task");

  constructor() {
    super();
    this._addHandlerCloseForm();
  }

  toogleWindow() {
    this._modal.classList.toggle("hidden");
    this._addTaskForm.classList.toggle("hidden");
  }

  _addHandlerShowForm(handler) {
    this._addTaskBtn.addEventListener(
      "click",
      function () {
        if (handler()) {
          this.toogleWindow();
        } else {
          return;
        }
      }.bind(this)
    );
  }

  _addHandlerCloseForm() {
    this._closeBtn.addEventListener("click", this.toogleWindow.bind(this));
  }

  _addHandlerAddTask(handler) {
    this._parentEl.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();

        const title = this._parentEl.querySelector("#task-title").value;
        const date = this._parentEl.querySelector("#task-date").value;
        const project = this._parentEl.querySelector("#task-project").value;
        handler(title, date, project);
      }.bind(this)
    );
  }

  addProjectOption(projects) {
    const projectOptionEl = this._parentEl.querySelector("#task-project");
    projectOptionEl.innerHTML = "";
    projects.map((project) => {
      const markup = `<option value="${project.title}">${project.title}</option>`;
      projectOptionEl.insertAdjacentHTML("beforeend", markup);
    });
  }

  _clearForm() {
    const titleEl = this._parentEl.querySelector("#task-title");
    const dateEl = this._parentEl.querySelector("#task-date");
    const project = this._parentEl.querySelector("#task-project");

    titleEl.value = "";
    dateEl.value = "";
    const selectedOptions = project.selectedOptions;
    for (let i = 0; i < selectedOptions.length; i++) {
      selectedOptions[i].selected = false;
    }
  }
}

export default new AddTaskView();
