import styled from 'styled-components'

interface Props {
    width?: string;
  }

export const AppInputWrapper = styled.div<Props>`    
    width: ${(props) => props.width};
    transition: .3s;
    margin-bottom: 6px;
`

export const AppTextInputField = styled.input<Props>`    
    width: 100%;
    padding: 10px ;    
    background-color: ${props => props.theme.colors.body };
    color: ${props => props.theme.colors.color };
    border: none;
    border-radius: 50px/50px;

    &:focus{
        outline: none;
        background-color: ${props => props.theme.colors.body_sec_light_secondary };
    }

    &:hover{
        background-color: ${props => props.theme.colors.baseInputBackground};   
        
    }
`
export const AppTextInputError = styled.div<Props>`   
    width: ${(props) => props.width};
    font-size: 12px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: red;
    padding: 0 15px;    
    height: 20px;
    display: flex;
    align-items: center;
`

export const AppInput = styled.input<Props>`    
    width: ${(props) => props.width};
    background-color: ${props => props.theme.colors.body };
    color: ${props => props.theme.colors.color };
   
    transition: .3s;
    border: none;
    border-radius: 50px/50px;
    

    &:focus{
        outline: none;
        background-color: ${props => props.theme.colors.body_sec_light_secondary };
    }

    &:hover{
        background-color: ${props => props.theme.colors.baseInputBackground};   
        
    }
`