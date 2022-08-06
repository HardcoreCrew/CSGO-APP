import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppButton, AppButtonSecondary } from '../shared/buttons/buttons.styled'
import { AppInput } from '../shared/buttons/inputs/inputs.styled'
import { IconBox, LoginBoxInputContainer, LoginBoxWrapper, LoginRegisterLink, TitleLogin } from './loginBox.styled'
import { FaTwitter, FaTwitch,FaYoutube } from 'react-icons/fa';
import { IconCircleWrapper, IconCircleWrapperContainer } from '../shared/icons/iconsWrappers.styled'
import { OrangeText } from '../../styles/layout.styled'

export default function Index({children}) {



    return (
            <LoginBoxWrapper>         
               <LoginBoxInputContainer>
                  <TitleLogin>
                  Witaj na stronie <OrangeText>YELLOW DUCK</OrangeText> GAME LEAGUE
                  </TitleLogin>
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
                 <AppInput type='text' placeholder='Login...'/>
                 <AppInput type='password' placeholder='Hasło...'/>
                 <AppButtonSecondary>LOGOWANIE</AppButtonSecondary>
                 <LoginRegisterLink>
                    Nie posiadasz konta? <Link to='/rejestracja'>Zarejestruj</Link> się!
                 </LoginRegisterLink>
               </LoginBoxInputContainer>
            </LoginBoxWrapper>
    )
}
