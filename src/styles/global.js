import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto Condensed', sans-serif;
    background: #333;
    -webkit-font-smoothing: antialised !important;
  }

  ul {
    list-style: none;
    margin-left: 7%;
  }

  li {
    display: inline-block;
    margin-left: 25px;
  }
`;

export const Conteudo = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;














