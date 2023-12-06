import zmRequest from '@/service';

export function getAllUsers(username: string) {
  return zmRequest.get({
    url: `user/findAllUsers`,
    params: {
      username,
    },
  });
}
