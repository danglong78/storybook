import styled from 'styled-components';

import { LIGHT_PRI_COLOR } from '../../constants/styles';
const GeneralInforWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  background: rgba(238, 175, 58, 0.2);
  padding: 2rem 0;

  & > p {
    margin: 0;
  }
`;

export default GeneralInforWrapper;
