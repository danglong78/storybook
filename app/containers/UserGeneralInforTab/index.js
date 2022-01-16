/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { QRCodeIcon, CopyIcon, VNDCTokenIcon } from 'components/Icon';
import Card from 'components/Card';
import messages from './messages';
import WalletCard from './WalletCard';
import TokenCard from './TokenCard';

import { getObjectValueById } from 'utils/helpers';

export default function UserGeneralInforTab({ userInfo }) {
  
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <TokenCard>
        <div>
          <h2>{userInfo.vndc_price.success[0].balance_display}</h2>
          <p>VNDC</p>
        </div>
        <VNDCTokenIcon />
      </TokenCard>
      <WalletCard>
        <p>
          <FormattedMessage {...messages.wallet} />
          <b>{getObjectValueById(userInfo.user,'wallet_info')}</b>
        </p>
        <div>
          <CopyIcon />
          <QRCodeIcon />
        </div>
      </WalletCard>
      <Card>
        <p>
          <FormattedMessage {...messages.phone} />
          {getObjectValueById(userInfo.user,'phone')}
        </p>
        <p>
          <FormattedMessage {...messages.address} />
          {getObjectValueById(userInfo.user,'address')}
        </p>
      </Card>
    </div>
  );
}
