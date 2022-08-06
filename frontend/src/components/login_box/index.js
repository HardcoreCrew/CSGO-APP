import React, { useState } from 'react'
import { AppButton } from '../shared/buttons/buttons.styled'
import { AppInput } from '../shared/buttons/inputs/inputs.styled'
import { LoginBoxInputContainer, LoginBoxWrapper } from './loginBox.styled'

export default function Index({children}) {



    return (
            <LoginBoxWrapper>         
                {children}
            </LoginBoxWrapper>
    )
}
