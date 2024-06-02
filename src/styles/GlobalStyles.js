import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`


//*color variables

:root {
  --bg: hsla(23, 11%, 75%, 1);
  --nav: hsla(270, 40%, 90%, 1);
  --text: hsla(38, 22%, 26%, 1);
}

::-moz-selection { /* Code for Firefox */
  background: hsla(39, 62%, 67%, 1);
}

::selection {
  background: hsla(39, 62%, 67%, 1);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: hsla(39, 23%, 25%, 0);
}

*::-webkit-scrollbar-thumb {
  background-color: hsla(39, 62%, 67%, 1);
}

body {
  overflow: hidden;
}

html {
    height:100vh;
    scrollbar-width: thin;  
    scrollbar-color: hsla(39, 62%, 67%, 1) hsla(39, 23%, 25%, 0);
    background-color: hsl(38.8, 48.6%, 93.1%);
    
    opacity: 1;
    background-image: radial-gradient(hsl(37.5, 15.7%, 20%) 0.5px, hsl(36.9, 17.8%, 14.3%) 0.5px);
    background-size: 5px 5px;
}

ul {
    list-style: none;
}
`;



export default GlobalStyles;