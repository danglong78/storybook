/*
 * ForgotPasswordPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useState} from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import cRequest from 'utils/server';
import {redirectTo, getResStatus, cacthError, cacthResponse } from 'utils/helpers';
import {ROUTE_CHANGEPASSWORD} from 'constants/routes';
import * as Noti from 'utils/notification';
import {API_FORGOT_PASS} from 'constants/api';

import ContentWrapper from 'components/ContentWrapper';
import Button from 'components/Button';
import Input from 'components/Input';
import H1 from 'components/H1';
import Form from 'components/Form';

export default function ForgotPasswordPage() {
  const [emailError, setEmailError] = useState(true);
  const handleEmailError = val => setEmailError(!!val);
  
  const handleSubmit = e => {
    if(!emailError){
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      cRequest.post(API_FORGOT_PASS, data).then(res =>{
        const status = getResStatus(res);
        if(status == "200"){
          Noti.showNotiSuccess(<FormattedMessage {...messages.success} />, {onClose: () => redirectTo(ROUTE_CHANGEPASSWORD)});
        } else if(status == '500'){
            Noti.showNotiError(<FormattedMessage {...messages.error} />);
        } else{
          cacthResponse(res);
        }
      }).catch(err=>cacthError(err));
    }
  }

  return (
    <ContentWrapper>
      <H1><FormattedMessage {...messages.header} /></H1>
      <Form mySubmit={handleSubmit}>
        <Input isError={handleEmailError} pressKey={handleSubmit} type="email" name="email" messages={messages.email} required/>
        <Button disabled={emailError} type="submit"><FormattedMessage {...messages.send} /></Button>
      </Form>
    </ContentWrapper>
  );
}
