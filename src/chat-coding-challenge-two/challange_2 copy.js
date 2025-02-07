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

  async connectedCallback() {
    super.connectedCallback();
    this._isPollingActice ? this._fetchTasks() : null;
  }

  async disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._pollingIntervalId);
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    const _isPollingActiceValue = this._isPollingActice;

    // Here because the updated is noticing every time the chanegdProperty _isPollingActice is changed
    // It will send the console log...it will not decide on how it is changed to what value,
    // But merely noticing that it is changed.

    if (changedProperties.has('_isPollingActice')) {
      console.log(
        'Noticed updated changedProperty (old): ',
        changedProperties.get('_isPollingActice')
      );
      this._checkingValue(this._isPollingActice);
    }
  }

  _checkingValue(valueInput) {
    valueInput
      ? console.log('value returned is true')
      : console.log('value returned is FALSE');
  }

  // Simulated API fetch (replace with actual API if needed)
  async _fetchTasks() {
    // Simulating a delay like a real API
    this._pollingIntervalId = new Promise((resolve) => {
      setInterval(() => {
        resolve([
          this._isPollingActice
            ? this._addToPollingList(Math.floor(Math.random() * 100))
            : null,
          this.requestUpdate(),
        ]);
      }, 2000);
    });

    return this._pollingIntervalId;
  }

  shouldUpdate(changedProperties) {
    // Allow update only if specific properties have changed
    const _isPollingActiceValue = this._isPollingActice;
    if (
      _isPollingActiceValue === true ||
      changedProperties.has('_pollingButtonText')
    ) {
      console.log('inside shouldUpdate rendering true');
      return true; // Proceed with rendering
    }
    console.log('inside shouldUpdate rendering false');
    return false; // Skip rendering
  }

  _addToPollingList(pollingNumberToAdd) {
    this._pollingNumberCollection.push(pollingNumberToAdd);
  }

  _displayMostRecentNumbers() {
    const lastFivePollingNumbers = this._pollingNumberCollection.slice(
      this._pollingNumberCollection.length - 5
    );

    return this._pollingNumberCollection.length > 5
      ? lastFivePollingNumbers.map(
          (randomNumber) => html`<p>${randomNumber}</p>`
        )
      : this._pollingNumberCollection.map(
          (randomNumber) => html`<p>${randomNumber}</p>`
        );
  }

  togglePolling() {
    this._isPollingActice = !this._isPollingActice;
    this._pollingButtonText = this._isPollingActice
      ? 'Unset Polling'
      : 'Set Polling';
  }

  render() {
    return html`
      <h1>POLLING LIST:</h1>
      <button @click=${this.togglePolling}>${this._pollingButtonText}</button>
      <h2>
        CURRENT NUMBER:
        ${this._pollingNumberCollection?.length > 0 &&
        this._isPollingActice === true
          ? this._pollingNumberCollection[
              this._pollingNumberCollection.length - 1
            ]
          : 'NONE AVAILABLE YET...'}
      </h2>
      <h2>The latest up to five most recent numbers:</h2>
      ${this._isPollingActice ? this._displayMostRecentNumbers() : null}
    `;
  }
}

customElements.define('polling-list', PollingList);
