import React, { useEffect, useRef, useState } from 'react'
import { ChatBoxContent, ChatBoxMsgBottom, ChatBoxWrapper,  ChatInput, TopBar } from './chat.styled';
import ChatMsgElement from './chatMsgElement';
import { DiSwift } from 'react-icons/di';
import io from 'socket.io-client'


// const socket = io.connect("http://localhost:3137")

export default function Chatbox() {
    
const chatInput = useRef<HTMLInputElement>(null)
const chatContent = useRef<HTMLInputElement>(null)

// const [isConnected, setIsConnected] = useState(socket.connected);
const [msgToSend, setMsgToSend] = useState("");
const [messages, setMessages] = useState<any[]>([])
const [nameVar, setNameVar] = useState("");
    
    
    const scroller = () =>{
        var objDiv = document.getElementById("chatbox");
        objDiv? objDiv.scrollTop = objDiv.scrollHeight : null;
    } 
    
      
       
    const sendMessage = () => {
   setMsgToSend(" ")
        chatInput.current?.focus() 
        setTimeout(() => {
            scroller()
        }, 100);
    }

    const setName = () =>{
        window.sessionStorage.setItem("name", nameVar);
    }

    return (
        <ChatBoxWrapper>
            <TopBar> 
                <button onClick={setName}>x</button>
            </TopBar>
            
            <ChatBoxContent id='chatbox' ref={chatContent}>
                {messages? messages.map(el => <ChatMsgElement {...el}/>) : ' '}
            </ChatBoxContent>
           
        
            <ChatBoxMsgBottom>
                <ChatInput ref={chatInput} type="text" value={msgToSend} onChange={e => setMsgToSend(e.target.value)} autoFocus />
                <button onClick={sendMessage}><DiSwift size={22}/></button>
            </ChatBoxMsgBottom>
   
        </ChatBoxWrapper>
    )
}
