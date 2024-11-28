import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">Ayurvedic Chatbot</div>
        <div className="sidebar-section">
          <div className="sidebar-title">Main Menu</div>
          <button className="sidebar-item">Home</button>
          <button className="sidebar-item">Chat</button>
          <button className="sidebar-item">Settings</button>
        </div>
      </div>
      <div className="chatbot-wrapper">
        <h1>Welcome to Ayurvedic Chatbot</h1>
        <p>Start chatting to explore Ayurvedic remedies!</p>
        <div className="chatbox">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message here..."
          />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;
