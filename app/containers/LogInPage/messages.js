/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Xin chào!',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Mật khẩu',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Đăng nhập',
  },
  forgot: {
    id: `${scope}.forgot`,
    defaultMessage: 'Bạn đã quên mật khẩu?',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Email hoặc mật khẩu không chính xác!',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Đăng nhập thành công!',
  },
  errorUser: {
    id: `${scope}.errorUser`,
    defaultMessage: 'Tài khoản chưa kích hoạt!',
  },
  resendActive: {
    id: `${scope}.resendActive`,
    defaultMessage: 'Gửi lại mã xác nhận',
  },
  resendSuccess: {
    id: `${scope}.resendSuccess`,
    defaultMessage: 'Gửi lại mã xác nhận thành công!',
  },
  resendError: {
    id: `${scope}.resendError`,
    defaultMessage: 'Email không tồn tại trong hệ thống!',
  },
});
