/*
 * ForgotPasswordPage Messages
 *
 * This contains all the text for the ForgotPasswordPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ForgotPasswordPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Quên mật khẩu',
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
