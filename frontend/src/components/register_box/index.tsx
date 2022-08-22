import AppLabel  from '../shared/display/labels'
import { AppInput } from '../shared/inputs/inputs.styled'
import { CardInputContainer, CardWrapper } from '../shared/cards/login_register_card.styled'
import React, { FC, useContext, useReducer, useState } from "react";
import { AppLang } from '../../context/langContext';
import { RegisterBoxAvatar, RegisterBoxForm, RegisterBoxHeader, RegisterHeadBox } from './register.styled';
import { AppButton, AppButtonSecondary } from '../shared/buttons/buttons.styled';
import { useNavigate } from "react-router-dom";
import InputField from '../shared/inputs/textField'

interface IUSerData {
    nick: string | null;
    twChanel: string | null;
    login: string | null;
    mail: string | null;
    raidData: string | null;
}

interface IUSerDataValid {
    nick: boolean;
    twChanel: boolean;
    login: boolean;
    mail: boolean;
    raidData: boolean;
}

const Index:FC = (props) => {
    const langContext = useContext(AppLang);
    let navigate = useNavigate();


    const [userData, setUserData] = useState<IUSerData>({
        nick: null,
        twChanel: null,
        login: null,
        mail: null,
        raidData: null,
    });

    const [userDataValid, setUserDataValid] = useState<IUSerDataValid>({
        nick: true,
        twChanel: true,
        login: true,
        mail: true,
        raidData: true,
    });




    return <CardWrapper  >
            <CardInputContainer inputDirection='column' >      
                    <RegisterBoxHeader>
                        <RegisterHeadBox>
                            <RegisterBoxAvatar />
                        </RegisterHeadBox>

                        <RegisterHeadBox>
                            <InputField 
                                width='135px'
                                inputName='nick'
                                placeholder={langContext?.forms.registerForm.placeholders[0]} 
                            />

                            <InputField 
                                width='135px'
                                inputName='tw'
                                placeholder={langContext?.forms.registerForm.placeholders[1]} 
                            />

                        </RegisterHeadBox>

                    </RegisterBoxHeader>
                    <RegisterBoxForm>
                        <InputField 
                            width='250px'
                            inputName='login'
                            placeholder={langContext?.forms.registerForm.placeholders[2]} 
                        />
                        <InputField 
                            width='250px'
                            inputName='mail'
                            placeholder={langContext?.forms.registerForm.placeholders[3]} 
                        />
                        <InputField 
                            width='250px'
                            inputName='password'
                            inputType='password'
                            placeholder={langContext?.forms.registerForm.placeholders[4]} 
                        />
                        <InputField 
                            width='250px'
                            inputName='password'
                            inputType='password'
                            placeholder={langContext?.forms.registerForm.placeholders[4]} 
                        />
                    </RegisterBoxForm>
                    <AppButtonSecondary 
                        width='320px'
                        > REJSESTRACJA</AppButtonSecondary>        
            </CardInputContainer>
   
    </CardWrapper>
};

export default Index;
