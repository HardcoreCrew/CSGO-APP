import { createGlobalStyle  } from 'styled-components';

export default createGlobalStyle`
body {            
      background: ${props => props.theme.colors.body_dark };
      color: ${props => props.theme.colors._lightBoxText };
      margin: 0;
      font-family: 'Bebas Neue', cursive;
}`;

