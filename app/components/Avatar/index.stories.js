import React from "react";

import Avatar from "./index";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} src="default-avatar.jpg" />;

export const Default = Template.bind({});
Default.args = {
  width: "100px",
};
