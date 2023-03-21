import { createUser } from '@/service/register';
import { UserInfo } from '@/service/type';
import { handleError } from '@/utils/handleError';
import { toastOptions } from '@/utils/toast';
import { toast } from 'react-toastify';

export async function register(userInfo: UserInfo) {
  try {
    const { message, userData } = await createUser(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(userData));
    toast.success(message, toastOptions);
    return true;
  } catch (err: any) {
    handleError(err, toastOptions);
    return false;
  }
}
