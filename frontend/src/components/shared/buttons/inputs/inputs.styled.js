import styled from 'styled-components'

export const AppInput = styled.input`    
    width: ${(props) => props.width};
    background-color: ${({theme}) => theme.body };
    color: ${({theme}) => theme.color };
    padding: 7px 20px;
    transition: .3s;
    border: none;
    border-radius: 50px/50px;
    margin: 3px;

    &:focus{
        outline: none;
        background-color: ${({theme}) => theme.body_sec };
    }

    &:hover{
        background-color: ${({theme}) => theme.baseInputBackground};   
        
    }
`