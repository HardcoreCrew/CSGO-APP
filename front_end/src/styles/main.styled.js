import { createGlobalStyle } from 'styled-components'

export const AppStyleWrapper = createGlobalStyle`  
    body {    
        
        background: ${({theme}) => theme.body };
        color: ${({theme}) => theme.color };
        margin: 0;
        font-family: 'Iceland', cursive;
        font-size: 14px;
        
        a{
            color: white;
            text-decoration: none;
            transition: .3s;

            &:hover{
                color: ${({theme}) => theme._colorFont };
            }
        }
    }

    
`