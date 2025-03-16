import { LitElement, html } from 'lit';
import { elementStyles } from '../styles/my-element.style';

class ArrayPractice extends LitElement {
  static properties = {
    _arraySourceOne: { type: Array },
    _arraySourceTwo: { type: Array },
    _arraySourceThree: { type: Array },
  };

  static styles = [elementStyles];
  constructor() {
    super();

    this._arraySourceOne = [
      { Value: 'prime value' },
      { Value: 'prime value' },
      { Value: 'secondary value' },
      { Value: 'prime value' },
      { Value: 'third value' },
      { Value: 'prime value' },
    ];

    this._arraySourceTwo = [
      { id: 1, text: 'Learn JavaScript', completed: true },
      { id: 2, text: 'Build a project', completed: false },
      { id: 3, text: 'Build another project', completed: false },
      { id: 4, text: 'Build a fourth project', completed: true },
      { id: 5, text: 'Build a fifth project', completed: false },
    ];

    this._arraySourceThree = [
      { id: 1, text: 'first', completed: true },
      { id: 2, completed: false },
      { id: 3, completed: false },
      { id: 4, completed: true },
      { id: 5, text: 'last', completed: false },
    ];
  };

  connectedCallback() {
    super.connectedCallback();
    this._filterSecondArrayAugmented();
  };

  _mapFirstArray() {
    return this._arraySourceOne.map((element) =>
      element.Value.includes('prime') ? ` ${element.Value},` : null
    );
  };

  // Wrong example for study ...

  //   _filterSecondArray() {
  //     let firstArrayFilter =  this._arraySourceTwo.filter(task => !task.completed);
  //     console.log("checking first layer: ", firstArrayFilter);
  //     let secondArrayFilter = firstArrayFilter.filter(task => task.id === 5);
  //     console.log("checking second layer: ", secondArrayFilter);
  //     return secondArrayFilter.values()
  //   }

  _filterSecondArrayAugmented() {
    let ArrayFilter = this._arraySourceTwo.filter(
      // Can place multiple conditionals
      // also if statements for further filtering
      // and perhaps mapping ?
      (task) => !task.completed && task.id === 5
    );

    return ArrayFilter;
  };

  _formatObjectData(element) {
    return html`
      <p>--------------------------------------</p>
      <p>--------------------------------------</p>
      <p>ID: ${element.id}</p>
      <p>TEXT: ${element.text}</p>
      <p>COMPLETED STATUS: ${element.completed}</p>
      <p>--------------------------------------</p>
      <p>--------------------------------------</p>
    `;
  }

  _formatObjectDataOther(element) {
    return html` <p>TEXT: ${element.text}</p> `;
  };

  _filterThirdArray() {
    return this._arraySourceThree.filter((element) =>
      element.hasOwnProperty('text')
    );
  };

  render() {
    return html`
      <h1>ARRAY PRACTICE</h1>

      <p>First array filter: ${this._mapFirstArray()}</p>

      <p>
        Second array filter:
        ${this._filterSecondArrayAugmented().map((element) =>
          this._formatObjectData(element)
        )}
      </p>

      <p>
        checking for hasProperty:
        ${this._arraySourceTwo[0].hasOwnProperty('completed')}
      </p>

      <p>
        HasOwnProperty presence filter and mapping:
        ${this._filterThirdArray().map((element) =>
          this._formatObjectDataOther(element)
        )}
      </p>
    `;
  };
};

customElements.define('array-practice', ArrayPractice);
