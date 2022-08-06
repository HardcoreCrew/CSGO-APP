
import styled from 'styled-components'

export const AppButton = styled.button`      
    width: ${(props) => props.width};
    background-color: ${({theme}) => theme.baseColor};
    color: ${({theme}) => theme.color };
    padding: 7px 20px;
    transition: .3s;
    border: 0;
    border-radius: 50px/50px;


    &:hover{
        cursor:pointer;
        background-color: ${({theme}) => theme.baseColor_active};        
    }
`

export const AppButtonSecondary = styled(AppButton)`      

    background-color: ${({theme}) => theme.baseColor_secondary};
  
    &:hover{
        background-color: ${({theme}) => theme.baseColor_secondary_active};        
    }
`