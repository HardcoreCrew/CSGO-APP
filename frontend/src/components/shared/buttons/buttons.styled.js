
import styled from 'styled-components'

export const AppButton = styled.button`      
    width: ${(props) => props.width};
    background-color: ${({theme}) => theme.baseColor};
    color: ${({theme}) => theme.color };
    padding: 7px 20px;
    transition: .3s;

    &:hover{
        cursor:pointer;
        background-color: ${({theme}) => theme.baseColor_active};        
    }
`