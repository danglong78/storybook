/*
 *
 * User Dropdown
 *
 */

import React, { useState, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { getUser, logout } from 'utils/auth';
import { redirectTo } from 'utils/helpers';
import { ROUTE_ACCOUNT, ROUTE_REGISTER, ROUTE_LOGIN } from 'constants/routes';
import Arrow from './Arrow';
import IcoArrow from './arrow-down.svg';
import Dropdown from 'components/Dropdown';
import ButtonLink from 'components/ButtonLink';
import Separator from 'components/Separator';

import Avatar from 'components/Avatar';
import TopWrapper from './TopWrapper';
import BottomWrapper from './BottomWrapper';
import messages from './messages';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: start;
`;
const Inner = styled.div`
  margin: 0 4px;
  text-align: left;
`;

export function UserDropdown() {
  const [openDropdown, setOpenDropDown] = useState(false);

  const handleClick = () => {
    setOpenDropDown(!openDropdown);
  };

  const handleClickLogOut = () => {
    handleClick();
    // logout();
  };
  const handleClickAccount = () => {
    handleClick();
    // redirectTo(ROUTE_ACCOUNT);
  };

  const mUser = getUser();
  if (mUser) {
    const listItem = [
      {
        value: <FormattedMessage {...messages.account} />,
        props: { onClick: handleClickAccount },
      },
      {
        value: <FormattedMessage {...messages.logout} />,
        props: { onClick: handleClickLogOut },
      },
    ];
    return (
      <Wrapper onClick={handleClick}>
        <Inner>
          <Avatar src={mUser.avatar} />
        </Inner>
        <Inner>
          <TopWrapper>{'Username'}</TopWrapper>
          <BottomWrapper>{'Password'}</BottomWrapper>
        </Inner>
        <Inner>
          <Arrow src={IcoArrow} alt="Arrow - icon" />
          {openDropdown && <Dropdown listItem={listItem} />}
        </Inner>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {' '}
      <ButtonLink href={ROUTE_LOGIN}>
        <FormattedMessage {...messages.login} />
      </ButtonLink>{' '}
      <Separator />{' '}
      <ButtonLink href={ROUTE_REGISTER}>
        <FormattedMessage {...messages.register} />
      </ButtonLink>
    </Wrapper>
  );
}

export default UserDropdown;
