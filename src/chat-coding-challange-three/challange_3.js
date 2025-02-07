import { LitElement, html } from 'lit';
import { userRolesAdapter, otherUserInfoAdapter } from './adapter.js';
import '../bar-loader/barLoader.js';
import { challangeThreeStyles } from './styles/challange_3_styles.js';

export class userProfileComponent extends LitElement {
  static styles = [challangeThreeStyles];

  static properties = {
    userData: { type: Object },
    userRole: { type: String },
    lastLoginDate: { type: String },
    loginSwitch: { type: Boolean },
    componentStatus: { type: String },
  };

  constructor() {
    super();
    this.componentStatus = 'LOADING';
  }

  async fetchUserInformation() {
    try {
      const response = await fetch(
        'http://localhost:3110/../../api/forChallangeThree'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.userData = otherUserInfoAdapter(data);
      this.userRole = userRolesAdapter(this.userData.userRole);
      this.lastLoginDate = this.userData.userLastLogin;
    } catch (error) {
      console.error('Error fetching user data:', error);
      this.componentStatus = 'ERROR';
    } finally {
      this.componentStatus = 'COMPLETE';
    }
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.fetchUserInformation();
    }, 2000);
  }

  shouldUpdate(changedProperties) {
    // Only re-render if `userData` or `loginSwitch` changes
    if (
      changedProperties.has('userData') ||
      changedProperties.has('loginSwitch') ||
      changedProperties.has('componentStatus')
    ) {
      console.log('Re-rendering due to change in userData or loginSwitch.');
      return true; // Allow re-rendering
    }
    console.log('No relevant changes, skipping render.');
    return false; // Prevent re-rendering
  }

  update(changedProperties) {
    // Call the super method to proceed with the update process
    super.update(changedProperties);
    if (changedProperties.has('loginSwitch')) {
      console.log('loginSwitch changed, fetching updated data.');

      // Fetch data and set it before rendering
      this.fetchUserInformation().then(() => {
        // Trigger a new render after fetching completes
        this.requestUpdate();
      });
    }
  }

  async setNewLoginDate() {
    try {
      await fetch('http://localhost:3110/../../api/forChallangeThree', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ details: { last_login: new Date() } }),
      });
      this.loginSwitch = !this.loginSwitch; // Toggle to trigger `updated`
    } catch (error) {
      console.error('Error updating login date:', error);
    }
  }

  renderContent() {
    let renderedContent;
    switch (this.componentStatus) {
      case 'LOADING':
        renderedContent = html`<bar-loader></bar-loader>`;
        break;
      case 'COMPLETE':
        renderedContent = html`<h1 class="title">USER PROFILE</h1>
          <div class="profile-body">
            <div class="profile-info">
              <h3>Name: ${this.userData?.userFullName || 'N/A'}</h3>
              <h3>Email: ${this.userData?.userEmail || 'N/A'}</h3>
              <h3>
                Registration date:
                ${this.userData?.userRegistrationDate || 'N/A'}
              </h3>
              <h3>Role: ${this.userRole || 'N/A'}</h3>
              <h3>Last login: ${this.userData?.userLastLogin || 'N/A'}</h3>
              <button @click="${this.setNewLoginDate}">LOGIN</button>
            </div>
            <div class="profile-picture"></div>
          </div>`;
        break;
      case 'ERROR':
        renderedContent = html`<h1>
          SORRY...There appears to be an error. Try again later.
        </h1>`;
        break;
      default:
        renderedContent = html`<h1>NO INFO AT PRESENT...</h1>`;
    }

    console.log('in renderedcontent: ', renderedContent);

    return renderedContent;
  }

  render() {
    return html`${this.renderContent()}`;
  }
}

customElements.define('user-profile-component', userProfileComponent);
