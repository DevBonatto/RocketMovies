import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }

/* Scroll */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 8px;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.COLORS.SALMON} transparent;
`;