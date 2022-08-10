import React, { useEffect } from 'react'
import { PlayerPanelWrapper } from './playerPanel.styled'

type Props = {
    children: JSX.Element
};

export const Index: React.FC<Props> = ({children} : Props) => {
    return (
        <PlayerPanelWrapper>            
            {children}
        </PlayerPanelWrapper>
    )
  }
  
  export default Index
