import React, { useEffect } from 'react'
import { PlayerPanelWrapper } from './playerPanel.styled'

type Props = {
    children: React.ReactNode;
};

export const Index: React.FC<Props> = ({children} : Props) => {
    return (
        <PlayerPanelWrapper>            
            {children}
        </PlayerPanelWrapper>
    )
  }
  
  export default Index
