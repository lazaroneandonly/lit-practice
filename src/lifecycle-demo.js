import { LitElement, html } from 'lit';
import { elementStyles } from './styles/my-element.style';

class lifeCycleDemo extends LitElement {
  static styles = [elementStyles];

  static properties = {
    counter: { type: Number },
  };

  constructor() {
    super(); // Calls the super lit class element
    this.counter = 0;
    console.log('in the constructor, component created!');
  };

  connectedCallback() {
    super.connectedCallback();
    console.log('in the connectedCallback, component Added to the DOM!');

    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);
    // Starts a timer, and setInterval here increases the counter every 1000 miliseconds (1 second)
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log(':disconnectedCallback: Component removed from the DOM');

    clearInterval(this.Timer); // Cleans the timer up
  };

  _setAltert() {
    window.alert('clearinterval has passed');
  };

  /**
   * UNTIL NOW, I had a faily good idea of the above
   * lifecyles. But now I am delving into territory
   * that I need to explore more in detail.
   */

  //   shouldUpdate(changedProperties) {
  //     return changedProperties.has('counter') ? this._setAltert() : 'the other thing';
  //   }

  // An example of using it more in detail:

  //   shouldUpdate(changedProperties) {
  //     console.log('shouldUpdate: Counter is', this.counter);
  //     // Only update if counter is even
  //     return this.counter % 2 === 0;
  //   }

  // Or

  // shouldUpdate(changedProperties) {
  //     changedProperties.forEach((oldValue, propName) => {
  //       console.log(`${propName} changed. oldValue: ${oldValue}`);
  //     });
  //     return changedProperties.has('nameOfStaticProperty');
  //   }

  /**
   * So basically in the above implementation we can have access
   * to the changed property (nameOfStaticProperty) by going through
   * changedProperties.has('nameOfStaticProperty');
   *
   * This seems to be a boolean - perhaps can also be written as
   * return changedProperties.has('nameOfStaticProperty') ? 'this thing' : 'the other thing';
   *
   */

  render() {
    return html`
      <div class="container">
        <div
          class="button"
          @click=${() => {
            this.counter++;
          }}
        >
          PRESS TO INCREMENT
        </div>
        <div class="counter">${this.counter}</div>
      </div>
    `;
  };
};

customElements.define('life-cycle-demo', lifeCycleDemo);
