import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
  html {
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 30px;
  }
  #app {
    min-height: 100%;
  }
  main {
    display: block;
  }
  a {
    background-color: transparent;
    color: inherit;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    padding: 0;
  }
  strong {
    font-weight: 700;
  }
`

export default GlobalStyle
