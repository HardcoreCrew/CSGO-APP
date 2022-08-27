import styled from 'styled-components'
import { keyframes } from 'styled-components'

interface Props {
    width?: string;
    height?: string;
    time?: number;
    cardDirection?: string;
    inputDirection?: string;
    itemsDirection?: string;
    animationState?: boolean;
}

const fadeInAnim = keyframes`
    0%{ opacity: 0}
    100%{ opacity: 1}
`
const fadeOutAnim = keyframes`
    0%{ opacity: 1}
    100%{ opacity: 0}
`


export const NotifWrapper = styled.div<Props>`
    position: absolute;
    top: 180px;
    width: ${props => props.width };
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    opacity: 0;
    transition: 1s ease-in-out;
    // animation: ${props => props.animationState? 'fadeOut' : 'fadeIn'} .3s ease-in-out;
    animation:
    ${({ animationState }) =>{
      if(!animationState)
      { return fadeInAnim  }
    }} .3s;
    animation-fill-mode: forwards;
`

export const CardWrapper = styled.div<Props>`
    width: ${props => props.width };
    display: flex;
    flex-direction: ${props => props.cardDirection };
    align-items: center;
    justify-content: space-between;

   

`



export const CardInputContainer = styled.div<Props>`
    position: relative;
    padding: 20px;
    min-height: ${props => props.height };
    min-width: ${props => props.width };
    display: flex;
    flex-direction: ${props => props.inputDirection };
    border-radius: 15px;
    align-items: ${props => props.itemsDirection? props.itemsDirection : 'center'  };
    justify-content: space-evenly;
    background-color: ${props => props.theme.colors.body_sec_light };
    box-shadow: black 5px 5px 30px;
`