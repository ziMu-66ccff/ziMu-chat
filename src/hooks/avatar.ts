import { saveAvatarUrl, updateProfileAvatar } from '@/store/avatar';
import { toastOptions } from '@/utils/toast';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function useAvatar() {
  const [avatars, setAvatars] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(9999);
  useEffect(() => {
    initAvatar();
  }, []);

  const initAvatar = () => {
    const data: any[] = [];
    saveAvatarUrl(data);
    setAvatars(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const setProfileAvatar = async () => {
    if (selectedAvatar === 9999) { 
      toast.error('啊咧，你不选择一个头像吗？', toastOptions);
      return;
    }
    const { username } = JSON.parse(localStorage.getItem('userInfo')!);
    const result = await updateProfileAvatar(username, avatars[selectedAvatar]);
    return result;
  };

  return {
    avatars,
    isLoading,
    selectedAvatar,
    setSelectedAvatar,
    setProfileAvatar,
  };
}
