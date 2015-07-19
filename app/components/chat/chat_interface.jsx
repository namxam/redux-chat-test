import React from 'react';

class ChatInterface extends React.Component {
  componentWillUpdate() {
    let node = React.findDOMNode(this.refs.messageContainer);
    let scrollDelta = node.scrollHeight - (node.scrollTop + node.clientHeight);
    this.shouldScrollBottom = scrollDelta <= 10;
  }

  scrollToBottom() {
    let node = React.findDOMNode(this.refs.messageContainer);
    window.requestAnimationFrame(() => {
      node.scrollTop = node.scrollHeight
    })
  }

  componentDidUpdate() {
    if(this.shouldScrollBottom) {
      this.scrollToBottom()
    }
  }

  render() {
    return (
      <div className="chat-interface">
        <header>
          <strong>Chat interface:</strong>{' '}
          {this.props.currentChat.name}
        </header>
        <section ref="messageContainer" className="chat-interface__messages">
          <ol>
            {this.props.currentMessages.map((message) => {
              return (
                <li key={`message-${message.id}`} className="chat-interface__message">
                  <em>{message.user.name}</em>
                  <p>{message.body}</p>
                  <small>{message.sent_at.toString()}</small>
                </li>
              )
            })}
          </ol>
        </section>
      </div>
    )
  }
}

export default ChatInterface
