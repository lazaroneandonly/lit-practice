import { LitElement, html } from 'lit';
import { elementStyles } from '../styles/my-element.style';

class ChildComponent extends LitElement {
  static styles = [elementStyles];

  async connectedCallback() {
    super.connectedCallback();
  }

  async _addItem(e) {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(e.target);
    const nameToSend = formData.get('name'); // Get the input value
    const professionToSend = formData.get('profession'); // Get the input value

    try {
      const newData = {
        nameOfPerson: nameToSend,
        occupation: professionToSend,
      };
      await this._modifyInformation(newData); // POST the new item to the server
      this._updateParent();
    } catch (error) {
      console.error('Error adding item:', error);
    }

    // e.target.reset(); // Reset the form
  }

  _updateParent() {
    this.dispatchEvent(
      new CustomEvent('sendToParentInfo', {
        detail: { platform: 'info' },
        bubbles: true, // Enable bubbling
        composed: true,
      })
    );
  }

  async _modifyInformation(data) {
    try {
      const response = await fetch(
        'http://localhost:3001/../../api/alternative',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  render() {
    return html`
      <h1>USE THIS INTERFACE TO UPDATE BACKEND DATA:</h1>

      <br />

      <form @submit=${this._addItem}>
        <label for="name">Name:</label>
        <input name="name" />

        <br />

        <label for="profession">Profession:</label>
        <input name="profession" />

        <br />

        <button type="submit">Add Item</button>
      </form>
    `;
  }
}

customElements.define('child-component', ChildComponent);
