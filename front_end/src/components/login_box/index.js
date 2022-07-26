import React, { useState } from 'react'
import { AppButton } from '../shared/buttons/buttons.styled'
import { AppInput } from '../shared/buttons/inputs/inputs.styled'
import { LoginBoxContainer, LoginBoxInputContainer, LoginBoxWrapper } from './loginBox.styled'

export default function Index({getLoginData}) {

    const [loginData, setLoginData] = useState({ })

    return (
        <LoginBoxContainer>
            <LoginBoxWrapper>         
                <LoginBoxInputContainer>
                    <AppInput type='text ' placeholder="LOGIN" onChange={e => setLoginData(e.target.value)}/>
                    <AppInput type='text ' placeholder="HASŁO"/>
                    <AppButton width='55%' onClick={() => getLoginData(loginData)}> WBIJAMY!</AppButton>
                </LoginBoxInputContainer>   
            </LoginBoxWrapper>
        </LoginBoxContainer>
    )
}
