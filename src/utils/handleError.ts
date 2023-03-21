import { ToastOptions } from 'react-toastify';
import { toast } from 'react-toastify';

export function handleError(err: any, toastOptions: ToastOptions) {
  if (Array.isArray(err.message)) {
    err.message.forEach((errMessage: string) => {
      toast.error(errMessage, toastOptions);
    });
  } else {
    toast.error(err.message, toastOptions);
  }
}
