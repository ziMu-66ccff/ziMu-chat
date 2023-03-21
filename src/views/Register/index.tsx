import FormUser from '@/components/FormUser';
import { register } from '@/store/register';
import { accountInfoValidation } from '@/utils/accountInfoValidation';
import {
  ReactNode,
  FC,
  FormEvent,
  useState,
  ChangeEvent,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterWrapper } from './style';

type IProps = {
  children?: ReactNode;
};

const Register: FC<IProps> = () => {
  const [accountInfo, setAccountInfo] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    isAvatarImageSet: false,
    avatarImage: '',
  });
  const inputList = useMemo(
    () => [
      {
        type: 'text',
        placeholder: 'Username',
        name: 'username',
        require: true,
      },
      {
        type: 'email',
        placeholder: 'Email',
        name: 'email',
        require: true,
      },
      {
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        require: true,
      },
      {
        type: 'password',
        placeholder: 'Confirm Password',
        name: 'confirmPassword',
        require: true,
      },
    ],
    [],
  );
  const navigate = useNavigate();

  const accountInfoRef = useRef<typeof accountInfo>();
  accountInfoRef.current = accountInfo;

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (accountInfoValidation(accountInfoRef.current!)) {
        const result = await register(accountInfoRef.current!);
        if (result) {
          navigate('/avatar');
        }
      }
    },
    [navigate],
  );
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setAccountInfo({
      ...accountInfoRef.current!,
      [event.target.name]: event.target.value,
    });
  }, []);

  return (
    <RegisterWrapper>
      <FormUser
        title="ziMuChat"
        inputItems={inputList}
        submitPlaceholder="Create User"
        bottomHint="啊咧，已经有账号了？"
        linkTo="/login"
        linkHint="那么点我登录叭0v0"
        handleChange={handleChange}
        handleForm={handleSubmit}
      ></FormUser>
    </RegisterWrapper>
  );
};

export default memo(Register);
