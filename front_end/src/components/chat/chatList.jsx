import React, { useEffect, useState } from 'react'
import { ChatFriendList, ChatListItemAvatar, ChatListItemBadge, ChatListItemName, ChatListItemTag } from './chat.styled'
import Chatbox from './chatbox'
import ChatListItem from './chatList_item'
import io from 'socket.io-client'





export default function ChatList({loginState}) {

    const [isConnected, setIsConnected] = useState(loginState);
    const [connectedPlayers, setConnectedPlayers] = useState([]);
    
    useEffect(() => {

        const socket = io.connect("http://localhost:3137")
        
        window.addEventListener("beforeunload", (ev) => {   
            ev.preventDefault();
            socket.emit('isOff', localStorage.getItem("nickName"))
        });


        socket.on('connect', () => {
            setIsConnected(true);
            socket.emit('isOn', localStorage.getItem("nickName"))
        });

        socket.on('onlinedata', (data) => {
            let incData = data.filter(x => x != socket.id)
            setConnectedPlayers([...incData])
            console.log(data);
        });
    
        socket.on('disconnect', () => {
            setIsConnected(false);          
        });
        
    return () => {
        socket.emit('isOff', localStorage.getItem("nickName"))
        socket.off('connect');
        socket.off('disconnect');
        socket.off('isOff');
        socket.disconnect()
        
    };
    }, []);

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
    
    return (
        <>
            <ChatFriendList>
                {connectedPlayers?.map(el => <div onClick={() => setchatBoxArray(prev => [...prev, el])}> <ChatListItem player={el}/> </div> )}
            </ChatFriendList>

            {chatBoxArray.map(el => <Chatbox />)}
            
        </>
    )
}

