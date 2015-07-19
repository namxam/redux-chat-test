import React, {Component} from 'react';

import ListOfChats from './list_of_chats';
import ChatInterface from './chat_interface';

class Chat extends Component {
  render() {
    let unreadCounts = {};
    let chats = [
      { id: 1, name: 'Lobby', last_read: Date.now() },
      { id: 2, name: 'Important', last_read: Date.now() },
      { id: 3, name: 'Offtopic', last_read: Date.now() }
    ];
    let currentChat = chats[0];
    let currentMessages = [{
      id: 1,
      chat_id: chats[0],
      body: 'Hello world!',
      sent_at: Date.now(),
      user: { id: 1, name: 'Max Mustermann' }
    }];
    return(
      <div className="chat">
        <ListOfChats unreadCounts={unreadCounts} chats={chats} />
        <ChatInterface currentChat={currentChat} currentMessages={currentMessages} />
      </div>
    );
  }
}

export default Chat
