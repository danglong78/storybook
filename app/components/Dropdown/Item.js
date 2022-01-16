import styled from 'styled-components';

import { ACTIVE_COLOR, PRI_FONTCOLOR } from 'constants/styles';
const Item = styled.li`
  list-style: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;

  cursor: pointer;
  padding-bottom: 15px;

  &:last-child {padding-bottom: 0px;}
  &:hover {
    color: ${props => (props.onClick ? ACTIVE_COLOR : PRI_FONTCOLOR)};
    cursor: ${props => (props.onClick ? 'pointer' : 'auto')};
  }
`;

export default Item;
