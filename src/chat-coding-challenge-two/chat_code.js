import { LitElement, html } from 'lit';

export class PollingList extends LitElement {
  static properties = {
    _isPollingActice: { type: Boolean },
    _pollingButtonText: { type: String },
    _pollingNumberCollection: { type: Array },
  };

  constructor() {
    super();
    this._isPollingActice = true;
    this._pollingButtonText = 'Unset Polling';
    this._pollingNumberCollection = [];
    this._pollingIntervalId = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._startPolling();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopPolling();
  }

  _startPolling() {
    if (!this._pollingIntervalId) {
      this._pollingIntervalId = setInterval(() => {
        if (this._isPollingActice) {
          const randomNum = Math.floor(Math.random() * 100);
          this._addToPollingList(randomNum);
        }
      }, 2000);
    }
  }

  _stopPolling() {
    if (this._pollingIntervalId) {
      clearInterval(this._pollingIntervalId);
      this._pollingIntervalId = null;
    }
  }

  shouldUpdate(changedProperties) {
    return (
      changedProperties.has('_pollingButtonText') ||
      changedProperties.has('_pollingNumberCollection')
    );
  }

  _addToPollingList(pollingNumberToAdd) {
    // Create a new array reference to trigger reactivity
    this._pollingNumberCollection = [
      ...this._pollingNumberCollection,
      pollingNumberToAdd,
    ];
  }

  _displayMostRecentNumbers() {
    const lastFivePollingNumbers = this._pollingNumberCollection.slice(-5);

    return lastFivePollingNumbers.map(
      (randomNumber) => html`<p>${randomNumber}</p>`
    );
  }

  togglePolling() {
    this._isPollingActice = !this._isPollingActice;
    this._pollingButtonText = this._isPollingActice
      ? 'Unset Polling'
      : 'Set Polling';

    // Start or stop polling as needed
    if (this._isPollingActice) {
      this._startPolling();
    } else {
      this._stopPolling();
    }
  }

  render() {
    return html`
      <h1>POLLING LIST:</h1>
      <button @click=${this.togglePolling}>${this._pollingButtonText}</button>
      <h2>
        CURRENT NUMBER:
        ${this._pollingNumberCollection.length > 0
          ? this._pollingNumberCollection[
              this._pollingNumberCollection.length - 1
            ]
          : 'NONE AVAILABLE YET...'}
      </h2>
      <h2>The latest up to five most recent numbers:</h2>
      ${this._pollingNumberCollection.length > 0
        ? this._displayMostRecentNumbers()
        : html`<p>No numbers generated yet.</p>`}
    `;
  }
}

customElements.define('polling-list', PollingList);
