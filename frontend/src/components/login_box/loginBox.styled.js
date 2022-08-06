import styled from 'styled-components'




export const LoginBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({theme}) => theme.body_sec };
`

export const LoginBoxInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({theme}) => theme.body_sec };
`