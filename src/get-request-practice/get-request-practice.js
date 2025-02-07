import { LitElement, html, css } from 'lit';

class GetRequestPractice extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
    .error {
      color: red;
    }
  `;

  static properties = {
    users: { type: Array },
    errorMessage: { type: String },
  };

  firstUpdated() {
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      const response = await fetch('http://localhost:3000/../../api/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.users = data;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  render() {
    return html`
      <h1>User List</h1>
      ${this.errorMessage
        ? html`<p class="error">Error: ${this.errorMessage}</p>`
        : html`
            <ul>
              ${this.users?.map(
                (user) => html`<li>${user.name} - ${user.role}</li>`
              )}
            </ul>
          `}
    `;
  }
}

customElements.define('get-request-practice', GetRequestPractice);
