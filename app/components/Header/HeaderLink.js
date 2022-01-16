import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ACTIVE_COLOR, PRI_FONTCOLOR } from '../../constants/styles';

export default styled.p`
  display: inline-flex;
  padding: 8px 23px;
  margin: 0 auto;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: ${PRI_FONTCOLOR};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;

  &:active,
  &:hover {
    color: ${ACTIVE_COLOR};
  }
`;
