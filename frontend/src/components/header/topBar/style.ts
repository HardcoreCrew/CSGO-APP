import styled from "styled-components";

export const TopBoxWrapper = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    position: relative;
    overflow: hidden;
`

export const TopBoxEndBlock = styled.div`
    position: relative;
    width: 130px;
    height: 255px;
    display: flex;
    background-color: ${props => props.theme.colors.mainColor};
    transform: rotate(-45deg);
    right: -60px;
    top: -30px;

    &::after{
    position: absolute;
    content: '';
    width: 115px;
    height: 15px;
    top: -20px;
    /* background-color: ${props => props.theme.colors.mainColor}; */
    background-color: lime;
    z-index: 99;

    }        
`

