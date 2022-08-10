import React, { useEffect, useState } from 'react'
import { ChatFriendList, ChatListItemAvatar, ChatListItemBadge, ChatListItemName, ChatListItemTag } from './chat.styled'
import Chatbox from './chatbox'
import ChatListItem from './chatList_item'
import  {io, Socket } from 'socket.io-client'

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  interface InterServerEvents {
    ping: () => void;
  }
  
  interface SocketData {
    name: string;
    age: number;
  }

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();


export default function ChatList({loginState} : {loginState: boolean}) {
    
    const [isConnected, setIsConnected] = useState(loginState);
    const [connectedPlayers, setConnectedPlayers] = useState([]);
    
    useEffect(() => {
        
        const socket = io("http://localhost:3137")
        
        window.onbeforeunload = function(){socket.emit('isOff')};
        window.addEventListener("beforeunload", (ev) => {   
            ev.preventDefault();
            socket.emit('isOff')
        });

        socket.on('ping', () => {
            socket.emit('pong')
        });


        socket.on('connect', () => {
            setIsConnected(true);
            socket.emit('isOn', JSON.parse(localStorage.getItem("userData") || ""))
        });

        // socket.on('onlinedata', (data) => {
        //     let incData : string[] = data.filter((x:any) => x.id != socket.id)
        //     setConnectedPlayers([...incData])
        //     console.log(data);
        // });
    
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

    const [chatBoxArray, setchatBoxArray] = useState([]) 
    
    return (
        <>
            <ChatFriendList>
                {/* {connectedPlayers?.map(el => <ChatListItem {...el}/> )} */}
            </ChatFriendList>
            {/* {chatBoxArray.map(el => <Chatbox />)} */}
        </>        
    )
}

