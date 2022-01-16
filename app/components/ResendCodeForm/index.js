/**
 * Resend code form
 */
import React, {useState, Fragment} from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import cRequest from 'utils/server';
import { redirectLogin, getResErrorCode, getResStatus, cacthError, cacthResponse } from 'utils/helpers';
import * as Noti from 'utils/notification';
import {ERROR_CONFIRM_CODE} from 'constants/errors';
import {API_RESEND_CONFIRM} from 'constants/api';
import {ENUM_VERIFY_MODE} from 'constants/enums';

import Button from 'components/Button';
import Input from 'components/Input';
import H1 from 'components/H1';
import Form from 'components/Form';

function ResendCodeForm() {
  const [emailError, setEmailError] = useState(true);
  const handleEmailError = val => setEmailError(!!val);

  const handleSubmit = e => {
      if(!emailError){
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries());
          formData.append('role', ENUM_VERIFY_MODE['REG']);
          cRequest.post(API_RESEND_CONFIRM, data).then(res =>{
            const status = getResStatus(res);
            if(status == "200"){
              Noti.showNotiSuccess(<FormattedMessage {...messages.success} />, {onClose: () => redirectLogin()});
            } else if(status == "400"){
              if(getResErrorCode(res) == ERROR_CONFIRM_CODE){
                Noti.showNotiError(<FormattedMessage {...messages.error} />);
              }
            } else{
              cacthResponse(res);
            }
          }).catch(err=>cacthError(err));
      }
  }

  return (
    <Fragment>
      <H1><FormattedMessage {...messages.header} /></H1>
      <Form mySubmit={handleSubmit}>
          <Input isError={handleEmailError} pressKey={handleSubmit} type="email" name="email" messages={messages.email} required/>
          <Button disabled={emailError} type="submit"><FormattedMessage {...messages.send} /></Button>
      </Form>
    </Fragment>
  );
}
 
export default ResendCodeForm;
 
 