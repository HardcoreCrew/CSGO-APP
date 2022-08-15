
import styled from 'styled-components'

interface Props {
    width?: string;
  }

export const AppButton = styled.button<Props>`      
    width: ${(props) => props.width};
    background-color: ${props => props.theme.colors.baseColor};
    color: ${props => props.theme.colors.color };
    padding: 7px 20px;
    transition: .3s;
    border: 0;
    border-radius: 50px/50px;


    &:hover{
        cursor:pointer;
        background-color: ${props => props.theme.colors.baseColor_active};        
    }
`

export const AppButtonSecondary = styled(AppButton)`      

    background-color: ${props => props.theme.colors.baseColor_secondary};
  
    &:hover{
        background-color: ${props => props.theme.colors.baseColor_secondary_active};        
    }
`