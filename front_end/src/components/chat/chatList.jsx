import React, { useState } from 'react'
import { ChatFriendList, ChatListItemAvatar, ChatListItemBadge, ChatListItemName, ChatListItemTag } from './chat.styled'
import Chatbox from './chatbox'
import ChatListItem from './chatList_item'

export default function ChatList() {

    const mockedPlayers = [{
        id:1,
        tag: 'HC',
        avatarLink: '',
        name: "V0rczu",
        lvl: 1
    },
    {
        id:2,
        tag: 'L3Vy',
        avatarLink: '',
        name: "Konr@d3K",
        lvl: 1
    },
    {
        id:3,
        tag: 'SHyyZ',
        avatarLink: '',
        name: "Konr@d3K",
        lvl: 1
    }]

    const [chatBoxArray, setchatBoxArray] = useState([])

    const onClickDiv = (el) =>{        
        console.log(el);
    }
    
    
    return (
        <>
            <ChatFriendList>
                {mockedPlayers.map(el => <div onClick={() => setchatBoxArray(prev => [...prev, el])}> <ChatListItem {...el}/> </div> )}
            </ChatFriendList>

            {chatBoxArray.map(el => <Chatbox />)}
            
        </>
    )
}

