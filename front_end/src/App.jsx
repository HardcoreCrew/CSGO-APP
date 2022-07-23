import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import './App.css';

const socket = io.connect("http://localhost:3137")

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [msgToSend, setMsgToSend] = useState();
  const [messages, setMessages] = useState([]);

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
    <div className="App">
      <input placeholder='tekst...' onChange={e => setMsgToSend(e.target.value)} />
      <button onClick={sendMessage} >SEND</button><br/>
      {messages? messages.map(el => <div>{el.id} - {el.msg} </div>) : 'DUPA'}
    </div>
  );
}

export default App;
