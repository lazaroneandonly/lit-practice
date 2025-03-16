import { LitElement, html } from 'lit';
import { barLoaderStyles } from './styles/loader.style';

class BarLoader extends LitElement {
  static styles = [barLoaderStyles];

  static properties = {
    _loadBarBlocksNumber: { type: Number },
  };

  constructor() {
    super();
    this._loadBarBlocksNumber = 0;
    this._hasToRestart = false;
  };

  connectedCallback() {
    super.connectedCallback();
    this.timer = setInterval(() => {
      this._loadBarBlocksNumber++;
    }, 1000);
  };

  updated(changedProperties) {
    super.updated(changedProperties);
    if (this._loadBarBlocksNumber === 4) {
      this._loadBarBlocksNumber = 0;
    };
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timer); // Clean up the timer when the component is removed
    console.log('Loader cleared up!');
  };

  render() {
    return html`
      <div class="bars-holder">
        ${[...Array.from(Array(this._loadBarBlocksNumber)).keys()].map(
          () => html`<div class="bar-block"></div>`
        )}
      </div>
    `;
  };
};

customElements.define('bar-loader', BarLoader);
