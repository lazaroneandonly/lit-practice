import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

class classMapPractice extends LitElement {
  static properties = {
    isActive: { type: Boolean },
    inputValue: { type: String },
    valueTestText: { type: String },
    furtherText: { type: String },
  };

  constructor() {
    super();
    this.valueTestText =
      'when the above value has an input and submitted this will change';
  }

  static styles = css`
    .active {
      background-color: green;
      color: white;
    }
    .disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    .green {
      background-color: #006400;
      color: white;
    }

    .yellow {
      background-color: #ffea00;
      color: black;
    }

    .changed {
      background-color: black;
      color: white;
    }
  `;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  handleInput(event) {
    this.inputValue = event.target.value; // Access the value directly from the event target
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(event.target);
    console.log('Form Value:', formData.get('inputField'));
    this.furtherText = formData.get('inputField');
    this.valueTestText = 'changed ';
  }

  render() {
    const classes = {
      active: this.isActive,
      disabled: !this.isActive,
    };

    const classesForInputValue = {
      green: this.inputValue === 'green',
      yellow: this.inputValue === 'yellow',
    };

    const classForTextChange = {
      changed: this.valueTestText === 'changed ',
    };

    return html`
      <div class="${classMap(classes)}">
        This is a dynamic class mapping example.
      </div>

      <div class="${classMap(classesForInputValue)}">
        This is the text for the input value.
      </div>
      <input type="text" @input=${this.handleInput} />
      <button @click="${this.toggleActive}">
        Only need one Button to disable
      </button>

      <form @submit=${this.handleSubmit}>
        <input type="text" name="inputField" />
        <button type="submit">Submit</button>
      </form>

      <div class="${classMap(classForTextChange)}">
        ${this.valueTestText} to "${this.furtherText}"
      </div>
    `;
  }
}

customElements.define('class-map-practice', classMapPractice);
