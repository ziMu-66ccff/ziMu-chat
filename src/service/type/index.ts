export interface UserInfo {
  username: string;
  email: string;
  password: string;
  isAvatarImageSet: boolean;
  avatarImage: string;
}

export interface LoginInfo {
  usernameOrEmail: string;
  password: string;
}
