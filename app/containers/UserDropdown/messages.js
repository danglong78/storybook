import { defineMessages } from 'react-intl';

export const scope = 'app.components.Dropdown';

export default defineMessages({
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Đăng xuất',
  },
  account: {
    id: `${scope}.account`,
    defaultMessage: 'Tài khoản',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Đăng nhập',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Đăng ký',
  },
});
