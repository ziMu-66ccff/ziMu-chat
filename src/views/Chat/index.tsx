import { ReactNode, FC, useEffect, useState, useCallback, useRef } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatContainer from './components/chatContainer';
import Contacts from './components/contacts';
import Welcome from './components/welcome';
import WebSocket from 'isomorphic-ws';
import { io, Socket } from 'socket.io-client';
import { ChatWrapper } from './style';

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  'add-user': (username: string) => void;
  'send-message': (data: any) => void;
}

type IProps = {
  children?: ReactNode;
};

const Chat: FC<IProps> = () => {
  const [currentChat, setCurrentChat] = useState<any>();
  const [currentUser, setCurrentUser] = useState<any>();
  const navigate = useNavigate();
  // const socket = useRef<Socket<ServerToClientEvents, ClientToServerEvents>>();
  const wss = useRef<WebSocket>();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo') ?? 'null');

    if (!user) {
      navigate('/login');
      return;
    }
    if (!user.isAvatarImageSet) {
      navigate('/avatar');
      return;
    }
    setCurrentUser(user);
  }, [navigate]);

  useEffect(() => {
    if (currentUser) {
      // socket.current = io('http://localhost:2999');
      // socket.current.emit('add-user', currentUser.username);
      wss.current = new WebSocket('wss://o6r6fe.laf.run/__websocket__');
      wss.current.onopen = () => {
        wss.current?.send(currentUser.username);
      };
    }
  }, [currentUser]);

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
          <ChatContainer
            currentChat={currentChat}
            currentUser={currentUser}
            socket={wss}
          ></ChatContainer>
        ) : (
          <Welcome currentUser={currentUser}></Welcome>
        )}
      </div>
    </ChatWrapper>
  );
};

export default memo(Chat);
