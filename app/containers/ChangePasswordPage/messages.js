/*
 * ChangePasswordPage Messages
 *
 * This contains all the text for the ChangePasswordPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ChangePasswordPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Quên mật khẩu',
  },
  newpassword: {
    id: `${scope}.newpassword`,
    defaultMessage: 'Mật khẩu mới',
  },
  token: {
    id: `${scope}.token`,
    defaultMessage: 'Token',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Lưu thay đổi',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Token không chính xác!',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Đã đổi mật khẩu thành công!',
  },
});
