import styled from 'styled-components'


export const Contener = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div`
    width: 100vw;
    height: 20vh;
    background: ${({theme}) => theme.body };
`
export const Content = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
`

export const ContentDisplay = styled.div`
    margin-left: 2.5vw;
    width: 80vw;
    height: 120vh;
    background-color: ${({theme}) => theme.body_sec };
`
export const FriendListDisplay = styled.div`
    width: 10wv;
    height: 70vh;
`

export const Footer = styled.div`
    width: 100vw;
    height: 10vh;
    background: ${({theme}) => theme.body };
`
