import { getUser } from '@/service/login';
import { LoginInfo } from '@/service/type';
import { toast } from 'react-toastify';
import { toastOptions } from '@/utils/toast';
import { handleError } from '@/utils/handleError';

export async function login(loginInfo: LoginInfo) {
  try {
    const { message, userData } = await getUser(loginInfo);
    localStorage.setItem('userInfo', JSON.stringify(userData));
    toast.success(message, toastOptions);
    return true;
  } catch (err: any) {
    handleError(err, toastOptions);
    return false;
  }
}
