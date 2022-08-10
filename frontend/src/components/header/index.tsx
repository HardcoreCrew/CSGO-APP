import React from 'react'
import { HeaderBackground, HeaderWrapper } from './header.styled'

type Props = {
    children: JSX.Element
};

export const Header: React.FC<Props> = ({children} : Props) => {
  return (
    <HeaderWrapper>
            <HeaderBackground />
            {children}
        </HeaderWrapper>
  )
}

export default Header

