/*
 * VerifyCodePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import {getParamUrl} from 'utils/helpers';

import ActiveUserForm from 'components/ActiveUserForm';
import ResendCodeForm from 'components/ResendCodeForm';
import ContentWrapper from 'components/ContentWrapper';

export default function VerifyCodePage() {
  let uiRender = (<ResendCodeForm />);
  const code = getParamUrl("code");
  if(code){
    uiRender = (<ActiveUserForm code={code} />);
  }

  return <ContentWrapper>{uiRender}</ContentWrapper>;
}
