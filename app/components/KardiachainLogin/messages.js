/*
 * Kardiachain Messages
 *
 * This contains all the text for the Kardiachain components.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.KardiachainLogin';

export default defineMessages({
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Đăng ký thành công!',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Mã ví không hợp lệ!',
  },
});
