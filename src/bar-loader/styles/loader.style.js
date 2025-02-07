import { css } from 'lit';

export const barLoaderStyles = css`
  :host {
    display: host;
  }

  .bars-holder {
    display: flex;
    gap: 2px;
    border-style: solid;
    height: 30px;
    width: 100px;
    padding: 3px;
  }

  .bar-block {
    background-color: green;
    height: 20px;
    width: 20px;
  }
`;
