import React from 'react';

import  A  from './index';

export default {
  title: 'Components/A',
  component: A,
};

const Template = (args) => <A {...args}> Link </A>;

export const Default = Template.bind({});

