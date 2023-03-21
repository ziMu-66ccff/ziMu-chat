import zmRequest from '..';
import { LoginInfo } from '../type';

export async function getUser(loginInfo: LoginInfo) {
  return await zmRequest.post({
    url: 'user/login',
    data: loginInfo,
  });
}
