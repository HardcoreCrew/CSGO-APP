import AppLabel  from '../shared/display/labels'
import { AppInput } from '../shared/inputs/inputs.styled'
import { CardInputContainer, CardWrapper } from '../shared/cards/login_register_card.styled'
import React, { FC, useContext } from "react";
import { AppLang } from '../../context/langContext';
import { RegisterBoxAvatar, RegisterBoxForm, RegisterBoxHeader, RegisterHeadBox } from './register.styled';
import { AppButton, AppButtonSecondary } from '../shared/buttons/buttons.styled';

interface IProps {};

const Index:FC<IProps> = (props) => {
    const langContext = useContext(AppLang);

    return <CardWrapper  >
    <CardInputContainer inputDirection='column' >      
            <RegisterBoxHeader>
                <RegisterHeadBox>
                    <RegisterBoxAvatar />
                </RegisterHeadBox>

                <RegisterHeadBox>
                    <AppInput 
                        type='text' 
                        placeholder={langContext?.forms.registerForm.placeholders[0]} 
                        width='100px'/>
                    <AppInput 
                        type='text' 
                        placeholder={langContext?.forms.registerForm.placeholders[1]} 
                        width='100px'/>

                </RegisterHeadBox>
            </RegisterBoxHeader>
            <RegisterBoxForm>
                <AppInput 
                    type='text' 
                    placeholder={langContext?.forms.registerForm.placeholders[2]}  
                    width='200px'/>
                <AppInput 
                    type='text' 
                    placeholder={langContext?.forms.registerForm.placeholders[3]}  
                    width='200px'/>
                <AppInput 
                    type='text' 
                    placeholder={langContext?.forms.registerForm.placeholders[4]} 
                    width='200px'/>
                <AppInput 
                    type='text' 
                    placeholder={langContext?.forms.registerForm.placeholders[4]} 
                    width='200px'/>
            </RegisterBoxForm>
            <AppButtonSecondary width='220px'> REJSESTRACJA</AppButtonSecondary>        
    </CardInputContainer>
   
</CardWrapper>
};

export default Index;
