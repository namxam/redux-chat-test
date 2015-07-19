// ... too, use constants
// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

let initialState = {
  currentChatId: null,
  chats: [
    { id: 1, name: 'Lobby', unread: 0 },
    { id: 2, name: 'Important', unread: 0 },
    { id: 3, name: 'Offtopic', unread: 0 }
  ]
}

export default function chats(state = initialState, action) {
  const {chats, currentChatId} = state;
  // this function returns the new state when an action comes
  switch (action.type) {
  case "JOIN_CHAT":
    chats.push(action.chat);
    return {...state, chats};
  case "LEAVE_CHAT":
    return {...state, chats: chats.filter(chat => chat.id != action.chatId)};
  case "SELECT_CHAT":
    return {currentChatId: action.chat.id, chats: chats.map(chat => {
      if(chat.id == action.chat.id) {
        return {...chat, unread: 0};
      } else {
        return chat;
      }
    })}
  case "ADD_MESSAGE":
    return {...state, chats: chats.map(chat => {
      if(chat.id != currentChatId && chat.id == action.message.chat_id) {
        return {...chat, unread: chat.unread + 1};
      } else {
        return chat;
      }
    })}
  default:
    return state;
  }
}
