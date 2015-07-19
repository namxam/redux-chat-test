import 'core-js/es6/array'; // es6 array polyfill
import React from 'react';

import { createRedux } from 'redux';
import { Provider } from 'redux/react';

import chats from 'reducers/chats'
const redux = createRedux({ chats });

import Chat from 'components/chat/entry';

class App {
  render() {
    return (
      <Provider redux={redux}>
        {() =>
          <Chat />
        }
      </Provider>
    );
  }
}

React.render(<App />, document.getElementById('app'));

// // Setup project
//
// var chats = [
//   { id: 1, name: 'Lobby' },
//   { id: 2, name: 'Important' },
//   { id: 3, name: 'Offtopic' }
// ]
//
// chats.every((chat) => {
//   Action.joinChat(chat);
// })
//
//
//
// var messages = [];
// var chats = [1,2, 3];
// var people = [
//   { id: 1, name: 'Max Mustermann' },
//   { id: 2, name: 'Sabine Musterfrau' },
//   { id: 3, name: 'Peter Lustig' }
// ];
// var templates = [
//   'Lorem ipsum eros dictumst elementum aptent at donec volutpat auctor mattis, curabitur aenean laoreet turpis mollis lacinia nullam rhoncus.',
//   'ermentum cubilia ut vestibulum curae sagittis potenti libero.',
//   'liquet amet ullamcorper convallis vehicula.',
//   'urae vivamus congue pulvinar aliquam aenean dictum class sed volutpat nulla ipsum sit primis.',
//   'emper curabitur consequat felis mauris nunc nibh tortor ad himenaeos rutrum dolor volutpat vitae.',
//   'ondimentum feugiat consequat quam mi lacus ullamcorper mattis posuere, nisi bibendum diam gravida tempus habitasse lectus, ante massa ligula potenti at platea senectus.',
//   'gestas malesuada luctus convallis nullam ad sollicitudin, ultricies at inceptos turpis lacinia, orci sollicitudin lobortis erat sapien donec sociosqu risus nam sagittis vestibulum in.',
//   'usto tortor massa ut nulla sagittis fringilla vel cras metus tincidunt vulputate in.',
//   'ui congue tortor sodales convallis proin, dictumst diam nisl ad volutpat etiam, fringilla malesuada vulputate consectetur.',
//   't libero adipiscing mollis fringilla vel donec hac eros quisque sapien quis id aliquam.',
//   'ccumsan rutrum aliquet sociosqu hendrerit posuere consequat ornare, gravida pretium aenean curabitur egestas duis, dolor dapibus hac scelerisque elit nullam.',
//   'osuere torquent senectus potenti lectus aptent rutrum ante purus.',
//   'ed per potenti dictum maecenas commodo varius donec quisque.',
//   'iam magna risus consequat tellus vulputate tincidunt eget sagittis ligula sagittis scelerisque nisl litora.',
//   'uis rutrum ante hendrerit augue libero lorem dui phasellus praesent integer, ac inceptos at tincidunt condimentum ligula fermentum aliquam conubia.',
//   'isl diam ante condimentum platea mattis libero lacus, fringilla tempor aenean dui vulputate imperdiet nisl, placerat sit conubia luctus sapien at.',
//   'iam sit etiam tortor feugiat primis, luctus cursus et placerat imperdiet, litora nostra odio magna.',
//   'agittis dui hendrerit viverra faucibus integer phasellus cras.',
//   'estibulum fermentum vestibulum ultricies leo volutpat tempus nulla nec mattis.',
//   'onec libero nibh feugiat lacus varius sem, aliquam auctor elit nam sodales laoreet lorem, eu condimentum hac luctus nullam.',
// ]
//
// import Action from 'actions';
// for(let n = 0; n < 1000; n++) {
//   setTimeout(() => {
//     Action.messageReceived({
//       id: n,
//       chat_id: chats[Math.floor(Math.random()*chats.length)],
//       body: templates[Math.floor(Math.random()*templates.length)],
//       sent_at: Date.now(),
//       user: people[Math.floor(Math.random()*people.length)]
//     });
//   }, 200 * n)
// }
