import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import {langPl, langEn} from './utils/langs.js'
import {LangContext} from './context/langContext.js'
import {ThemeProvider} from 'styled-components'
import { lightTheme, darkTheme} from './styles/themes.js'
import GlobalCSS from './styles/global.styled.js'

const socket = io.connect("http://localhost:3137")

function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [msgToSend, setMsgToSend] = useState();
  const [messages, setMessages] = useState([]);
  const [themeState, setThemeState] = useState('dark')
  const [languageState, setLanguageState] = useState('pl')
  
  const handleTheme = () =>{
    themeState === 'light' ? setThemeState('dark') : setThemeState('light')
  }
  
  const handleLanguage = () =>{
    languageState === 'pl' ? setLanguageState('en') : setLanguageState('pl')
  }

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
    });

    socket.on('new_message', (data) => {
      console.log(data);
      setMessages(messages? prevMessages => [...prevMessages, data] : data);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('new_message');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }

  const sendMessage = () => {
    socket.emit('message', {id: socket.id, msg: msgToSend});
  }

  
  return ( 
    <LangContext.Provider value={languageState ==='pl'? langPl : langEn}>
    <ThemeProvider theme={themeState ==='light'? lightTheme : darkTheme}>
    <GlobalCSS />
      <div className="App">
        <label >SEND MSG: </label>
        <input type="text" />
        <button>SEND</button>
      </div>
    </ThemeProvider> 

    </LangContext.Provider>
  );
}

export default App;
