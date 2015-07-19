// ... too, use constants
// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

let initialState = [
  { id: 1, name: 'Lobby' },
  { id: 2, name: 'Important' },
  { id: 3, name: 'Offtopic' }
]

export default function chats(state = initialState, action) {
  // this function returns the new state when an action comes
  switch (action.type) {
  case "JOIN_CHAT":
    let chats = state
    chats.push(action.chat);
    return chats;
  case "LEAVE_CHAT":
    return state.filter(chat => chat.id != action.chat.id);
  default:
    return state;
  }
}
