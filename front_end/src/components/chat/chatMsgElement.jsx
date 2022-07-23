import React from 'react'
import { ChatMsgNick, ChatMsgWrapper } from './chat.styled'

export default function ChatMsgElement(data) {
    return (
        <ChatMsgWrapper owner={data.self}>
            {console.log(data)}
            <ChatMsgNick>
            {data.id}
            </ChatMsgNick>
            {data.msg}
        </ChatMsgWrapper>
    )
}
