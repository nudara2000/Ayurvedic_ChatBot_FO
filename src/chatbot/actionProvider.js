class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHealthAdvice = () => {
      const message = this.createChatBotMessage(
        'Ayurveda focuses on balancing your doshas for good health. Do you want recommendations for remedies?'
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage('Sorry, I didn’t understand that. Can you rephrase?');
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;