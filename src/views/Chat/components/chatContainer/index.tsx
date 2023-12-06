import { ReactNode, FC, useState, useEffect, useCallback, useRef } from 'react';
import { memo } from 'react';
import Logout from '@/components/logout';
import { ChatContainerWrapper } from './style';
import ChatInput from './components/chatInput';
import { getAllMessage } from '@/store/chat/chatContainer';
import { saveMessage } from '@/store/chat/chatContainer/chatInput';

type IProps = {
  children?: ReactNode;
  currentChat: any;
  currentUser: any;
  socket: any;
};

const ChatContainer: FC<IProps> = ({ currentChat, currentUser, socket }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [arrivalMessage, setArrivalMessage] = useState<any>(null);
  const scrollRef = useRef<any>();

  const initMessages = useCallback(async () => {
    const messages = await getAllMessage(
      currentUser.username,
      currentChat.username,
    );
    setMessages(messages);
  }, [currentChat, currentUser]);

  const handleSendMessage = useCallback(
    async (currentMessage: string) => {
      const messageData = {
        message: currentMessage,
        receiver: currentChat.username,
        sender: currentUser.username,
        users: [currentUser.username, currentChat.username],
      };

      await saveMessage(messageData);
      socket.current?.send(JSON.stringify(messageData));
      // socket.current?.send('hi');
      const currentMessages = [...messages];
      currentMessages.push({ isSelf: true, message: currentMessage });
      setMessages(currentMessages);
    },
    [currentChat.username, currentUser.username, socket, messages],
  );

  useEffect(() => {
    initMessages();
  }, [initMessages]);

  useEffect(() => {
    if (socket.current) {
      socket.current.onmessage = (res: any) => {
        console.log(res.data, 'message');
        setArrivalMessage({ isSelf: false, message: res.data });
      };
    }
  }, [socket]);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
  }, [messages]);

  return (
    <>
      {currentChat && currentUser && (
        <ChatContainerWrapper>
          <div className="chat-header">
            <div className="user-details">
              <div className="avatar">
                <img src={currentChat.avatarImage} alt="avatar" />
              </div>
              <div className="username">
                <h3>{currentChat.username}</h3>
              </div>
            </div>
            <Logout></Logout>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => {
              return (
                <div ref={scrollRef} key={index}>
                  <div
                    className={`message ${
                      message.isSelf ? 'sended' : 'received'
                    }`}
                  >
                    <div className="content">
                      <p>{message.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ChatInput handleSendMessage={handleSendMessage}></ChatInput>
        </ChatContainerWrapper>
      )}
    </>
  );
};

export default memo(ChatContainer);
