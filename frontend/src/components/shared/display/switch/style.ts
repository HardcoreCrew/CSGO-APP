import styled from 'styled-components'

interface Props {
    selected: boolean;
}

export const SwitchWrapper = styled.label<Props>`   
    position: absolute;
    right: 0;
    width: 80px;
    height: 28px;
    border-radius: 30px;
    background-color: gray;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 99;
    
    
    &::before{
        transition: .3s;
        position: absolute;
        content: '';
        width: 24px;
        height: 24px;
        background-color: black;
        border-radius: 30px;
        margin-left: 2px;
        left: ${props => props.selected ? '50px' : '0'};
    }
`



export const SwitchInput = styled.input.attrs({ type: 'checkbox' })`   
    opacity: 0;
    width: 0;
    height:0;  
`

export const SwitchSlider = styled.span`   
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;   
    left: 0;
    bottom: 0;
    background-color: gray;

    &::before{
        position: absolute;
        content: '';
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 4px;
        background-color: white;
    }
`