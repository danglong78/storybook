import styled from 'styled-components';
import Img from 'components/Img';

const RoundedImg = styled(Img)`
  width: ${props => (props.width ? props.width : '48px')};
  display: inline-block;
  border-radius: 50%;
`;

export default RoundedImg;
