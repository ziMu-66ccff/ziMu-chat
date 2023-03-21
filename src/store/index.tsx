import { atom } from 'recoil';

interface userInfo {
  username: string;
  email: string;
  password: string;
  isAvatarImageSet: boolean;
  avatarImage: string;
}

export const userInfoStore = atom<userInfo>({
  key: 'userInfoStore',
  default: {
    username: '',
    email: '',
    password: '',
    isAvatarImageSet: false,
    avatarImage: '',
  },
});
