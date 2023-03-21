import zmRequest from '..';

export function updateAvatar(username: string, avatarImage: string) {
  return zmRequest.post({
    url: `user/updateAvatar/${username}`,
    data: {
      isAvatarImageSet: true,
      avatarImage: avatarImage,
    },
  });
}
