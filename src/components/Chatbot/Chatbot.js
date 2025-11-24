import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'react-chatbot-kit/build/main.css';

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

import './Chatbot.css';

const CustomChatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      {!showChatbot && (
        <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
          <FontAwesomeIcon icon={faComments} className="me-2" />
          Need Help?
        </button>
      )}

      {/* Chat Window */}
      {showChatbot && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>ITRC Assistant</span>
            <button className="close-btn" onClick={toggleChatbot}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="chatbot-content">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomChatbot;