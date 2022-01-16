import React from 'react';
import { FormattedMessage } from 'react-intl';

// import LocaleToggle from 'containers/LocaleToggle';
import UserDropdown from 'containers/UserDropdown';
import Logo from 'components/Logo';
import Wrapper from './Wrapper';
import NavBar from './NavBar';
import RightBar from './RightBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <Wrapper>
      <Logo />
      <RightBar>
        {/* <LocaleToggle /> */}
        <UserDropdown />
      </RightBar>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.hlink1} />
        </HeaderLink>
        <HeaderLink to="/skygate-metaverse">
          <FormattedMessage {...messages.hlink2} />
        </HeaderLink>
        <HeaderLink to="/products">
          <FormattedMessage {...messages.hlink3} />
        </HeaderLink>
        <HeaderLink to="/news">
          <FormattedMessage {...messages.hlink4} />
        </HeaderLink>
        <HeaderLink to="/contact">
          <FormattedMessage {...messages.hlink5} />
        </HeaderLink>
      </NavBar>
    </Wrapper>
  );
}

export default Header;
