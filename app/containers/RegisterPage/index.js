/*
 * RegisterPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import cRequest from 'utils/server';
import { getResErrorCode, getResStatus, cacthError, cacthResponse } from 'utils/helpers';
import * as Noti from 'utils/notification';
import {ERROR_PARAMETERS} from 'constants/errors';
import {API_REGISTER} from 'constants/api';
import {ROUTE_AUTHOR_GUIDELINE} from 'constants/routes';

import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import Input from 'components/Input';
import Line from 'components/Line';
import H1 from 'components/H1';
import Space from 'components/Space';
import Form from 'components/Form';
import KardiachainLogin from 'components/KardiachainLogin';
import Group from './Group';
import messages from './messages';
import ContentWrapper from 'components/ContentWrapper';

export default function RegisterPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const [emailError, setEmailError] = useState(true);
  const handleEmailError = val => setEmailError(!!val);

  const [passError, setPassError] = useState(true);
  const handlePassError = val => setPassError(!!val);

  const [lastnameError, setLastnameError] = useState(true);
  const handleLastnameError = val => setLastnameError(!!val);

  const [firstnameError, setFirstnameError] = useState(true);
  const handleFirstnameError = val => setFirstnameError(!!val);

  const handleSubmit = e => {
    if (!emailError && !passError && !lastnameError && !firstnameError) {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      cRequest.post(API_REGISTER, data).then(res => {
        const status = getResStatus(res);
        if(status == "200"){
          setIsSuccess(true);
          Noti.showNotiSuccess(<FormattedMessage {...messages.success} />);
        } else if(status == '400'){
          const errorCode = getResErrorCode(res);
          if (errorCode == ERROR_PARAMETERS) {
            Noti.showNotiError(<FormattedMessage {...messages.error} />);
          } else{
            Noti.showNotiErrorByCode(errorCode);
          }
        } else{
          cacthResponse(res);
        }
      }).catch(err=>cacthError(err)).then(setIsSuccess(false));
    }
  };

  return (
    <ContentWrapper>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Form mySubmit={handleSubmit}>
          <Group>
            <Input
              isError={handleLastnameError}
              pressKey={handleSubmit}
              type="text"
              name="last_name"
              messages={messages.lastname}
              clear={isSuccess}
              required
            />
            <Input
              isError={handleFirstnameError}
              pressKey={handleSubmit}
              type="text"
              name="first_name"
              messages={messages.firstname}
              clear={isSuccess}
              required
            />
          </Group>
          <Input
            isError={handleEmailError}
            pressKey={handleSubmit}
            type="email"
            name="email"
            messages={messages.email}
            clear={isSuccess}
            required
          />
          <Input
            isError={handlePassError}
            pressKey={handleSubmit}
            type="password"
            name="password"
            messages={messages.password}
            clear={isSuccess}
            required
          />

          <Button
            disabled={
              !(!emailError && !passError && !lastnameError && !firstnameError)
            }
            type="submit"
          >
            <FormattedMessage {...messages.register} />
          </Button>
        </Form>
        <Line />
        <KardiachainLogin />
        <Space />
        <ButtonLink
          className="text-center"
          href={ROUTE_AUTHOR_GUIDELINE}
          title={<FormattedMessage {...messages.help} />}
        >
          <FormattedMessage {...messages.help} />
        </ButtonLink>
      </ContentWrapper>
  );
}
