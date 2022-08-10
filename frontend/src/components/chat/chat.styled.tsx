import styled from 'styled-components'

interface Props {
    owner: string;
  }



export const ChatMsgContainer = styled.div<Props>`   
    display:flex;
    justify-content: ${(props) => props.owner? 'flex-end' : 'flex-start' };  
    margin-bottom:3px;
    padding: 10px;
`
export const ChatMsgWrapper = styled.div<Props>`      
    max-width: 90%;
    padding: 5px;
    background-color: ${(props) => props.owner? props => props.theme.colors.baseColor: props => props.theme.colors.baseColor_active};
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    `
export const ChatMsgNick = styled.div`      
    font-size: 16px;
`
export const ChatMsgitem = styled.div`      
    font-size: 16px;
`

export const ChatCard = styled.div`      
    font-size: 20px;
    height: 24px;
    width: 100%;
    background-color: ${props => props.theme.colors.baseColor};
`

export const ChatBoxWrapper = styled.div`      
    position: absolute;
    content: '';
    bottom: 60px;
    right: 140px;
    width: 360px;
    height: 300px;
    background-color: #222;
`

export const ChatBoxContent = styled.div`      
    width: 100%;
    height: 265px;   
    overflow: scroll;
    overflow-x: hidden;
    
    
    
    scroll-margin-top: 10px;
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`

export const ChatBoxMsgBottom = styled.div`      
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ChatInput = styled.input`      
    width: 85%;
    height: 26px;
`

export const ChatFriendList = styled.div`      
    width: 280px;
    height: 70vh;
    padding: 10px;
`

export const ChatListItemWrapper = styled.div`      
    width: 100%;
    height: 40px;
    background-color: #111;
    border: 1px solid #777;
    margin-bottom: 3px;
    transition: .3s;
    padding: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 5px;

    &:hover{
        background-color: #222;
        cursor: pointer;
    }
`

export const ChatListItemAvatar = styled.div`   
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #999;
    margin-right: 10px;
`   

export const ChatListItemTag = styled.div`   
    font-size: 16px;
    margin-right: 3px;
    max-width: 20%;
`   

export const ChatListItemName = styled.div`   
    font-size: 16px;
    max-width: 50%;
    margin-right: 8px;
`   

export const ChatListItemBadge = styled.div`   
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
`  

export const ChatBoxContainerWrapper = styled.div`   
    width: 800px;
    height: 25px;
    border-radius: 50%;
    background-color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
`   

export const TopBar = styled.div`   
    width: 100%;
    height: 25px;
    background-color: ${props => props.theme.colors.baseColor};
    display: flex;
    align-items: center;
    justify-content: flex-end;
`   
