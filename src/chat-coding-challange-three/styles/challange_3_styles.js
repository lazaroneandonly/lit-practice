import { css } from 'lit';

export const challangeThreeStyles = css`
  :host {
    display: block;
  }

  .profile-body {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  .title,
  .profile-info {
    background-color: black;
    width: 100%;
    color: white;
    animation: loading 2s;
    white-space: nowrap;
  }

  .profile-info {
    width: 70%;
  }

  button {
    background: black;
    border-color: white;
    color: white;
    transition: linear 500ms;
    width: 150px;
    height: 40px;
  }

  button:hover {
    background: white;
    color: black;
    width: 200px;
  }

  .profile-picture {
    background-color: forestgreen;
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
  }

  @keyframes loading {
    0% {
      width: 0;
    }
    100% {
      width: 1;
    }
  }
`;
