let initialState = {
  chat: {},
  messages: []
}

export default function currentChat(state = initialState, action) {
  switch(action.type) {
    case 'SELECT_CHAT':
      return { chat: action.chat, messages: action.messages };
    case 'ADD_MESSAGE':
      let {chat, messages} = state;
      if(action.message.chat_id == chat.id) {
        messages.push(action.message);
        return {...state, messages: messages}
      } else {
        return state
      }
    default:
      return state;
  }
}
