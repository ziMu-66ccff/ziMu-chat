import zmRequest from '@/service';

export const findAllMessage = (sender: string, receiver: string) => {
  return zmRequest.get({
    url: 'message/getAllMessage',
    params: {
      sender,
      receiver,
    },
  });
};
