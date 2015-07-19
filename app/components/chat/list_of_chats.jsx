import React from 'react';

class ListOfChats extends React.Component {
  selectChat(id) {
    console.log('Change chat selection');
  }

  render() {
    return(
      <div className="chat-list">
        <strong>List of Chats</strong>
        <ol>
          {this.props.chats.map((chat) => {
            let unread;
            if(this.props.unreadCounts[chat.id] > 0) {
              unread = <span className="chat-list__unread">{this.props.unreadCounts[chat.id]}</span>;
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
