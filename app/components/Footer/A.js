import styled from 'styled-components';
import NormalA from 'components/A';

const A = styled(NormalA)`
  padding: 0;
  &:hover{
    opacity: 0.5;
  }
`;

export default A;
