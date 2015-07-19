import React, {Component} from 'react';
import { connect } from 'redux/react';


import ListOfChats from './list_of_chats';
import ChatInterface from './chat_interface';

@connect(state => ({ chats: state.chats }))
class Chat extends Component {
  render() {
    let unreadCounts = {};
    let currentChat = {};
    let currentMessages = [{
      id: 1,
      chat_id: 1,
      body: 'Hello world!',
      sent_at: Date.now(),
      user: { id: 1, name: 'Max Mustermann' }
    }];

    const {chats, dispatch} = this.props;
    return(
      <div className="chat">
        <ListOfChats unreadCounts={unreadCounts} chats={chats} />
        <ChatInterface currentChat={currentChat} currentMessages={currentMessages} />
      </div>
    );
  }
}

Chat.propTypes = {
  chats: React.PropTypes.bool,
  dispatch: React.PropTypes.object
}

export default Chat
