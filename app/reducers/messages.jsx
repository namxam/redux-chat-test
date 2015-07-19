const initialState = [{
  id: 1,
  chat_id: 1,
  body: 'Hello world!',
  sent_at: Date.now(),
  user: { id: 1, name: 'Max Mustermann' }
}];

export default function messages(state = initialState, action) {
  switch(action.type) {
    case "ADD_MESSAGE":
      let messages = state;
      messages.push(action.message);
      return messages;
    default:
      return state
  }
}
