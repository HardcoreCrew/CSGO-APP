import styled from 'styled-components'

export const ChatMsgContainer = styled.div`   
    display:flex;
    justify-content: ${(props) => props.owner? 'flex-end' : 'flex-start' };  
    margin-bottom:3px;
    padding: 10px;
`
export const ChatMsgWrapper = styled.div`      
    max-width: 90%;
    padding: 5px;
    background-color: ${(props) => props.owner? ({theme}) => theme.msgBody_self : ({theme}) => theme.msgBody_standard};
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
    background-color: ${({theme}) => theme.msgBody_self};
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