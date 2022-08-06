import React, { useEffect, useRef, useState } from 'react'
import { ChatBoxContent, ChatBoxMsgBottom, ChatBoxWrapper,  ChatInput, TopBar } from './chat.styled';
import ChatMsgElement from './chatMsgElement';
import { DiSwift } from 'react-icons/di';
import io from 'socket.io-client'


// const socket = io.connect("http://localhost:3137")

export default function Chatbox() {
    
const chatInput = useRef()
const chatContent = useRef()

// const [isConnected, setIsConnected] = useState(socket.connected);
const [msgToSend, setMsgToSend] = useState();
const [messages, setMessages] = useState([]);
const [nameVar, setNameVar] = useState();


    // useEffect(() => {
    //     socket.on('connect', () => {
    //       setIsConnected(true);
    //     });
    
    //     socket.on('disconnect', () => {
    //       setIsConnected(false);
    //     });
    
    //     socket.on('new_message', (data) => {
    //       console.log(data);
    //       setMessages(messages? prevMessages => [...prevMessages, data] : data);
    //       scroller()
    //     });
        
    //     return () => {
    //         socket.off('connect');
    //         socket.off('disconnect');
    //         socket.off('new_message');
    //     };
    // }, []);
    
    
    const scroller = () =>{
        var objDiv = document.getElementById("chatbox");
        objDiv.scrollTop = objDiv.scrollHeight;
    } 
    
      
       
    const sendMessage = () => {
        // socket.emit('message', {id: socket.id, msg: msgToSend, self: false, name: window.sessionStorage.getItem("name")});
        // setMessages(messages? prevMessages => [...prevMessages, {id: socket.id, msg: msgToSend, self: true, name: window.sessionStorage.getItem("name")}] : {id: socket.id, msg: msgToSend, self: true, name: window.sessionStorage.getItem("name")});
        setMsgToSend('')
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
