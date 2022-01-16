/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import cRequest from 'utils/server';
import { getResStatus, cacthError, cacthResponse, getObjectValueById } from 'utils/helpers';
import {API_USER_INFO_UPDATE} from 'constants/api';
import * as Noti from 'utils/notification';

import Input from 'components/Input';
import Form from 'components/Form';
import Button from './Button';
import messages from './messages';

import ContentWrapper from 'components/ContentWrapper';
import H1 from 'components/H1';

export default function UpdateInforTab({ userInfo }) {
  const [nameValue, setNameValue] = useState(getObjectValueById(userInfo.user,'name'));
  const handleNameValue = val => setNameValue(val);
  const [nameError, setNameError] = useState(true);
  const handleNameError = val => setNameError(!!val);

  const [addressValue, setAddressValue] = useState(getObjectValueById(userInfo.user,'address'));
  const handleAddressValue = val => setAddressValue(val);
  const [addressError, setAddressError] = useState(true);
  const handleAddressError = val => setAddressError(!!val);

  const [telValue, setTelValue] = useState(getObjectValueById(userInfo.user,'phone'));
  const handleTelValue = val => setTelValue(val);
  const [telError, setTelError] = useState(true);
  const handleTelError = val => setTelError(!!val);

  const handleSubmit = e => {
    if (!nameError && !addressError && !telError) {
      const formData = new FormData(e.currentTarget);
      formData.append('avatar', 'default-avatar.jpg');
      const data = Object.fromEntries(formData.entries());
      cRequest.post(API_USER_INFO_UPDATE, data).then(res => { 
        const status = getResStatus(res);
        if (status == '200') {
          Noti.showNotiSuccess(<FormattedMessage {...messages.success} />);
        } else if(status == '500'){
          Noti.showNotiError(<FormattedMessage {...messages.error} />);
        } else{
          cacthResponse(res);
        }
      }).catch(err=>cacthError(err));
    }
  };
  
  return (
    <ContentWrapper>
      <H1><FormattedMessage {...messages.header} /></H1>
      <Form mySubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={nameValue}
          isChange={handleNameValue}
          isError={handleNameError}
          messages={messages.fullName}
        />
        <Input
          type="tel"
          name="phone"
          value={telValue}
          isChange={handleTelValue}
          isError={handleTelError}
          messages={messages.telephone}
        />
        <Input
          type="text"
          name="address"
          value={addressValue}
          isChange={handleAddressValue}
          isError={handleAddressError}
          messages={messages.address}
        />
        <Button disabled={!(!nameError && !addressError && !telError)} type="submit">
          <FormattedMessage {...messages.save} />
        </Button>
      </Form>
    </ContentWrapper>
  );
}
