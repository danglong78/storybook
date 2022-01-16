import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { PRI_COLOR } from 'constants/styles';
import Wrapper from './Wrapper';
import A from 'components/A';
import Img from './Img';
import Banner from './Logo.svg';
import messages from './messages';

const Slogan = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 67px;
  color: ${PRI_COLOR};
  text-align: center;
`;

function Logo() {
  return (
    <Wrapper>
      <A href="/" title="congtroi.org">
        <Img src={Banner} alt="Cổng trời - Logo" />
        <Slogan className='slogan'><FormattedMessage {...messages.header} /></Slogan>
      </A>
    </Wrapper>
  );
}

export default Logo;
