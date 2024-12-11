"use strict";

//elements
const main = document.querySelector("main");

const ProjectContainer = `

`;

const CreatetodoElement = function (title, dueDate, priority) {
  return `
   <div class="todo">
              <div>
                <input type="checkbox" name="Iscomplete" id="Iscompleted" />
                <p class="todo-title">${title}</p>
              </div>
              <p class="due-date">⌚ ${dueDate}</p>
              <svg
                class="delete-icon"
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
            </div>
          </div>
`;
};
const addTaskFormElement = `
<form  class="add-task-form">
        <h2>Create a Task</h2>
        <label for="task-title">Title:</label>
        <input type="text" id="task-title" name="title" placeholder="Enter task title" required />
    
        <label for="task-date">Date:</label>
        <input type="date" id="task-date" name="date" required />
    
        <label for="task-priority">Priority:</label>
        <select id="task-priority" name="priority" required>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
    
        <button type="submit">Submit</button>
        <button type="button" class="close-btn">Cancel</button>
      </form>
    </div>
    </form>
`;
