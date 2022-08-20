import styled from 'styled-components'

export const NavWrapper = styled.div`  
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavElement = styled.div`
    width: 150px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.mainColor_text};
    
   
`