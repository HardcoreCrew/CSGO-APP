import { createGlobalStyle  } from 'styled-components';


export default createGlobalStyle`
@font-face {
      font-family: 'Russo One';
      src: url(../assets/fonts/RussoOne-Regular.ttf ) format(Example: 'truetype' or 'opentype' depending on the file extension of your font);
}

body {    
      margin: auto;
      padding: 0;        
      background: ${props => props.theme.colors.body };
      color: ${props => props.theme.colors.fontColor };
      margin: 0;
      font-family: 'russo-one-regular', sans-serif;
      display: flex;
      justify-content: center;

      
}`;

