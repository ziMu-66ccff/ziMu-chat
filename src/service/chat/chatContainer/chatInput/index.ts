import zmRequest from '@/service';
import { MessageData } from '@/service/type';

export const addMessage = (message: MessageData) => {
  return zmRequest.post({
    url: 'message/addMessage',
    data: message,
  });
};
