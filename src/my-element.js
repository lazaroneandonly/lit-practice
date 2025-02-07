import { LitElement, html } from 'lit';
import { elementStyles } from './styles/my-element.style';
import './dummy-experiment/dummy-experiment.js';
import './specific-lifecycle-experiments/experimentWithUpdated.js';
import './get-request-practice/get-request-practice.js';
import './bar-loader/barLoader.js';
import './with-loader-example/withLoaderExample.js';
import './nameChangeInterface/parentComponent.js';
import './mixinExample/ComponentUsingMixin.js';
import './chat-coding-challenge-one/challange.js';
import './chat-coding-challenge-two/challange_2.js';
import './chat-coding-challange-three/challange_3.js';
import './array-practice/arrayPractice.js';
import './slot-practice/parentForSlot.js';
import './class-map-practice/classMapPractice.js';
import './block-element-modifier-example/BEM-example.js';

class MyElement extends LitElement {
  static styles = [elementStyles];

  static properties = {
    _excerciseToView: { type: String },
    _display: { type: String },
  };

  constructor() {
    super();
    this._excerciseToView = 'experiment-with-updated';
    this._display = html`<experiment-with-updated></experiment-with-updated>`;
  }

  // TODO: Make a mapper for this in a separate file
  _set_ExcerciseToView(excerciseIdentity) {
    this._excerciseToView = excerciseIdentity;

    if (excerciseIdentity === 'dummy-experiment') {
      this._display = html`<dummy-experiment></dummy-experiment>`;
    }

    if (excerciseIdentity === 'experiment-with-updated') {
      this._display = html`<experiment-with-updated></experiment-with-updated>`;
    }

    if (excerciseIdentity === 'get-request-practice') {
      this._display = html`<get-request-practice></get-request-practice>`;
    }

    if (excerciseIdentity === 'bar-loader') {
      this._display = html`<bar-loader></bar-loader>`;
    }

    if (excerciseIdentity === 'with-bar-loader') {
      this._display = html`<with-bar-loader></with-bar-loader>`;
    }

    if (excerciseIdentity === 'parent-component') {
      this._display = html`<parent-component></parent-component>`;
    }

    if (excerciseIdentity === 'component-using-mixin') {
      this._display = html`<component-using-mixin></component-using-mixin>`;
    }

    if (excerciseIdentity === 'task-list') {
      this._display = html`<task-list></task-list>`;
    }

    if (excerciseIdentity === 'polling-list') {
      this._display = html`<polling-list></polling-list>`;
    }

    if (excerciseIdentity === 'user-profile-component') {
      this._display = html`<user-profile-component></user-profile-component>`;
    }

    if (excerciseIdentity === 'array-practice') {
      this._display = html`<array-practice></array-practice>`;
    }

    if (excerciseIdentity === 'parent-for-slot') {
      this._display = html`<parent-for-slot></parent-for-slot>`;
    }

    if (excerciseIdentity === 'class-map-practice') {
      this._display = html`<class-map-practice></class-map-practice>`;
    }

    if (excerciseIdentity === 'bem-practice') {
      this._display = html`<bem-practice></bem-practice>`;
    }
  }

  //TODO: Refactor this to align it in one light
  render() {
    return html`
      <div class="main-container">
        <p>WELCOME, to my excercise book!</p>

        <div class="button-space">
          <button
            @click=${() => {
              this._set_ExcerciseToView('dummy-experiment');
            }}
          >
            DUMMY PAGE
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('experiment-with-updated');
            }}
          >
            UPDATED() LIFECYCLE
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('get-request-practice');
            }}
          >
            GET REQUEST PRACTICE
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('bar-loader');
            }}
          >
            BAR LOADER
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('with-bar-loader');
            }}
          >
            GET CALL WITH BAR LOADER
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('parent-component');
            }}
          >
            PARENT - CHILD INTERFACE
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('component-using-mixin');
            }}
          >
            USING MIXIN EXAMPLE
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('task-list');
            }}
          >
            CHAT CODING CHALLANGE ONE
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('polling-list');
            }}
          >
            CHAT CODING CHALLANGE TWO
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('user-profile-component');
            }}
          >
            CHAT CODING CHALLANGE THREE
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('array-practice');
            }}
          >
            ARRAY PRACTICE ONE
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('parent-for-slot');
            }}
          >
            PARENT FOR SLOT
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('class-map-practice');
            }}
          >
            CLASS MAP PRACTICE
          </button>

          <button
            @click=${() => {
              this._set_ExcerciseToView('bem-practice');
            }}
          >
            BEM EXAMPLE PRACTICE
          </button>
        </div>

        <div class="excercise-viewport">${this._display}</div>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);
