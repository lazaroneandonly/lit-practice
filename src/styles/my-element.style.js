import { css } from 'lit';

export const elementStyles = css`
  :host {
    display: block;
  }

  .main-container {
    display: flex;
    flex-direction: column;
  }

  .button-space {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .col {
    flex: 1;
  }

  .excercise-viewport {
    margin: 20px;
    border-style: double;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .button {
    background-color: Green;
    width: 100px;
    height: 40px;
    color: white;
  }

  .counter {
    background-color: black;
    width: 200px;
    height: 200px;
    color: white;
    font-size: xx-large;
    align-content: center;
    text-align: center;
  }
`;
