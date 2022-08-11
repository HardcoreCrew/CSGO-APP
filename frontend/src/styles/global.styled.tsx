import { createGlobalStyle  } from 'styled-components';

export default createGlobalStyle`
body {    
      margin: auto;
      padding: 0;        
      background: ${props => props.theme.colors.body };
      color: ${props => props.theme.colors.fontColor };
      margin: 0;
      font-family: 'Bebas Neue', cursive;
      display: flex;
      justify-content: center;
}`;

