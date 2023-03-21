import { getAllUsers } from '@/service/chat/contacts';
import { handleError } from '@/utils/handleError';
import { toastOptions } from '@/utils/toast';

export async function findAllUsers(username: string) {
  try {
    const { usersData } = await getAllUsers(username);
    return usersData;
  } catch (err) {
    handleError(err, toastOptions);
  }
}
