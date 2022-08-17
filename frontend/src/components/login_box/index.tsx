import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppButton, AppButtonSecondary } from '../shared/buttons/buttons.styled'
import { AppInput } from '../shared/inputs/inputs.styled'
import { IconBox, LoginBoxInputContainer, LoginBoxWrapper, LoginRegisterLink, TitleLogin } from './loginBox.styled'
import { FaTwitter, FaTwitch,FaYoutube } from 'react-icons/fa';
import { IconCircleWrapper, IconCircleWrapperContainer } from '../shared/icons/iconsWrappers.styled'
import { OrangeText } from '../../styles/layout.styled'
import { CardInputContainer, CardWrapper } from '../shared/cards/login_register_card.styled'
import { AppLang } from '../../context/langContext'
import { useNavigate } from "react-router-dom";

export const Index: React.FC = () => {
   const langContext = useContext(AppLang);
   let navigate = useNavigate();

   const [loginCreds, setLoginCreds] = useState({
      login: '',
      pw: ''
   });

   const loginHandler = () =>{
      console.log(loginCreds);
      navigate('/');
   }

   return (
      <CardWrapper>         
      <CardInputContainer inputDirection={'column'}>
         <TitleLogin>
         {langContext?.forms.loginForm.labels[0].title[0]} 
         <OrangeText>{langContext?.forms.loginForm.labels[0].title[1]} </OrangeText>
         {langContext?.forms.loginForm.labels[0].title[2]} 
         </TitleLogin>
         {/* TO DO: Reduce code - use before and after pseudo elements  */}
         <IconBox>                     
             <IconCircleWrapperContainer> 
               <IconCircleWrapper>
                  <FaTwitter/>
               </IconCircleWrapper>
            </IconCircleWrapperContainer>
            
            <IconCircleWrapperContainer>
               <IconCircleWrapper>
                  <FaTwitch/>
               </IconCircleWrapper>
            </IconCircleWrapperContainer>
            
            <IconCircleWrapperContainer>
               <IconCircleWrapper>
                  <FaYoutube/>
               </IconCircleWrapper>
            </IconCircleWrapperContainer>                  
         </IconBox>

        <AppInput 
            type='text' 
            placeholder={langContext!.forms.loginForm.placeholders[0]} 
            value={loginCreds.login} 
            onChange={ e => setLoginCreds(prev => ({...prev, login : e.target.value}))}/>

        <AppInput 
            type='password' 
            placeholder={langContext!.forms.loginForm.placeholders[1]}
            onChange={ e => setLoginCreds(prev => ({...prev, pw : e.target.value}) )}/>

        <AppButtonSecondary width='120px' onClick={loginHandler}>
         {langContext?.forms.loginForm.labels[1].loginBtn}
         </AppButtonSecondary>
        <LoginRegisterLink>
            <span>{langContext?.forms.loginForm.labels[2].registerText[0]} </span>
            <Link to='/register'>
               <span>{langContext?.forms.loginForm.labels[2].registerText[1]} </span>
            </Link>
            <span>{langContext?.forms.loginForm.labels[2].registerText[2]} </span>
        </LoginRegisterLink>
      </CardInputContainer>
   </CardWrapper>
   )
 }
 
 export default Index


