import { LitElement, html } from 'lit';

class BemPractice extends LitElement {
  static properties = {
    arraycontent: { type: Array },
  };

  static styles = [];
  constructor() {
    super();
    this.arraycontent = ['first', 'second', 'third'];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  returnList() {
    const arrayreturn = this.arraycontent.map(
      (element) => html`<li class="element--${element}">${element}</li>`
    );

    return arrayreturn;
  }

  render() {
    return html`
      <h1>BEM PRACTICE</h1>

      <div class="card">
        <h1>Other Title</h1>
        <h2>Sub title</h2>
        <p>Some other text</p>
        <ol>
          ${this.returnList()}
        </ol>
      </div>
    `;
  }
}

customElements.define('bem-practice', BemPractice);
