// src/dynamic-tabs/dynamicTabs.js
import { LitElement, html } from 'lit';

export class DynamicTabs extends LitElement {
  static properties = {
    tabs: { type: Array },
  };

  constructor() {
    super();
    this.tabs = [{ label: 'tab1', index: 1, state: 'INACTIVE' }];
  };

  render() {
    return html`
      <div class="tabs-collection">
        ${this.tabs.map(
          (tab) => html`
            <p
              class="tab"
              name=${tab.label}
              index="${tab.index}"
              state="${tab.state}"
            >
              ${tab.label}
            </p>
          `
        )}
      </div>
    `;
  };
};

customElements.define('dynamic-tabs', DynamicTabs); // ✅ Correct tag name
