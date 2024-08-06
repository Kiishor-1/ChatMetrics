import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, sendMessage } from '../../store/messageSlice';
import { fetchCommunity } from '../../store/communitySlice';
import './UserChat.css';

const UserChat = ({ communityId, userId }) => {
  const dispatch = useDispatch();
  
  const messagesState = useSelector((state) => state.messages);
  const communityState = useSelector((state) => state.community);

  const messages = messagesState?.messages || [];
  const status = messagesState?.status || 'idle';
  const error = messagesState?.error || null;

  const community = communityState?.community || {};
  const communityName = community?.name || 'Community';

  const [messageContent, setMessageContent] = useState('');

  useEffect(() => {
    if (communityId) {
      dispatch(fetchMessages(communityId));
      dispatch(fetchCommunity(communityId));
    }
  }, [dispatch, communityId]);

  const handleSendMessage = () => {
    if (messageContent.trim()) {
      dispatch(sendMessage({ communityId, userId, content: messageContent }));
      setMessageContent('');
    }
  };

  // Helper function to format dates
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  // Helper function to format times
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>{communityName ? communityName : "Group Chat"}</h2>
      </div>
      <div className="chat-content">
        {messages.length > 0 ? (
          messages.map((message, index) => {
            const messageDate = formatDate(message.timestamp);
            const previousMessageDate = index > 0 ? formatDate(messages[index - 1].timestamp) : null;
            const isNewDate = messageDate !== previousMessageDate;

            return (
              <div key={message._id}>
                {isNewDate && (
                  <div className="chat-date">
                    {messageDate}
                  </div>
                )}
                <div className="chat-message">
                  <span className="username">{message.sender?.username}</span>
                  <p className="message">{message.content}</p>
                  <span className="timestamp">{formatTime(message.timestamp)}</span>
                </div>
              </div>
            );
          })
        ) : (
          <div>No messages</div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default UserChat;























// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMessages, sendMessage } from '../../store/messageSlice';
// import { fetchCommunity } from '../../store/communitySlice';
// import './UserChat.css'; // Additional styles for message input

// const UserChat = ({ communityId, userId }) => {
//   const dispatch = useDispatch();
  
//   // Use optional chaining and provide default values
//   const messagesState = useSelector((state) => state.messages);
//   const communityState = useSelector((state)=>state.community);

//   const messages = messagesState?.messages || [];
//   const status = messagesState?.status || 'idle';
//   const error = messagesState?.error || null;

//   const community = communityState?.community || {};
//   const communityName = community?.name || 'Community';

//   const [messageContent, setMessageContent] = useState('');

//   useEffect(() => {
//     if (communityId) {
//       dispatch(fetchMessages(communityId));
//       dispatch(fetchCommunity(communityId));
//     }
//   }, [dispatch, communityId]);

//   const handleSendMessage = () => {
//     if (messageContent.trim()) {
//       dispatch(sendMessage({ communityId, userId, content: messageContent }));
//       setMessageContent('');
//     }
//   };

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="chat-container">
//       <div className="chat-header">
//         <h2>{communityName?communityName:"Group Chat"}</h2>
//       </div>
//       <div className="chat-content">
//         {messages.length > 0 ? (
//           messages.map((message) => (
//             <div key={message._id} className="chat-message">
//               <span className="username">{message.sender?.username}</span>
//               <p className="message">{message.content}</p>
//               <span className="timestamp">{new Date(message.timestamp).toLocaleTimeString()}</span>
//             </div>
//           ))
//         ) : (
//           <div>No messages</div>
//         )}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           value={messageContent}
//           onChange={(e) => setMessageContent(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default UserChat;