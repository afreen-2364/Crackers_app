// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server's URL

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup the socket listener on component unmount
    return () => {
      socket.off('message');
    };
  }, []);

  const handleSendMessage = () => {
    if (input) {
      socket.emit('sendMessage', input); // Send message to server
      setInput('');
    }
  };

  return (
    <div>
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
