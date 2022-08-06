import styled from 'styled-components'


export const IconCircleWrapperContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconCircleWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.baseColor_secondary};
    color: ${({theme}) => theme.body_sec_light};
    box-shadow: -4px 4px ${({theme}) => theme.body};
    top: -20px;
    left: -15px;
    transition: .3s;

    &:hover{
        font-size: 20px;
        padding: 10px;
        top: -25px;
        left:  -20px;
        cursor: pointer;
        color: white;
        box-shadow: -1px 1px ${({theme}) => theme.body};
    }
`