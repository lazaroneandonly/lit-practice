import { LitElement, html } from 'lit';
import './slotPractice';

export class parentForSlot extends LitElement {
  render() {
    return html`
      <slot-practice>
        <p slot="one">Render me in slot one</p>
        <p slot="two">
          And me in slot two for bold text and next one will not be rendered...
        </p>
        <p slot="none">will not render</p>
      </slot-practice>
    `;
  }
}

customElements.define('parent-for-slot', parentForSlot);
