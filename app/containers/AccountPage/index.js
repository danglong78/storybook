/*
 * AccountPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';

import * as Paths from 'constants/routes';

import { FormattedMessage } from 'react-intl';
import cRequest from 'utils/server';
import { logout } from 'utils/auth';
import messages from './messages';
import Card from 'components/Card';
import Wrapper from './Wrapper';
import Avatar from 'components/Avatar';
import H2 from 'components/H2';
import A from 'components/A';
import GeneralInforWrapper from './GeneralInforWrapper';
import ListNavWrapper from './ListNavWrapper';
import UserGeneralInforTab from 'containers/UserGeneralInforTab';
import UpdateInforTab from 'containers/UpdateInforTab';
import { EditIcon, LogoutIcon, UserIcon } from 'components/Icon';
import Loading from 'components/LoadingIndicator';
import {API_USER_INFO} from 'constants/api';

const INFOR_TAB = 0;
const UPDATE_TAB = 1;

const listNav = [
  {
    value: messages.userAccount,
    href: Paths.ROUTE_ACCOUNT_GENERAL_INFO,
    icon: <UserIcon />,
  },
  {
    value: messages.updateInformation,
    href: Paths.ROUTE_ACCOUNT_UPDATE,
    icon: <EditIcon />,
  }
];

export default function AccountPage() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUser] = useState();
  const [tab, setTab] = useState(0);
  useEffect(() => {
    cRequest.get(API_USER_INFO).then(res => {
        if (res.status === 200) {
          setUser(res.data.data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
  if (loading) return <Loading />;

  const level = userInfo.user.level ? (
    userInfo.user.level
  ) : (
    <FormattedMessage {...messages.notMember} />
  );

  const listNavItem = listNav.map((item, index) => (
    <li key={item.value.id} {...tab === index && { className: 'active' }}>
      {item.icon}
      <A
        onClick={() => {
          setTab(index);
        }}
      >
        <FormattedMessage {...item.value} />
      </A>
    </li>
  ));


  return (
    <Wrapper>
      <Card>
        <GeneralInforWrapper>
          <Avatar source={userInfo.user.avatar} width="30%" />
          <H2>{userInfo.user.name}</H2>
          <p>{level}</p>
        </GeneralInforWrapper>
        <ListNavWrapper>
          {listNavItem}
          <li
            key={messages.logout.id}
            onClick={() => {
              logout();
            }}
          >
            <LogoutIcon />
            <p>
              <FormattedMessage {...messages.logout} />
            </p>
          </li>
        </ListNavWrapper>
      </Card>
      <div>
        {(() => {
          switch (tab) {
            case UPDATE_TAB:
              return (<UpdateInforTab userInfo={userInfo} />);
            default:
              return (<UserGeneralInforTab userInfo={userInfo} />);
          }
        })()}
      </div>
    </Wrapper>
  );
}
