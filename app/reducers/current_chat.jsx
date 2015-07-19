let initialState = {
  chat: {},
  messages: []
}

export default function currentChat(state = initialState, action) {
  switch(action.type) {
    case 'SELECT_CHAT':
      return { chat: action.chat, messages: action.messages };
    case 'ADD_MESSAGE':
      let {messages} = state;
      messages.push(action.message);
      return {...state, messages: messages}
    default:
      return state;
  }
}
