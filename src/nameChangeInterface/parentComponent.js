import { LitElement, html } from 'lit';
import './ChildComponent.js';
import { elementStyles } from '../styles/my-element.style';

class ParentComponent extends LitElement {
  static styles = [elementStyles];

  static properties = {
    personInfo: { type: Object },
  };

  async connectedCallback() {
    super.connectedCallback();
    await this.getInformation();

    this.addEventListener('sendToParentInfo', () => {
      console.log('Start event triggered');
      this.getInformation();
    });
  }

  async getInformation() {
    try {
      const response = await fetch(
        'http://localhost:3001/../../api/alternative'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.personInfo = data;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  render() {
    return html`
      <h1>PARENT-CHILD INTERFACE TEST:</h1>

      <br />

      <h2>name: ${this.personInfo.nameOfPerson}</h2>
      <h2>Occupation: ${this.personInfo.occupation}</h2>

      <div class="excercise-viewport">
        <child-component></child-component>
      </div>
    `;
  }
}

customElements.define('parent-component', ParentComponent);
