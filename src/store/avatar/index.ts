import { updateAvatar } from '@/service/avatar';
import { handleError } from '@/utils/handleError';
import { toastOptions } from '@/utils/toast';
import { toast } from 'react-toastify';

export function saveAvatarUrl(avatarData: any[], many = 4) {
  for (let i = 0; i < many; i++) {
    const avatarUrl = `https://api.multiavatar.com/${Math.round(
      Math.random() * 1000,
    )}.png`;
    avatarData.push(avatarUrl);
  }
}

export async function updateProfileAvatar(
  username: string,
  avatarImage: string,
) {
  try {
    const { userData, message } = await updateAvatar(username, avatarImage);
    localStorage.setItem('userInfo', JSON.stringify(userData));
    toast.success(message, toastOptions);
    return true;
  } catch (err) {
    handleError(err, toastOptions);
    return false;
  }
}
