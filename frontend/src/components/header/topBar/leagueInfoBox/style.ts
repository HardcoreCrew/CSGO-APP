import styled from 'styled-components'


interface CProps{
    width?: string ;
    borderL?: boolean ;
}

export const LeagueInfoBoxWrapper = styled.div`  
    width: 400px;
    background-color: ${props => props.theme.colors.mainColor};
    color: ${props => props.theme.colors.mainColor_text};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LeagueInfoBoxContentText = styled.div<CProps>`  
    width: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LeagueInfoBoxContentIco= styled.div<CProps>`  
    width: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${props => props.theme.colors.mainColor_light};
    border-left: 1px ${props => props.theme.colors.mainColor_light} solid;
`