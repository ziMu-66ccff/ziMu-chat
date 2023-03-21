import type { ReactNode, FC } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiPowerOff } from 'react-icons/bi';
import { LogoutWrapper } from './style';

type IProps = {
  children?: ReactNode;
};

const Logout: FC<IProps> = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <>
      <LogoutWrapper>
        <div className="btn" onClick={() => handleClick()}>
          <BiPowerOff />
        </div>
      </LogoutWrapper>
    </>
  );
};

export default memo(Logout);
