import styled from 'styled-components'

export const AppInput = styled.input.attrs({ 
    type: 'text'
  })`    
    width: ${(props) => props.width};
    background-color: ${({theme}) => theme.baseInputBackground};
    color: ${({theme}) => theme.color };
    padding: 7px 20px;
    transition: .3s;
    border: none;
    border-bottom: .5px solid #666;
    margin: 3px;

    &:focus{
    outline: none;
    border-bottom: .5px solid #888;  
    }

    &:hover{
        background-color: ${({theme}) => theme.baseInputBackground_active};      
        border-bottom: .5px solid #999;  
    }
`