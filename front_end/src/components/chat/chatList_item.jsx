import React from 'react'
import { ChatListItemAvatar, ChatListItemBadge, ChatListItemName, ChatListItemTag, ChatListItemWrapper } from './chat.styled'

export default function ChatListItem({player}) {
    return (
        <ChatListItemWrapper >
            <ChatListItemAvatar/>
            <ChatListItemTag>
                [ MOCKED]
            </ChatListItemTag>
            <ChatListItemName>
                {player.name}
            </ChatListItemName>
            <ChatListItemBadge>
                0 
            </ChatListItemBadge>
        </ChatListItemWrapper>
    )
}
