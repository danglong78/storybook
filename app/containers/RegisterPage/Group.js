import styled from 'styled-components';
import { GAP_ELEMENT } from 'constants/styles';

const Group = styled.div`
  @media (min-width: 993px) {
    display: grid;
    grid-gap: ${GAP_ELEMENT*2}px ${GAP_ELEMENT*2}px;
    grid-template-columns: auto auto;
  }
`;

export default Group;
