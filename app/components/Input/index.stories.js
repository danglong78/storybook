import React from 'react';
import styled from 'styled-components';
import { IntlProvider } from 'react-intl';

import Input from './index';
import messages from '../../containers/LogInPage/messages';
import intlMessagesVN from '../../translations/vi.json';

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [
    Story => (
      <IntlProvider locale="vi" key="vi" messages={intlMessagesVN}>
        <Story />
      </IntlProvider>
    ),
  ],
};

const Wrapper = styled.div`
  width: 500px;
`;
const Template = args => (
  <Wrapper>
    <Input {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  type: 'email',
  name: 'email',
  messages: messages.email,
};
