import styled from 'styled-components'

export const LayoutWrapper = styled.div`      
    width: 100vw;
    min-height: 100vh;
    
`

export const CenterAll = styled.div`   
      width: 100vw;
      height: 100vh;
      display:flex;
      justify-content: center;
      align-items: center;
`

export const OrangeText = styled.span`   
      color: ${props => props.theme.colors.baseColor  };
`

export const AppLabel = styled.label`   
      margin: 0;
      padding: 0;
      height: 3px;
`

