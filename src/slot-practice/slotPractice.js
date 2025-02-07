import { LitElement, html } from 'lit';

export class slotPractice extends LitElement {
  render() {
    return html`
      <p>
        <slot name="one"></slot>
        <slot name="two" style="font-weight: bold"></slot>
      </p>
    `;
  }
}

customElements.define('slot-practice', slotPractice);
