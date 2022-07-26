import React, { useState } from 'react'
import {Contener, Content, Header, Footer, ContentDisplay, FriendListDisplay } from './baseLayout.styled'
import {Route, Routes } from "react-router-dom";
import FakePage from '../pages/fakePage';
import ChatList from '../components/chat/chatList';
import ChatBoxContainer from '../components/chat/chatBoxContainer';
import LoginBox from '../components/login_box'
import { AppButton } from '../components/shared/buttons/buttons.styled';

export default function BaseLayout() {
    const [loginState, setLoginState] = useState(false)
    const loginHandler = data =>{
        setLoginState(true)
        console.log(data)
        localStorage.setItem("nickName", data);
    }

    const handleLogout = () =>{
        
    }

    return (
        <Contener>
                {loginState?  <>
                <Header>
                    HEADER
                </Header>

                <Content>
                    <ContentDisplay>
                        <Routes>
                            <Route path="/fake" element={<FakePage />} />
                        </Routes>
                    </ContentDisplay>
                    <FriendListDisplay>
                        <AppButton onClick={() => setLoginState(false)}> LOGOUT </AppButton>
                        <ChatList {...loginState}/>
                    </FriendListDisplay>
                    <ChatBoxContainer />
                </Content>

                <Footer>
                    FOOTER
                </Footer>     </>  :

                <LoginBox getLoginData={logData => loginHandler(logData)}/> }       
        </Contener>
    )
}
