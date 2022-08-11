import React, { useState } from 'react'
import {Contener, Content, Footer, ContentDisplay, FriendListDisplay, Header } from './baseLayout.styled'
import {Route, Routes } from "react-router-dom";
import FakePage from '../pages/fakePage';
import ChatList from '../components/chat/chatList';
import ChatBoxContainer from '../components/chat/chatBoxContainer';
import HeaderContent from '../components/header'


import PlayerHeaderPanel from '../components/header/playerPanel'
import {userBaseData, userData} from '../db'


export default function BaseLayout() {
    const [loginState, setLoginState] = useState(false)
    const [loginData, setloginData] = useState({login: '', pass: ''})
    const [onlineUsers, setonlineUsers] = useState([])

    const loginHandler  = async () => {
        for (const user of userData) {
            if (user.name === loginData.login && user.appPas === loginData.pass) {
                setLoginState(true)
                // axios get user profile data
                // add to userData context ??
                const user = userBaseData.filter(x => x.name === loginData.login)
                console.log(user);
                localStorage.setItem("userData", JSON.stringify(user));
            }
        }
    }



    return (
        <Contener>               
                <Header>
                    <HeaderContent/>
                </Header>

                <Content>
                    <ContentDisplay>
                        <Routes>
                            <Route path="/fake" element={<FakePage />} />
                        </Routes>
                    </ContentDisplay>
                    <FriendListDisplay>
                        {loginState ? <ChatList {...loginState}/> : <> NO</>}
                    </FriendListDisplay>
                    <ChatBoxContainer />
                </Content>

                <Footer>
                    aasdasdasd
                </Footer>    
                
        </Contener>
    )
}
