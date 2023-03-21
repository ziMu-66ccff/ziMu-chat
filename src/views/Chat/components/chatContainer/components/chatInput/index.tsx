import { ReactNode, FC, useState } from 'react';
import { memo } from 'react';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { ChatInputWrapper } from './style';

type IProps = {
  children?: ReactNode;
};

const ChatInput: FC<IProps> = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState('');

  const handleEmojiPickerShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
    console.log(showEmojiPicker);
  };
  const handleEmojiClick = (event: MouseEvent, emoji: EmojiClickData) => {
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
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
      <form className="input-container">
        <input
          type="text"
          placeholder="快来输入你要发送的信息叭，小心有人偷看奥0v0"
          value={msg}
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
