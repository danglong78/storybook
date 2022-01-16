import styled from 'styled-components';
import Card from 'components/Card';
const TokenCard = styled(Card)`
  width: 25%;  
  display:flex;
  align-items: center;
  justify-content space-between;
  margin-bottom: 1rem;
  & *{
      margin:0;
  }

  & > *:last-child{
    width: 1.75rem;
    height: 1.75rem;
  }
`;

export default TokenCard;
