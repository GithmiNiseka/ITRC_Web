import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleHello = () => {
    const message = this.createChatBotMessage("Hello! Welcome to ITRC. I'm here to help you with:", {
      widget: 'options'
    });
    this.updateChatbotState(message);
  };

  handleFacilities = () => {
    const message = this.createChatBotMessage("Here's information about our ITRC facilities:", {
      widget: 'facilities'
    });
    this.updateChatbotState(message);
  };

  handleServices = () => {
    const message = this.createChatBotMessage("Here are our student services:", {
      widget: 'services'
    });
    this.updateChatbotState(message);
  };

  handleContact = () => {
    const message = this.createChatBotMessage("Here's how to contact ITRC:", {
      widget: 'contact'
    });
    this.updateChatbotState(message);
  };

  handleHours = () => {
    const message = this.createChatBotMessage("Our operating hours:", {
      widget: 'hours'
    });
    this.updateChatbotState(message);
  };

  handleSupport = () => {
    const message = this.createChatBotMessage("Technical support information:", {
      widget: 'support'
    });
    this.updateChatbotState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("I'm not sure I understand. You can ask me about:", {
      widget: 'options'
    });
    this.updateChatbotState(message);
  };

  updateChatbotState = (message) => {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  };
}

export default ActionProvider;