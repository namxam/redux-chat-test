import React, {Component} from 'react';

import ListOfChats from './list_of_chats';
import ChatInterface from './chat_interface';

class Chat extends Component {
  render() {
    return(
      <div className="chat">
        <ListOfChats />
        <ChatInterface />
      </div>
    );
  }
}
export default Chat
