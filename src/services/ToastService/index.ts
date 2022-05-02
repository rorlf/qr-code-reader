import Toast, { ToastOptions } from 'react-native-root-toast';
import colors from 'shared/styles/colors';

export function showMessage(message: string, options?: ToastOptions) {
  Toast.show(message, {
    position: Toast.positions.BOTTOM,
    backgroundColor: colors.placeholder,
    ...options
  });
}
