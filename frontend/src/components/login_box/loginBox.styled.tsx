import styled from 'styled-components'




export const LoginBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const LoginBoxInputContainer = styled.div`
    padding: 10px;
    height: 340px;
    width: 240px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: ${props => props.theme.colors.baseColor }; */
    box-shadow: black 5px 5px 30px;
`

export const LoginRegisterLink = styled.div`
    font-size: 12px;
    letter-spacing: 1px;
    a{
        color: orange;
        text-decoration: none;
    }
`
export const IconBox = styled.div`
    display:flex;
    justify-content: space-between;
    width: 60%;
    background-color: #fff;
    margin-bottom: 20px;
`
export const TitleLogin = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    margin-bottom: 20px;
`