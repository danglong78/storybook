/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import cRequest from 'utils/server';
import { redirectHome, getResErrorCode, getResStatus, cacthError, cacthResponse  } from 'utils/helpers';
import { setUserData } from 'utils/auth';
import * as Noti from 'utils/notification';
import {ERROR_PARAMETERS, ERROR_USER_NOT_ACTIVE,ERROR_CONFIRM_CODE} from 'constants/errors';
import {ROUTE_FORGOTPASSWORD} from 'constants/routes';
import {API_LOGIN, API_RESEND_CONFIRM} from 'constants/api';
import {ENUM_VERIFY_MODE, ENUM_USER_ROLE} from 'constants/enums';

import KardiachainLogin from 'components/KardiachainLogin';

import ContentWrapper from 'components/ContentWrapper';
import Form from 'components/Form';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import Input from 'components/Input';
import Line from 'components/Line';
import H1 from 'components/H1';
import Space from 'components/Space';
import messages from './messages';

export default function LoginPage() {
  const [emailError, setEmailError] = useState(true);
  const handleEmailError = val => setEmailError(!!val);

  const [passError, setPassError] = useState(true);
  const handlePassError = val => setPassError(!!val);

  const [disableResend, setDisableResend] = useState(true);

  const login = e => {
    const formData = new FormData(e.currentTarget);
    formData.append('role', ENUM_USER_ROLE['CUS']);
    const data = Object.fromEntries(formData.entries());

    cRequest.post(API_LOGIN, data).then(res => {
      const status = getResStatus(res);
      if (status == '200') {
        setUserData(res);
        Noti.showNotiSuccess(<FormattedMessage {...messages.success} />, { onClose: () => redirectHome() });
      } else if (status == '400') {
        if (getResErrorCode(res) == ERROR_PARAMETERS) {
          Noti.showNotiError(<FormattedMessage {...messages.error} />);
        }
        if (getResErrorCode(res) == ERROR_USER_NOT_ACTIVE) {
          setDisableResend(false);
          Noti.showNotiError(<FormattedMessage {...messages.errorUser} />);
        }
      } else {
        cacthResponse(res);
      }
    }).catch(err => cacthError(err));
  }

  const resendActiveEmail = e => {
    const formData = new FormData(e.currentTarget);
    formData.append('role', ENUM_VERIFY_MODE['REG']);
    formData.delete('password');
    const data = Object.fromEntries(formData.entries());
    cRequest.post(API_RESEND_CONFIRM, data).then(res => {
      const status = getResStatus(res);
      if (status == '200') {
        Noti.showNotiSuccess(<FormattedMessage {...messages.resendSuccess} />);
      } else if (status == '400') {
        if (getResErrorCode(res) == ERROR_PARAMETERS) {
          Noti.showNotiError(<FormattedMessage {...messages.error} />);
        }
        if (getResErrorCode(res) == ERROR_CONFIRM_CODE) {
          Noti.showNotiError(<FormattedMessage {...messages.resendError} />);
        }
      } else {
        cacthResponse(res);
      }
    }).catch(err => cacthError(err));
  }

  const handleSubmit = e => {
    if (!emailError && !passError) {
      login(e);
      return;
    }
    if (!emailError) {
      resendActiveEmail(e);
      }

  };

  return (
    <ContentWrapper>
        <H1><FormattedMessage {...messages.header} /></H1>
        <Form mySubmit={handleSubmit}>
          <Input
            isError={handleEmailError}
            pressKey={handleSubmit}
            type="email"
            name="email"
            messages={messages.email}
            required
          />
          <Input
            isError={handlePassError}
            pressKey={handleSubmit}
            type="password"
            name="password"
            messages={messages.password}
            required
            novalidate
          />
          <Space />
          <ButtonLink
            href={ROUTE_FORGOTPASSWORD}
            title={<FormattedMessage {...messages.forgot} />}
          >
            <FormattedMessage {...messages.forgot} />
          </ButtonLink>
          <Button disabled={!(!emailError && !passError)} type="submit">
            <FormattedMessage {...messages.login} />
          </Button>
          <Button
            disabled={disableResend}
            type = "submit"
          >
            <FormattedMessage {...messages.resendActive} />
          </Button>
        </Form>
        <Line />
        <KardiachainLogin />
    </ContentWrapper>
  );
}
