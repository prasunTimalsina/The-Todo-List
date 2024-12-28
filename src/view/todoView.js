import { format, compareAsc, isPast, isFuture } from "date-fns";
import View from "./View";
class TodoView extends View {
  _parentEl = document.querySelector(".todos");

  _checkOverdue(date) {
    if (isPast(date)) return true;
    else return false;
  }

  _generateMarkup() {
    return `${this._data
      .map(
        (todo) => `
         <li class="todo  ${todo.completed ? "completed" : ""}" >
            <div >
              <input type="checkbox"  ${todo.completed ? "checked" : ""}>
              <p class="todo-title">${todo.taskTitle}</p>
            </div>
            <div class="todo-due">
              <svg class="time-icon small-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>${todo.dueDate}</p>
              <p>${this._checkOverdue(todo.dueDate) ? "overdue !!" : ""}</p>
            </div>
            <button class="delete-btn">
                <svg class="delete-icon medium-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </button>
          </li>`
      )
      .join("")}`;
  }
}

export default new TodoView();
