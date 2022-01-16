/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Input';

export default defineMessages({
  required: {
    id: `${scope}.required`,
    defaultMessage: 'Vui lòng nhập thông tin!',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email không hợp lệ!',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Số điện thoại không hợp lệ!',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Mật khẩu không đủ mạnh!',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Không hợp lệ!',
  },
  number: {
    id: `${scope}.number`,
    defaultMessage: 'Vui lòng nhập số!',
  },
});
