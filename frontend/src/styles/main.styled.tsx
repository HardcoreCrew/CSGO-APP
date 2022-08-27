import { createGlobalStyle } from 'styled-components'

export const AppStyleWrapper = createGlobalStyle`  
    body {    
        
        background: ${props => props.theme.colors.baseColor  };
        color: ${props => props.theme.colors.baseColor  };
        margin: 0;
        font-family: 'Iceland', cursive;
        font-size: 14px;
        
        a{
            color: white;
            text-decoration: none;
            transition: .3s;

            &:hover{
                color: ${props => props.theme.colors.baseColor  };
            }
        }
    }

    
`