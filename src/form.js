const form = function () {
  const FormUI = `
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
};
