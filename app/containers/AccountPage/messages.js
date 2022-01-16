/*
 * AccountPage Messages
 *
 * This contains all the text for the AccountPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AccountPage';

export default defineMessages({
  userAccount: {
    id: `${scope}.userAccount`,
    defaultMessage: 'Tài khoản',
  },
  updateInformation: {
    id: `${scope}.updateInformation`,
    defaultMessage: 'Thông tin tài khoản',
  },
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: 'Đổi mật khẩu',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Đăng xuất',
  },
  notMember: {
    id: `${scope}.notMember`,
    defaultMessage: 'Chưa là thành viên',
  },
});
