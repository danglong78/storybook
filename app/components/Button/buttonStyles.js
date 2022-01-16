import { css } from 'styled-components';
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../../constants/styles';
import icoForward from './forward-arrow.svg';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 24px;
  text-decoration: none;

  user-select: none;
  cursor: pointer;
  outline: 0;
  
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;
  
  color: #F7F7FC;
  background-color: #2C3677;
  border-radius: 12px;

  width: 100%;

  &:active, &:hover {
    background-color: ${ACTIVE_COLOR};
  }
  &:disabled{
    background-color: ${INACTIVE_COLOR};
  }

  background-image: url("${icoForward}");
  background-repeat: no-repeat;
  background-position: right 25px center;
`;

export default buttonStyles;
