import React, { useEffect } from 'react'
import { PlayerPanelWrapper } from './playerPanel.styled'

export default function Index({children}) {

    

    return (
        <PlayerPanelWrapper>

            
            {children}
        </PlayerPanelWrapper>
    )
}
