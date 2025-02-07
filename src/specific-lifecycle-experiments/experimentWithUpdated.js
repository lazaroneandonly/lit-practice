import { LitElement, html } from 'lit';
import { elementStyles } from '../styles/my-element.style';

class experimentWithUpdated extends LitElement {
  static styles = [elementStyles];

  static properties = {
    counter: { type: Number },
    UpdateToFiveText: { type: String },
  };

  constructor() {
    super();
    this.counter = 0;
    this.UpdateToFiveText = 'Counter Not yet Updated to five...';
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('in the connectedCallback, component Added to the DOM!');
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('counter')) {
      console.log('Counter was updated to', this.counter);
    }

    if (this.counter === 5) {
      console.log('Counter was updated to the fifth (5) number');
      this.UpdateToFiveText = 'Now it is!!!';
    }
  }

  render() {
    return html`
      <div class="container">
        <div
          class="button"
          @click=${() => {
            this.counter++;
          }}
        >
          PRESS TO INCREMENT
        </div>
        <div class="counter">${this.counter}</div>
        <h3>${this.UpdateToFiveText}</h3>
      </div>
    `;
  }
}

customElements.define('experiment-with-updated', experimentWithUpdated);
