import React from 'react'
import { PlayerPanelWrapper } from './playerPanel.styled'

export default function index({children}) {
    return (
        <PlayerPanelWrapper>
            {children}
        </PlayerPanelWrapper>
    )
}
