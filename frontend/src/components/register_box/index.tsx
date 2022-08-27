
import { CardInputContainer, CardWrapper } from '../shared/cards/login_register_card.styled'
import React, { FC, useContext, useEffect, useState } from "react";
import { AppLang } from '../../context/langContext';
import { RegisterBoxAvatar, RegisterBoxForm, RegisterBoxHeader,  RegisterHeadBox } from './register.styled';
import { AppButtonSecondary } from '../shared/buttons/buttons.styled';
import InputField from '../shared/inputs/textField'
import axios from 'axios';
import Notification from '../shared/cards/notif_card'




const Index:FC = (props) => {
    const langContext = useContext(AppLang);


    const [registerForm, setRegisterForm] = useState(true);

    const [registerValid, setRegisterValid] = useState({
        isValid: true,
        error: 'bla'
    });


    const [userData, setUserData] = useState({
        nick: '',
        twChanel: '',
        login: '',
        mail: '',
        raidData: '',
        raidDataConf: ''
    });

    // {inputValue: '123123', inputName: 'tw', twChanel: ƒ}
    const handleFormData = (dataText:any) =>{  
        switch (dataText.inputName) {
            case 'nick':
                setUserData(prev => {return {...prev, nick: dataText.inputValue}})
                break;

            case 'tw':
                setUserData(prev => {return {...prev, twChanel: dataText.inputValue}})
                break;

            case 'login':
                setUserData(prev => {return {...prev, login: dataText.inputValue}})
                break;

            case 'mail':
                setUserData(prev => {return {...prev, mail: dataText.inputValue}})
                break;

            case 'password':
                setUserData(prev => {return {...prev, raidData: dataText.inputValue}})
                break;

            case 'passwordSec':
                setUserData(prev => {return {...prev, raidDataConf: dataText.inputValue}})              
                break;
        
            default:
                break;
        }
    }

    useEffect(() => {
        confirmRegister(userData);
    }, [userData]);


    const confirmRegister = (userData:any) => {
        let isOk = false
        for (const property in userData) {            
            if (userData[property] === '') {isOk = true }
        }
          setRegisterForm(isOk)
    }

    const handleRegister = async () =>{

        if(userData.raidData === userData.raidDataConf){    
            const res = await axios.post('http://localhost:4001/users',userData)  
            setRegisterValid(prev => {return {...prev, isValid: res.data.statusCode === 409? false: true, error: res.data.statusCode === 409? langContext!.forms.registerForm.errors[5]: ''}})
            handleNotif(3000)  
            console.log(res.data.statusCode);        
        }else{
            setRegisterValid(prev => {return {...prev, isValid: false, error: 'pw'}})
            handleNotif(3000)  
        }
    }

    const handleNotif = (timeout : number) =>{  
        setTimeout(() => {
            setRegisterValid(prev => {return {...prev, isValid: true}})
        }, timeout);}



    return <CardWrapper cardDirection={'column'} >
            
            { <Notification show={registerValid.isValid}> {registerValid.error === 'pw'? langContext?.forms.registerForm.errors[6] : registerValid.error} </Notification>}

           

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
                                inputData={handleFormData}
                                tooltipOffset={'180px'}
                            />

                            <InputField 
                                width='135px'
                                inputName='tw'
                                placeholder={langContext?.forms.registerForm.placeholders[1]} 
                                inputData={handleFormData}
                                tooltipOffset={'180px'}
                            />

                        </RegisterHeadBox>

                    </RegisterBoxHeader>
                    <RegisterBoxForm>
                        <InputField 
                            width='250px'
                            inputName='login'
                            placeholder={langContext?.forms.registerForm.placeholders[2]} 
                            inputData={handleFormData}
                        />
                        <InputField 
                            width='250px'
                            inputName='mail'
                            placeholder={langContext?.forms.registerForm.placeholders[3]} 
                            inputData={handleFormData}
                        />
                        <InputField 
                            width='250px'
                            inputName='password'
                            inputType='password'
                            placeholder={langContext?.forms.registerForm.placeholders[4]} 
                            inputData={handleFormData}
                        />
                        <InputField 
                            width='250px'
                            inputName='passwordSec'
                            inputType='password'
                            inputData={handleFormData}
                            placeholder={langContext?.forms.registerForm.placeholders[4]} 
                        />
                    </RegisterBoxForm>
                    <AppButtonSecondary 
                        disabled={registerForm}
                        onClick={handleRegister}
                        width='320px'
                        > {langContext?.forms.registerForm.labels[0]} </AppButtonSecondary>        
            </CardInputContainer>
    </CardWrapper>
};

export default Index;
