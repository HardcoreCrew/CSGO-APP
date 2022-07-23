import React from 'react'
import { ChatCard, ChatMsgContainer, ChatMsgitem, ChatMsgNick, ChatMsgWrapper } from './chat.styled'

export default function ChatMsgElement(data) {
    return (
         <ChatMsgContainer owner={data.self}>
            
            <ChatMsgWrapper owner={data.self}>             
                <ChatMsgitem>{data.msg}</ChatMsgitem>
            </ChatMsgWrapper>
        </ChatMsgContainer>
    )
}
