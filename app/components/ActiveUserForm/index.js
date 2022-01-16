/**
 * Send email form
 */
 import React, {useState, useEffect} from 'react';
 import { FormattedMessage } from 'react-intl';
 
import cRequest from 'utils/server';

import messages from './messages';
import Wrapper from './Wrapper';
import Icon from './Icon';
import Img from './Img';

import {ROUTE_LOGIN, ROUTE_VERIFYCODE} from 'constants/routes';
import {ENUM_VERIFY_MODE} from 'constants/enums';
import { redirectLogin, getResErrorCode, getResStatus, redirectTo, cacthError, cacthResponse } from 'utils/helpers';
import {ERROR_CONFIRM_CODE} from 'constants/errors';
import {API_USER_ACTIVE} from 'constants/api';
import * as Noti from 'utils/notification';
import Loading from 'components/LoadingIndicator';

import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import H1 from 'components/H1';

import icoError from './error.png';
 
function ActiveUserForm({code}) {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const data = {
      "code": code,
      "mode": ENUM_VERIFY_MODE.REG
    }

    cRequest.post(API_USER_ACTIVE, data).then(res =>{
      const status = getResStatus(res);
      setLoading(false);
      if(status == "200"){
        setIsActive(true);
        Noti.showNotiSuccess(<FormattedMessage {...messages.success} />, {onClose: () => redirectLogin()});
      } else if(status == "400"){
        if(getResErrorCode(res)== ERROR_CONFIRM_CODE){
          Noti.showNotiError(<FormattedMessage {...messages.error} />, {onClose: () => redirectTo(ROUTE_VERIFYCODE)});
        }
      }  else if(status == "500"){
        Noti.showNotiError(<FormattedMessage {...messages.error} />);
      } else{
        cacthResponse(res);
      }
    }).catch(err=>cacthError(err));
  }, []);
  
  if (isLoading) return <Loading />;

  let uiRender = isActive ? (<Icon />) : (<Img src={icoError} alt="Error icon" />);

  return (
    <Wrapper>
      <H1><FormattedMessage {...messages.header} /></H1>
      {uiRender}
      <Button disabled={!isActive} href={ROUTE_LOGIN}><FormattedMessage {...messages.login} /></Button>
      <ButtonLink className="text-center" href={ROUTE_VERIFYCODE}><FormattedMessage {...messages.resend} /></ButtonLink>
    </Wrapper>
  );
 }
 
 export default ActiveUserForm;
 
 