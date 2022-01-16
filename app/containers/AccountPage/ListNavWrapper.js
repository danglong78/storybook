import styled from 'styled-components';

import { ACTIVE_COLOR, DARK_PRI_COLOR } from '../../constants/styles';
const ListNavWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  list-style: none;

  & > li {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    width: 100%;

    &:hover > *,
    &.active > *,
    &:active > * {
      color: ${ACTIVE_COLOR};
    }
  }
  & > li > * {
    padding: 0.825rem 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }

  & > li > svg {
    width: 2rem;
    height: 2rem;
    margin: 0;
    padding: 0;
  }
`;

export default ListNavWrapper;
