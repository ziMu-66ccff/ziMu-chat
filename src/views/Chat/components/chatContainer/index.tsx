import type { ReactNode, FC } from 'react';
import { memo } from 'react';
import Logout from '@/components/logout';
import { ChatContainerWrapper } from './style';
import ChatInput from './components/chatInput';
import ChatMessage from './components/chatMessage';

type IProps = {
  children?: ReactNode;
  currentChat: any;
};

const ChatContainer: FC<IProps> = ({ currentChat }) => {
  return (
    <>
      {currentChat && (
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
          <ChatMessage></ChatMessage>
          <ChatInput></ChatInput>
        </ChatContainerWrapper>
      )}
    </>
  );
};

export default memo(ChatContainer);
