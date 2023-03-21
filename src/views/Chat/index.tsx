import { ReactNode, FC, useEffect, useState, useCallback } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatContainer from './components/chatContainer';
import Contacts from './components/contacts';
import Welcome from './components/welcome';
import { ChatWrapper } from './style';

type IProps = {
  children?: ReactNode;
};

const Chat: FC<IProps> = () => {
  const [currentChat, setCurrentChat] = useState<any>();
  const [currentUser, setCurrentUser] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo') ?? 'null');

    if (!user) {
      navigate('/login');
    }
    if (!user.isAvatarImageSet) {
      navigate('/avatar');
    }
    setCurrentUser(user);
  }, [navigate]);

  const handleChangeChat = useCallback(
    (Chat: any) => {
      setCurrentChat(Chat);
    },
    [setCurrentChat],
  );

  return (
    <ChatWrapper>
      <div className="container">
        <Contacts
          currentUser={currentUser}
          handleChangeChat={handleChangeChat}
        ></Contacts>
        {currentChat ? (
          <ChatContainer currentChat={currentChat}></ChatContainer>
        ) : (
          <Welcome currentUser={currentUser}></Welcome>
        )}
      </div>
    </ChatWrapper>
  );
};

export default memo(Chat);
