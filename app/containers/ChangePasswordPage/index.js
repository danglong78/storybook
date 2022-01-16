/*
 * ChangePasswordPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useState } from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import cRequest from 'utils/server';
import {redirectHome, getResStatus, cacthError, cacthResponse} from 'utils/helpers';
import * as Noti from 'utils/notification';
import {API_CHANGE_PASS} from 'constants/api';

import ContentWrapper from 'components/ContentWrapper';
import Button from 'components/Button';
import Input from 'components/Input';
import H1 from 'components/H1';
import Form from 'components/Form';

export default function ChangePasswordPage() {
  const [passError, setPassError] = useState(true);
  const handlePassError = val => setPassError(!!val);

  const [numberError, setNumberError] = useState(true);
  const handleNumberError = val => setNumberError(!!val);

  const handleSubmit = e => {
    if(!passError && !numberError){
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      cRequest.post(API_CHANGE_PASS, data).then(res=>{
        const status = getResStatus(res);
        if(status == "200"){
          Noti.showNotiSuccess(<FormattedMessage {...messages.success} />, {onClose: () => redirectHome()});
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
      <Input isError={handleNumberError} pressKey={handleSubmit} type="number" name="token" messages={messages.token} required/>
        <Input isError={handlePassError} pressKey={handleSubmit} type="password" name="new_password" messages={messages.newpassword} required/>
        <Button disabled={passError} type="submit"><FormattedMessage {...messages.save} /></Button>
      </Form>
    </ContentWrapper>
  );
}
