import { addMessage } from '@/service/chat/chatContainer/chatInput';
import { MessageData } from '@/service/type';
import { handleError } from '@/utils/handleError';
import { toastOptions } from '@/utils/toast';

export const saveMessage = async (messageData: MessageData) => {
  try {
    await addMessage(messageData);
    return true;
  } catch (err) {
    handleError(err, toastOptions);
    return false;
  }
};
