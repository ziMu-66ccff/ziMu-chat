import { findAllMessage } from '@/service/chat/chatContainer';
import { handleError } from '@/utils/handleError';
import { toastOptions } from '@/utils/toast';

export const getAllMessage = async (sender: string, receiver: string) => {
  try {
    const messages = await findAllMessage(sender, receiver);

    return messages;
  } catch (err) {
    handleError(err, toastOptions);
    return false;
  }
};
