export function selectChat(chatId) {
  return (dispatch, getState) => {
    const { chats, messages } = getState();

    dispatch({
      type: 'SELECT_CHAT',
      chat: chats.find(chat => chat.id == chatId),
      messages: messages.filter(message => message.chat_id == chatId)
    })
  };
}
