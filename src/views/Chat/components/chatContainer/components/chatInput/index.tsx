import { ReactNode, FC, useState, FormEvent } from 'react';
import { memo } from 'react';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { ChatInputWrapper } from './style';

type IProps = {
  children?: ReactNode;
  handleSendMessage: (currentMessage: string) => any;
};

const ChatInput: FC<IProps> = ({ handleSendMessage }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [currentMessage, setMsg] = useState('');

  const handleEmojiPickerShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const handleEmojiClick = (event: MouseEvent, emoji: EmojiClickData) => {
    let message = currentMessage;
    message += emoji.emoji;
    setMsg(message);
  };

  const sendChat = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentMessage.length > 0) {
      handleSendMessage(currentMessage);
      setMsg('');
    }
  };

  return (
    <ChatInputWrapper>
      <div className="btn-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={() => handleEmojiPickerShow()} />
          {showEmojiPicker && (
            <Picker
              onEmojiClick={(emoji, event) => handleEmojiClick(event, emoji)}
            />
          )}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          placeholder="快来输入你要发送的信息叭，小心有人偷看奥0v0"
          value={currentMessage}
          onChange={(event) => setMsg(event.target.value)}
        />
        <button className="submit">
          <IoMdSend></IoMdSend>
        </button>
      </form>
    </ChatInputWrapper>
  );
};

export default memo(ChatInput);
