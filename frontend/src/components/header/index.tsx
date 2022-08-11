import React from 'react'
import { HeaderContent, HeaderWrapper } from './style'
import Timer from './timer'
import InfoPanel from './InfoPanel'
import TopBar from './topBar';


export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <TopBar />
      <HeaderContent>
        <Timer/>
        <InfoPanel/>
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header

