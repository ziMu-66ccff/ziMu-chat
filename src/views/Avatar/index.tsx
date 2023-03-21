import { useAvatar } from '@/hooks/avatar';
import { ReactNode, FC, useEffect } from 'react';
import { memo } from 'react';
import { AvatarWrapper } from './style';
import loader from '@/assets/img/loader.gif';
import { useNavigate } from 'react-router-dom';

type IProps = {
  children?: ReactNode;
};

const Avatar: FC<IProps> = () => {
  const {
    avatars,
    isLoading,
    selectedAvatar,
    setSelectedAvatar,
    setProfileAvatar,
  } = useAvatar();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('userInfo')) {
      navigate('/login');
    }
  });

  const handleSubmit = async () => {
    if (await setProfileAvatar()) navigate('/chat');
  };

  return (
    <>
      {isLoading ? (
        <AvatarWrapper>
          <img src={loader} alt="loader" className="loader" />
        </AvatarWrapper>
      ) : (
        <AvatarWrapper>
          <div className="title">
            <h1>我猜你还没有头像吧，那快来选择一个头像叭~</h1>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => {
              return (
                <div
                  key={index}
                  id={`${index}`}
                  className={`avatar ${
                    selectedAvatar === index ? 'selected' : ''
                  }`}
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <button className="submit-btn" onClick={() => handleSubmit()}>
            那么，就选择这个来作为自己的头像叭
          </button>
        </AvatarWrapper>
      )}
    </>
  );
};

export default memo(Avatar);
