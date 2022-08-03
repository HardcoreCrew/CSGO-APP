import React, { useState } from 'react'
import {Contener, Content, Footer, ContentDisplay, FriendListDisplay } from './baseLayout.styled'
import {Route, Routes } from "react-router-dom";
import FakePage from '../pages/fakePage';
import ChatList from '../components/chat/chatList';
import ChatBoxContainer from '../components/chat/chatBoxContainer';
import LoginBox from '../components/login_box'
import { AppButton } from '../components/shared/buttons/buttons.styled';
import Header from '../components/header'
import PlayerHeaderPanel from '../components/header/playerPanel'
import { LoginBoxInputContainer } from '../components/login_box/loginBox.styled';
import { AppInput } from '../components/shared/buttons/inputs/inputs.styled';
import {onlineUsers, userData} from '../db'

export default function BaseLayout() {
    const [loginState, setLoginState] = useState(false)
    const [loginData, setloginData] = useState({login: '', pass: ''})
    const [onlineUsers, setonlineUsers] = useState([])

    const loginHandler  = async () => {
        for (const user of userData) {
            if (user.name === loginData.login && user.appPas === loginData.pass) {
                setLoginState(true)
                // axios add user to online list
            }
        }
    }



    return (
        <Contener>
                
                <Header>
                    <PlayerHeaderPanel>
                    {loginState?  
                        <AppButton onClick={() => setLoginState(false)}> LOGOUT </AppButton> :<>
                        <LoginBox> 
                             <LoginBoxInputContainer>
                                <AppInput type='text' placeholder="LOGIN" value={loginData.login} onChange={e => setloginData(prevstate => ({...prevstate, login: e.target.value}) )}/>
                                <AppInput type='password' placeholder="HASŁO" value={loginData.pass} onChange={e => setloginData(prevstate => ({...prevstate, pass: e.target.value}) )}/> 
                            </LoginBoxInputContainer>  

                            <AppButton  onClick={loginHandler}> WBIJAMY!</AppButton>
                        </LoginBox> </>   } 
                    </PlayerHeaderPanel>
                </Header>

                <Content>
                    <ContentDisplay>
                        <Routes>
                            <Route path="/fake" element={<FakePage />} />
                        </Routes>
                    </ContentDisplay>
                    <FriendListDisplay>
                        {loginState ? <ChatList {...loginState}/> : <></>}
                    </FriendListDisplay>
                    <ChatBoxContainer />
                </Content>

                <Footer>
                    FOOTER
                </Footer>     

        </Contener>
    )
}
