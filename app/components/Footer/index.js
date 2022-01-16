import React from 'react';
import { FormattedMessage } from 'react-intl';

// Components
import Icon from './Icon';
import A from './A';
import Wrapper from './Wrapper';
import Inner from './Inner';
import messages from './messages';
// Images
import icoFacebook from './facebook.svg';
import icoInstagram from './instagram.svg';
import icoTwitter from './twitter.svg';
import icoYouTube from './youTube.svg';

function Footer() {
  return (
    <Wrapper className='wrapper'>
      <Inner>
        <FormattedMessage {...messages.license} />
      </Inner>
      <Inner>
        <A href="https://twitter.com/" title="twitter.com"><Icon src={icoTwitter} alt="Twitter icon" /></A>
        <A href="https://www.youtube.com/" title="youtube.com"><Icon src={icoYouTube} alt="YouTube icon" /></A>
        <A href="https://www.instagram.com/" title="instagram.com"><Icon src={icoInstagram} alt="Instagram icon" /></A> 
        <A href="https://www.facebook.com/" title="facebook.com"><Icon src={icoFacebook} alt="Facebook icon" /></A> 
      </Inner>
    </Wrapper>
  );
}

export default Footer;
