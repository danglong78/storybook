import React from 'react';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';
import messages from 'components/Error/messages';

export const showNoti = (mText, options = {}) => {
    return toast(mText, options);
} 
export const showNotiSuccess = (mText, options = {}) => {
    return toast.success(mText, options);
} 
export const showNotiInfo = (mText, options = {}) => {
    return toast.info(mText, options);
} 
export const showNotiWarm = (mText, options = {}) => {
    return toast.warn(mText, options);
} 
export const showNotiError = (mText, options = {}) => {
    return toast.error(mText, options);
} 
export const showNotiErrorByCode = (mText, options = {}) => {
    return toast.error(<FormattedMessage {...messages[mText]} />, options);
}
export const removeAllNoti = () => {
    toast.dismiss();
} 
export const removeNoti = mId => {
    toast.dismiss(mId);
} 
export const isNotiActive = mId => {
    toast.isActive(mId);
}