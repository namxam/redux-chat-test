import React from 'react';
import { connect } from 'redux/react';
import * as ChatActions from 'actions/chat';

@connect(state => ({ chats: state.chats }))
class ListOfChats extends React.Component {
  constructor(props) {
    super(props);
    this.selectChat = this.selectChat.bind(this);
  }

  selectChat(id) {
    this.props.dispatch(ChatActions.selectChat(id));
  }

  render() {
    console.log('ListOfChats', 'render');
    const {chats, currentChatId} = this.props.chats;
    return(
      <div className="chat-list">
        <strong>List of Chats</strong>
        <ol>
          {chats.map((chat) => {
            let unread;
            if(chat.unread > 0) {
              unread = <span className="chat-list__unread">{chat.unread}</span>;
            }

            return(
              <li key={`chat-${chat.id}`}>
                <a href="#" onClick={this.selectChat.bind(null, chat.id)}>
                  {unread}
                  {chat.name}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    )
  }
}

export default ListOfChats;
