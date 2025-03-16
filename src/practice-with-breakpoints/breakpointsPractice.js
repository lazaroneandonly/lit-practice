import { LitElement, html } from 'lit';

export class breakpointsPractice extends LitElement {
  static properties = {
    displayValue: { type: Number },
  };

  connectedCallback() {
    super.connectedCallback();
    this.displayValue = 0;
  };

  _addingNumbers() {
    console.log("clicking");
    debugger;
    this.displayValue + "1";
    // Correct way: this.displayValue++;
  };

  render() {
    return html` 
        <h1>PRACTICING BREAKPOINTS:</h1> 
        <h2>${this.displayValue}</h2>
        <button @click=${this._addingNumbers}>PRESS TO INCREMENT</button>
    `;
  };
};

customElements.define('breakpoints-practice', breakpointsPractice);
