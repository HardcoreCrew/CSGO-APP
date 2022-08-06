import React, { Children } from 'react'
import { HeaderBackground, HeaderWrapper } from './header.styled'

export default function index({children}) {
    return (
        <HeaderWrapper>
            <HeaderBackground />
            {children}
        </HeaderWrapper>
    )
}
