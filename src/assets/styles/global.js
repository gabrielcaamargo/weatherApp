import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    font-size: 16px;
    width: 100%;
    max-width: 550px;
    margin: 48px auto;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
  }

  button {
    cursor: pointer;
  }
`;
