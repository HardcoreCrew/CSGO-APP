import styled from 'styled-components'
import bg from '../../assets/bg.jpg'





export const HeaderWrapper = styled.div`   
    display:flex;
    width: 100vw;
    height: 20vh;
`

export const HeaderBackground = styled.div`   
    display:flex;
    width: 100vw;
    height: 20vh;
    background-image: url(${bg});
    background-size: cover;
    background-position-y: -280px;
`