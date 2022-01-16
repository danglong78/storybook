/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AccountPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Tài khoản',
  },
  wallet: {
    id: `${scope}.wallet`,
    defaultMessage: 'Địa chỉ ví: ',
  },
  address: {
    id: `${scope}.address`,
    defaultMessage: 'Địa chỉ: ',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Số điện thoại: ',
  },
});
