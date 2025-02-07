import { LitElement, html } from 'lit';

export class DummyExperiment extends LitElement {
  render() {
    return html` <h1>THIS IS A DIFFERENT VIEW</h1> `;
  }
}

customElements.define('dummy-experiment', DummyExperiment);
