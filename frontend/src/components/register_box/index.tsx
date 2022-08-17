import AppLabel  from '../shared/display/labels'
import { AppInput } from '../shared/inputs/inputs.styled'
import { CardInputContainer, CardWrapper } from '../shared/cards/login_register_card.styled'
import React, { FC, useContext } from "react";
import { AppLang } from '../../context/langContext';
import { RegisterBoxAvatar, RegisterBoxForm, RegisterBoxHeader, RegisterHeadBox } from './register.styled';
import { AppButton, AppButtonSecondary } from '../shared/buttons/buttons.styled';
import { useNavigate } from "react-router-dom";

interface IProps {};

const Index:FC<IProps> = (props) => {
    const langContext = useContext(AppLang);
    let navigate = useNavigate();

    const handleReg = () =>{
        //axios call
        navigate('/login');
    }
    

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
            <AppButtonSecondary 
                width='220px'
                onClick={handleReg}> REJSESTRACJA</AppButtonSecondary>        
    </CardInputContainer>
   
</CardWrapper>
};

export default Index;
