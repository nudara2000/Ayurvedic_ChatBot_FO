import React, { useState } from "react";
import "react-chatbot-kit/build/main.css";

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! How can I assist you with Ayurvedic knowledge today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { type: "user", text: input }]);
      setMessages((prev) => [...prev, { type: "bot", text: "That's a great question!" }]); // Placeholder bot response
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chatbot-wrapper">
        <div className="chatbot-header">Ayurvedic Assistant</div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chatbot-message ${msg.type}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotComponent;
