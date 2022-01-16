import styled from 'styled-components';
import Card from '../../components/Card';
const WalletCard = styled(Card)`
  box-shadow: none;
  background: rgba(227, 96, 159, 0.5);
  display:flex;
  align-items: center;
  justify-content space-between;
  margin-bottom: 1rem;
  & *{
      margin:0;
  }

  & > *:last-child {
    display: flex;

    & > *{
        margin-left: 0.5rem;
        cursor: pointer;
        width: 1.25rem;
        height: 1.25rem;
    }
  }
`;

export default WalletCard;
