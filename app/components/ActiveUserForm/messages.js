/*
 * ActiveUserForm Messages
 *
 * This contains all the text for the ActiveUserForm container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.ActiveUserForm';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Kích hoạt tài khoản',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Về trang đăng nhập',
  },
  resend: {
    id: `${scope}.resend`,
    defaultMessage: 'Lấy lại mã kích hoạt',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Đã kích hoạt thành công!',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Mã kích hoạt không hợp lệ!',
  },
  
});
