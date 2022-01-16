import React from "react";
import styled from "styled-components";

import Button from "./StyledButton";

const Wrapper = styled.div`
  width: 400px;
  &>*{
    margin-bottom:10px;
  }
`;

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => (
  <Wrapper>
    <Button >Button</Button>
    <Button disabled={true} >Button</Button>
  </Wrapper>
);

export const Default = Template.bind({});
