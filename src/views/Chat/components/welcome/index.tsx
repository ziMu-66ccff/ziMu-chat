import type { ReactNode, FC } from 'react';
import { memo } from 'react';
import { WelcomeWrapper } from './style';
import Robot from '@/assets/img/robot.gif';

type IProps = {
  children?: ReactNode;
  currentUser: any;
};

const Welcome: FC<IProps> = ({ currentUser }) => {
  return (
    <>
      {currentUser && (
        <WelcomeWrapper>
          <img src={Robot} alt="Robot" />
          <h1>
            Welcome, <span>{currentUser.username}</span>
          </h1>
          <h3>快来选择一个好友进行愉快的聊天叭~~~</h3>
        </WelcomeWrapper>
      )}
    </>
  );
};

export default memo(Welcome);
