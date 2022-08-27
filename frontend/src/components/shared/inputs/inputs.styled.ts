import styled from 'styled-components'
import { keyframes } from 'styled-components'

interface Props {
    width?: string;
    isValidStyle?: string | null;
    errorMessage?: string | null;
    tooltipOffset?: string | null;
  }


  const LeftToRightAnim = keyframes`
  from {
    transform: translateX(-10px);
  }
    to {
        transform: translateX(-5px);
    }
    
`

export const AppInputWrapper = styled.div<Props>`  
    position: relative;  
    width: ${(props) => props.width};
    transition: .3s;
    margin-bottom: 6px;
    transition: .3s;
`

export const AppTextInputField = styled.input<Props>`   
    position: relative; 
    width: 100%;
    padding: 10px ;    
    background-color: ${props => props.theme.colors.body };
    color: ${props => props.theme.colors.color };
    border: ${props => props.isValidStyle === 'active'? '1px solid red' : '1px solid transparent'};
    border-radius: 50px/50px;

    &:focus{
        outline: none;
        background-color: ${props => props.theme.colors.body_sec_light_secondary };
    }

    &:hover{
        background-color: ${props => props.theme.colors.baseInputBackground};   
        
    }
`


export const ErrorToolTip = styled.div<Props>`    
    position: absolute;
    left: ${props => props.tooltipOffset };
    top: 0;
    width: max-content;
    height: 30px;
    display:flex;
    justify-content:center;
    align-items: center;
    color: ${props => props.theme.colors.fontColor};
    font-size: 12px;
    padding:  ${props => props.isValidStyle === 'active'? '3px 15px' : '0px'};  
    background-color: ${props => props.theme.colors.body_sec_light_secondary };
    opacity: ${props => props.isValidStyle === 'active'? 1 : 0};
    transition: .3s;
    border-radius: 5px;
    border-left: 1px black solid;
    border-top: 3px   ${props => props.theme.colors.body} solid;
    border-right: 3px   ${props => props.theme.colors.body} solid;
    border-bottom: 3px   ${props => props.theme.colors.body } solid;
    animation: ${LeftToRightAnim} 1s ease-in-out infinite alternate;
    z-index: 3;

    &::after, ::before{
        content: '';
        position: absolute;
        top: 13px;
        left: -15px;
        width: 0;
        height: 0;        
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid ${props => props.theme.colors.body_sec_light_secondary };
        transform: rotate(-90deg);
        z-index: 5;
    }

    &::before{
        top: 12px;
        left: -16px;
        border-bottom: 10px solid black;
        transform: rotate(-90deg);
        z-index: -2;
    }
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