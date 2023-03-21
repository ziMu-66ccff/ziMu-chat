import FormUser from '@/components/FormUser';
import { login } from '@/store/login';
import {
  ReactNode,
  FC,
  FormEvent,
  useState,
  ChangeEvent,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginWrapper } from './style';

type IProps = {
  children?: ReactNode;
};

const Login: FC<IProps> = () => {
  const [loginInfo, setLoginInfo] = useState({
    usernameOrEmail: '',
    password: '',
  });
  const inputList = useMemo(
    () => [
      {
        type: 'text',
        placeholder: 'Username or Email',
        name: 'usernameOrEmail',
        required: true,
      },
      {
        type: 'password',
        placeholder: 'password',
        name: 'password',
        required: true,
      },
    ],
    [],
  );

  const navigate = useNavigate();
  const loginInfoRef = useRef<typeof loginInfo>();
  loginInfoRef.current = loginInfo;

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const result = await login(loginInfoRef.current!);
      if (result) {
        navigate('/chat');
      }
    },
    [navigate],
  );
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfoRef.current!,
      [event.target.name]: event.target.value,
    });
  }, []);

  return (
    <LoginWrapper>
      <FormUser
        title="ziMuChat"
        inputItems={inputList}
        submitPlaceholder="Login"
        bottomHint="啊咧，还没有账号吗？"
        linkTo="/register"
        linkHint="那点我去注册叭0v0"
        handleChange={handleChange}
        handleForm={handleSubmit}
      ></FormUser>
    </LoginWrapper>
  );
};

export default memo(Login);
