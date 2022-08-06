import React from 'react'
import { ChatListItemAvatar, ChatListItemBadge, ChatListItemName, ChatListItemTag, ChatListItemWrapper } from './chat.styled'

export default function ChatListItem({player}) {
    return (
        <ChatListItemWrapper >
            <ChatListItemAvatar/>
            <ChatListItemTag>
                {player.userData[0].userTag} 
            </ChatListItemTag>
            <ChatListItemName>
                {player.userData[0].name}
            </ChatListItemName>
            <ChatListItemBadge>
            {player.userData[0].accLvl}
            </ChatListItemBadge>
        </ChatListItemWrapper>
    )
}
