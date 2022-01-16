import React from 'react';
import { IntlProvider } from 'react-intl';

import Header from './index';

import intlMessagesVN from '../../translations/vi.json';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    Story => (
      <IntlProvider locale="vi" key="vi" messages={intlMessagesVN}>
        <Story />
      </IntlProvider>
    ),
  ],
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
//
