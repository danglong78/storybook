/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.error';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Đã có lỗi xảy ra.',
  },
  close: {
    id: `${scope}.close`,
    defaultMessage: 'Đóng',
  },
  desc: {
    id: `${scope}.desc`,
    defaultMessage: 'Vui lòng quay lại và thử lại',
  },
  DEFAULT: {
    id: `${scope}.DEFAULT`,
    defaultMessage: 'Đã phát sinh lỗi.',
  },
  PARAMETERS_ERROR: {
    id: `${scope}.PARAMETERS_ERROR`,
    defaultMessage: 'Dữ liệu nhập vào không đúng.',
  },
  ACTIVE_CODE_INVALID: {
    id: `${scope}.ACTIVE_CODE_INVALID`,
    defaultMessage: 'Mã kích hoạt không đúng.',
  },
  EMAIL_NOT_EXISTS: {
    id: `${scope}.EMAIL_NOT_EXISTS`,
    defaultMessage: 'Email không tồn tại.',
  },
  EMAIL_EXISTS: {
    id: `${scope}.EMAIL_EXISTS`,
    defaultMessage: 'Email đã tồn tại.',
  },
  USER_NOT_ACTIVE: {
    id: `${scope}.USER_NOT_ACTIVE`,
    defaultMessage: 'Tài khoản chưa kích hoạt.',
  },
  CANNOT_LOGIN_WITH_EXTENSION: {
    id: `${scope}.CANNOT_LOGIN_WITH_EXTENSION`,
    defaultMessage: 'Không thể đăng nhập.',
  },
  CONFIRM_CODE_ERROR: {
    id: `${scope}.CONFIRM_CODE_ERROR`,
    defaultMessage: 'Mã xác thực không đúng.',
  },
  SERVER_ERROR: {
    id: `${scope}.SERVER_ERROR`,
    defaultMessage: 'Server gặp sự cố.',
  },
  EMAIL_KAIBASE_EXISTS: {
    id: `${scope}.EMAIL_KAIBASE_EXISTS`,
    defaultMessage: 'Email đã được đăng ký tài khoản Kaibase, bạn có thể sử dụng để đăng nhập Cổng Trời.',
  }
});
