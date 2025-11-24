class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
      this.actionProvider.handleHello();
    }
    else if (lowerCaseMessage.includes('facility') || lowerCaseMessage.includes('lab') || lowerCaseMessage.includes('computer') || lowerCaseMessage.includes('building')) {
      this.actionProvider.handleFacilities();
    }
    else if (lowerCaseMessage.includes('service') || lowerCaseMessage.includes('equipment') || lowerCaseMessage.includes('tool')) {
      this.actionProvider.handleServices();
    }
    else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('email') || lowerCaseMessage.includes('phone') || lowerCaseMessage.includes('call')) {
      this.actionProvider.handleContact();
    }
    else if (lowerCaseMessage.includes('hour') || lowerCaseMessage.includes('time') || lowerCaseMessage.includes('open') || lowerCaseMessage.includes('close')) {
      this.actionProvider.handleHours();
    }
    else if (lowerCaseMessage.includes('technical') || lowerCaseMessage.includes('problem') || lowerCaseMessage.includes('issue') || lowerCaseMessage.includes('error')) {
      this.actionProvider.handleSupport();
    }
    else if (lowerCaseMessage.includes('emergency') || lowerCaseMessage.includes('urgent') || lowerCaseMessage.includes('critical')) {
      this.actionProvider.handleEmergency();
    }
    else if (lowerCaseMessage.includes('book') || lowerCaseMessage.includes('reservation') || lowerCaseMessage.includes('room')) {
      this.actionProvider.handleBooking();
    }
    else if (lowerCaseMessage.includes('feedback') || lowerCaseMessage.includes('suggestion') || lowerCaseMessage.includes('complaint')) {
      this.actionProvider.handleFeedback();
    }
    else if (lowerCaseMessage.includes('thank')) {
      this.actionProvider.handleThanks();
    }
    else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;