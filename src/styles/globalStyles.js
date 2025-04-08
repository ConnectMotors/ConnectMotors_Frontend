import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--fonte-principal);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root{
    --fonte-principal: "Poppins", Arial, sans-serif;
    --branco: #ffffff;
    --preto: #000000;
    --azul-claro: #B6B9FF;
    --cinza-background: #DDE0E2;
    --cinza-1 : #f3f3f3;
    --cinza-2 : #d9d9d9;
    --cinza-3 : #a4a4a4;
    --cinza-4 : #8c8c8c;
    --cinza-5 : #565656;
    --cinza-6 : #313131;
    --azul-1 : #cbd3d8;
    --azul-2 : #b6b9ff;
    --azul-3 : #6b6eff;
    --azul-4 : #0004ff;
  }
`

export default GlobalStyles