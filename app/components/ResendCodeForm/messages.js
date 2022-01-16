/*
 * ResendCodeForm Messages
 *
 * This contains all the text for the ResendCodeForm container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.ResendCodeForm';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Gửi lại mã xác thực',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Gửi đi',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Đã gửi email thành công!',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Email không tồn tại!',
  },
});
