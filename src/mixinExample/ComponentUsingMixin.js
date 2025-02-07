import { LitElement, html } from 'lit';
import { mixinExample } from './mixin.js';
import { elementStyles } from '../styles/my-element.style';

class ComponentUsingMixin extends mixinExample(LitElement) {
  static properties = {
    _componentText: { type: String },
  };

  static styles = [elementStyles];

  connectedCallback() {
    super.connectedCallback();
    this._componentText = 'IT WILL APPEAR HERE';
  }

  _pressButton() {
    this._componentText = this.sayHello('Lazar');
  }

  render() {
    return html`
      <h1>Here I will use a mixin example</h1>
      <p>Press the button to say hello</p>
      <br />
      <button @click=${this._pressButton}>PRESS TO SAY HELLO</button>
      <br />
      <h2>${this._componentText}</h2>
    `;
  }
}

customElements.define('component-using-mixin', ComponentUsingMixin);
