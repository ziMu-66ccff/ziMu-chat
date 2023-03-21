import zmRequest from '..';
import { UserInfo } from '../type';

export async function createUser(userInfo: UserInfo) {
  return await zmRequest.post({ url: 'user/register', data: userInfo });
}
