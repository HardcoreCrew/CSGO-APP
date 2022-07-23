import styled from 'styled-components'

export const ChatMsgWrapper = styled.div`      
    width: 100%;
    min-height: 40px;
    background-color: ${(props) => props.owner? ({theme}) => theme.msgBody_self : ({theme}) => theme.msgBody_standard};
`
export const ChatMsgNick = styled.div`      
    width: 100%;
    display:flex;
    justify-content: flex-end;
    align-items: flex-end;
`

export const ChatBoxWrapper = styled.div`      
    position: absolute;
    content: '';
    bottom: 0;
    right: 100px;
    width: 260px;
    height: 300px;
    background-color: #222;
    padding: 5px;
`

export const ChatBoxContent = styled.div`      
    width: 100%;
    height: 265px;   
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
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