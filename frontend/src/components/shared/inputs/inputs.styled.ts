import styled from 'styled-components'

interface Props {
    width?: string;
  }

export const AppInput = styled.input<Props>`    
    width: ${(props) => props.width};
    background-color: ${props => props.theme.colors.body };
    color: ${props => props.theme.colors.color };
    padding: 7px 20px;
    transition: .3s;
    border: none;
    border-radius: 50px/50px;
    margin: 3px;

    &:focus{
        outline: none;
        background-color: ${props => props.theme.colors.body_sec_light_secondary };
    }

    &:hover{
        background-color: ${props => props.theme.colors.baseInputBackground};   
        
    }
`