import React from "react";
import styled from "styled-components";

import CopyIcon from "./CopyIcon";
import EditIcon from "./EditIcon";
import LogoutIcon from "./LogoutIcon";
import QRCodeIcon from "./QRCodeIcon";
import UserIcon from "./UserIcon";
import VNDCTokenIcon from "./VNDCTokenIcon";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  &>*{
    width: 3rem;
    height: 3rem;
  }
`;
const ListIcon = () => (
  <Wrapper>
    <CopyIcon />
    <EditIcon />
    <LogoutIcon />
    <QRCodeIcon />
    <UserIcon />
    <VNDCTokenIcon />
  </Wrapper>
);

export default {
  title: "Components/Icons",
  component: ListIcon,
};

const Template = (args) => <ListIcon {...args} />;

export const Default = Template.bind({});
