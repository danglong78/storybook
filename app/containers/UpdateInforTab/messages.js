/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AccountPage.UpdateInfor';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Thay đổi thông tin',
  },
  fullName: {
    id: `${scope}.name`,
    defaultMessage: 'Họ tên',
  },
  telephone: {
    id: `${scope}.telephone`,
    defaultMessage: 'Số điện thoại',
  },
  address: {
    id: `${scope}.address`,
    defaultMessage: 'Địa chỉ',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Lưu',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Cập nhật thất bại!',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Cập nhật thành công!',
  },
});
