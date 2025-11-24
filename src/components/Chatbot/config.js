import { createChatBotMessage } from 'react-chatbot-kit';
import {
  Options,
  FacilitiesInfo,
  ServicesInfo,
  ContactInfo,
  OperatingHours,
  TechnicalSupport
} from './Widgets';

const config = {
  initialMessages: [createChatBotMessage(`Hello! Welcome to ITRC FMSC. How can I help you today?`, {
    widget: 'options'
  })],
  botName: 'ITRC Assistant',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1a365d',
    },
    chatButton: {
      backgroundColor: '#d4af37',
    },
  },
  // Remove customComponents entirely or keep it without header
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: 'facilities',
      widgetFunc: (props) => <FacilitiesInfo {...props} />,
    },
    {
      widgetName: 'services',
      widgetFunc: (props) => <ServicesInfo {...props} />,
    },
    {
      widgetName: 'contact',
      widgetFunc: (props) => <ContactInfo {...props} />,
    },
    {
      widgetName: 'hours',
      widgetFunc: (props) => <OperatingHours {...props} />,
    },
    {
      widgetName: 'support',
      widgetFunc: (props) => <TechnicalSupport {...props} />,
    }
  ],
};

export default config;