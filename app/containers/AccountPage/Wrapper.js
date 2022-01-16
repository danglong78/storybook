import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0 auto 2rem auto;
  max-width: 1150px;
  width: 80%;

  & > *:first-child {
    width: 20.9375rem;
    min-width: 20.9375rem;
    max-height: 450px;
    padding: 0;
  }

  & > *:last-child {
    flex: auto;
  }
`;

export default Wrapper;
