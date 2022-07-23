import React from 'react'
import {Contener, Content, Header, Footer, ContentDisplay, FriendListDisplay } from './baseLayout.styled'
import {Route, Routes } from "react-router-dom";
import FakePage from '../pages/fakePage';
import ChatList from '../components/chat/chatList';

export default function BaseLayout() {
    return (
        <Contener>
                <Header>
                    HEADER
                </Header>

                <Content>
                    <ContentDisplay>
                        CONTENT
                        <Routes>
                            <Route path="/fake" element={<FakePage />} />
                        </Routes>
                    </ContentDisplay>
                    <FriendListDisplay>
                        <ChatList />
                    </FriendListDisplay>
                </Content>

                <Footer>
                    FOOTER
                </Footer>            
        </Contener>
    )
}
