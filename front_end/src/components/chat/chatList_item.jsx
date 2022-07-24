import React from 'react'
import { ChatListItemAvatar, ChatListItemBadge, ChatListItemName, ChatListItemTag, ChatListItemWrapper } from './chat.styled'

export default function ChatListItem({...player}) {
    return (
        <ChatListItemWrapper >
            <ChatListItemAvatar/>
            <ChatListItemTag>
                [ {player.tag} ]
            </ChatListItemTag>
            <ChatListItemName>
                {player.name}
            </ChatListItemName>
            <ChatListItemBadge>
                {player.lvl} 
            </ChatListItemBadge>
        </ChatListItemWrapper>
    )
}
