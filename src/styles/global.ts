import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } 
  :focus{
    outline: 0;
    box-shadow:  0 0 4px ${(p) => p.theme.labe};
  }
  body{
    background: ${(props) => props.theme.input};
    color: ${(props) => props.theme.text};;
    webkit-font-smoothing: antialiased;
   min-height: 100vh;
  }
  body, input, textarea, button{
    font: 1rem Roboto, sans-serif;
    line-height: 1.6;
  }
  button{
    border: none;
    cursor: pointer;
  }
 `
