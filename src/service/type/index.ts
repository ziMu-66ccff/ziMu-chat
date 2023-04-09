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

export interface MessageData {
  message: string;
  receiver: string;
  sender: string;
}
