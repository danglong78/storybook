/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.RegisterPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Xin chào!',
  },
  firstname: {
    id: `${scope}.firstname`,
    defaultMessage: 'Tên',
  },
  lastname: {
    id: `${scope}.lastname`,
    defaultMessage: 'Họ',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Mật khẩu',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Đăng ký',
  },
  help: {
    id: `${scope}.help`,
    defaultMessage: 'Hướng dẫn đăng ký làm tác giả',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Email đã tồn tại!',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Đăng ký thành công!',
  },
});
