import styled from 'styled-components';
import { GAP_ELEMENT } from 'constants/styles';

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  padding: ${GAP_ELEMENT}px;
  width: 80%;
  max-width: 320px;
  transform: translateY(-50%);
  top: 50%;
  text-align: center;
`;

export default Inner;
