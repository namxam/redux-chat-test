import React, {Component} from 'react';
import { connect } from 'redux/react';


import ListOfChats from './list_of_chats';
import ChatInterface from './chat_interface';

@connect(state => ({ chats: state.chats, currentChat: state.currentChat }))
class Chat extends Component {
  render() {
    let unreadCounts = {};
    const {chats, currentChat, dispatch} = this.props;
    return(
      <div className="chat">
        <ListOfChats unreadCounts={unreadCounts} chats={chats} dispatch={dispatch} />
        <ChatInterface currentChat={currentChat.chat} currentMessages={currentChat.messages} />
      </div>
    );
  }
}

Chat.propTypes = {
  chats: React.PropTypes.bool,
  dispatch: React.PropTypes.object
}

export default Chat
