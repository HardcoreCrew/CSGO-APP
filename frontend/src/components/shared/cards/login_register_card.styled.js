import styled from 'styled-components'




export const CardWrapper = styled.div`
    width: ${props => props.width };
    display: flex;
    flex-direction: ${props => props.direction };
    align-items: center;
    justify-content: space-between;
`

export const CardInputContainer = styled.div`
    padding: 10px;
    min-height: 340px;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({theme}) => theme.body_sec_light };
    box-shadow: black 5px 5px 30px;
`