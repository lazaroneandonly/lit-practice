import { LitElement, html } from 'lit';

export class TaskList extends LitElement {
  // Simulated API fetch (replace with actual API if needed)
  async fetchTasks() {
    // Simulating a delay like a real API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: 'Task 1', completed: true },
          { name: 'Task 2', completed: false },
        ]);
      }, 1000);
    });
  }

  static properties = {
    tasks: { type: Array },
    newTaskName: { type: String },
    isMessageDisplayed: { type: Boolean },
  };

  constructor() {
    super();
    this.tasks = [];
    this.newTaskName = '';
  }

  // Lifecycle Hook: When the element is connected to the DOM
  async connectedCallback() {
    super.connectedCallback();
    this.tasks = await this.fetchTasks();
    // NOTE requestupdate not needed in this case ...
    this.requestUpdate(); // Request re-render after data load
  }

  // Lifecycle Hook: After the first render
  firstUpdated() {
    console.log('Data loaded!');
    this.isMessageDisplayed = true;
  }

  // Lifecycle Hook: After each update
  // Additional logic may be added here...
  updated(changedProperties) {
    super.updated(changedProperties);
    console.log('Task list updated');
  }

  // Method to toggle task completion
  toggleTask(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.requestUpdate(); // Request re-render after toggling
  }

  // Method to add a new task
  addTask() {
    if (this.newTaskName.trim() !== '') {
      this.tasks = [
        ...this.tasks,
        { name: this.newTaskName, completed: false },
      ];
      this.newTaskName = ''; // Clear input after adding
      this.requestUpdate(); // Request re-render after adding
    }
  }

  // Conditionally prevent update
  shouldUpdate(changedProperties) {
    if (changedProperties.has('tasks')) {
      return true; // Always allow update if tasks change
    }
    return false; // Prevent updates for other changes
  }

  render() {
    return html`
      ${this.isMessageDisplayed ? html`<h1>Task list updated</h1>` : ``}
      <div>
        <h2>Task List</h2>
        <input
          type="text"
          .value="${this.newTaskName}"
          @input="${(e) => (this.newTaskName = e.target.value)}"
          placeholder="New task name"
        />
        <button @click="${this.addTask}">Add Task</button>

        <ul>
          ${this.tasks.map(
            (task, index) => html`
              <li>
                <input
                  type="checkbox"
                  ?checked="${task.completed}"
                  @change="${() => this.toggleTask(index)}"
                />
                ${task.name}
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }

  // Lifecycle Hook: When the element is removed from the DOM
  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('Component disconnected from DOM');
    // Clean up if needed
  }
}

customElements.define('task-list', TaskList);
