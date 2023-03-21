import { toast } from 'react-toastify';
import { isEmail } from './isEmail';
import { toastOptions } from './toast';

type accountInfo = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
};

export const accountInfoValidation = (accountInfo: accountInfo) => {
  const { username, password, confirmPassword, email } = accountInfo;

  if (password !== confirmPassword) {
    toast.error(
      '好家伙，你两次输入的密码不一样呀，还不自己瞅瞅？',
      toastOptions,
    );

    return false;
  }
  if (!isEmail(email)) {
    toast.error('你邮箱貌似输入错了呢', toastOptions);
    return false;
  }

  if (Number(username[0]) >= 0 && Number(username[0]) <= 9) {
    toast.error('用户名不可以以数字开头奥', toastOptions);
    console.log(666);

    return false;
  }
  if (username.length > 16) {
    toast.error('用户名最多只能有16个字符奥', toastOptions);
    return false;
  }
  return true;
};
