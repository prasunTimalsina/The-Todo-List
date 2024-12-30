import View from "./View";

class SidebarProjectView extends View {
  _parentEl = document.querySelector(".project-list");

  _addHandlerDeleteProject(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const deleteBtn = e.target.closest(".delete-btn");
      if (!deleteBtn) return;

      const projectEl = deleteBtn.closest(".project");
      const projectName = projectEl
        .querySelector("p")
        .textContent.trim()
        .toLowerCase();
      console.log(projectName);
      handler(projectName);
    });
  }

  _generateMarkup() {
    return this._data
      .map(
        (project) => `
    
    
    <li class="project">
            <svg
              class="medium-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#aaa"
              class="size-6"
            >
              <path
                d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z"
              />
            </svg>

            <p>${project.title[0].toUpperCase() + project.title.slice(1)}</p>
            <button class="delete-btn">
              <svg
                class="delete-icon small-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </li>
    `
      )
      .join("");
  }
}

export default new SidebarProjectView();
