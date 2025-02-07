import { LitElement, html, css } from 'lit';
import '../bar-loader/barLoader.js';

class WithLoaderExample extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
    .error {
      color: red;
    }
  `;
  // Wanted to do it with:
  // @state() _isContentReady = false;

  static properties = {
    users: { type: Array },
    errorMessage: { type: String },
    _isContentReady: { type: Boolean },
  };

  async connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.fetchUsers();
    }, 10000);
  }

  async fetchUsers() {
    try {
      const response = await fetch('http://localhost:3000/../../api/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // make a check over here
      this.users = data;
      this._isContentReady = true;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  _renderContent() {
    return html`
      <h1>User List</h1>
      ${this.errorMessage
        ? html`<p class="error">Error: ${this.errorMessage}</p>`
        : html`
            <ul>
              ${this.users.map(
                (user) => html`<li>${user.name} - ${user.role}</li>`
              )}
            </ul>
          `}
    `;
  }

  render() {
    return html`
      ${this._isContentReady
        ? this._renderContent()
        : html` <bar-loader></bar-loader> `}
    `;
  }
}

customElements.define('with-bar-loader', WithLoaderExample);
