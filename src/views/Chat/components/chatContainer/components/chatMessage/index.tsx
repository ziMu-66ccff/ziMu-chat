import type { ReactNode, FC } from 'react';
import { memo } from 'react';
import { ChatMessageWrapper } from './style';

type IProps = {
  children?: ReactNode;
};

const ChatMessage: FC<IProps> = () => {
  return <ChatMessageWrapper>message</ChatMessageWrapper>;
};

export default memo(ChatMessage);
