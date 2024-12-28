import View from "./View";
import todoView from "./todoView";

class ProjectView extends View {
  _parentEl = document.querySelector(".projects");

  _generateMarkup() {
    return `
    ${this._data
      .map(
        (project) => `
      <li class="project">
          <h3 class="project-heading">${
            project.title[0].toUpperCase() + project.title.slice(1)
          }</h3>
          <ul class="todos">
               ${todoView.render(project.todos, false)}
          </ul>
        </li>
      
      `
      )
      .join("")}
    `;
  }
}

export default new ProjectView();
