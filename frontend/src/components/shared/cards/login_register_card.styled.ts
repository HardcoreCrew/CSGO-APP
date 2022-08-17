import styled from 'styled-components'

interface Props {
    width?: string;
    cardDirection?: string;
    inputDirection?: string;
    itemsDirection?: string;
}


export const CardWrapper = styled.div<Props>`
    width: ${props => props.width };
    display: flex;
    flex-direction: ${props => props.cardDirection };
    align-items: center;
    justify-content: space-between;
`

export const CardInputContainer = styled.div<Props>`
    padding: 10px;
    min-height: 340px;
    min-width: 240px;
    display: flex;
    flex-direction: ${props => props.inputDirection };
    border-radius: 15px;
    align-items: ${props => props.itemsDirection? props.itemsDirection : 'center'  };
    justify-content: space-evenly;
    background-color: ${props => props.theme.colors.body_sec_light };
    box-shadow: black 5px 5px 30px;
`