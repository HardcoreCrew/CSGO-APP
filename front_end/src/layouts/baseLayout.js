import React from 'react'
import {Contener, Content, Header, Footer, ContentDisplay, FriendListDisplay } from './baseLayout.styled'
import {Route, Routes } from "react-router-dom";
import FakePage from '../pages/fakePage';
import ChatList from '../components/chat/chatList';
import ChatBoxContainer from '../components/chat/chatBoxContainer';

export default function BaseLayout() {
    return (
        <Contener>
                <Header>
                    HEADER
                </Header>

                <Content>
                    <ContentDisplay>

                        <input type='text' placeholder='name'/><br/>
                        <input type='text' placeholder='room'/><br/>
                        <button>JOIN</button>

                        <Routes>
                            <Route path="/fake" element={<FakePage />} />
                        </Routes>
                    </ContentDisplay>
                    <FriendListDisplay>
                        <ChatList />
                    </FriendListDisplay>
                    <ChatBoxContainer />
                </Content>

                <Footer>
                    FOOTER
                </Footer>            
        </Contener>
    )
}
