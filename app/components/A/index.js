/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import { LINK_COLOR, ACTIVE_COLOR } from '../../constants/styles';

const A = styled.a`
  color: ${LINK_COLOR};
  text-decoration: none;

  &:hover {
    color: ${ACTIVE_COLOR};
  }
`;

export default A;
