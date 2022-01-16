import styled, {keyframes} from 'styled-components';

const showSuccess = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const tipInPlace = keyframes`
  from {
    width: 0em;
    top: 0em;
    left: -1.6em;
  }
  to {
    width: 2.4em;
    top: 4.3em;
    left: 1.4em;
    visibility: visible;
  }
`;

const longInPlace = keyframes`
  from {
    width: 0em;
    top: 5.1em;
    left: 3.2em;
  }
  to {
    width: 4em;
    top: 3.70em;
    left: 2.75em;
    visibility: visible;
  }
`;

const Icon = styled.div`
  display: block;
  margin: 0 auto;
  width: 8em;
  height: 8em;
  font-size: 20px;
  border-radius: 50%;
  border: 4px solid #4cc93f;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  transform-origin: center;
  animation: ${showSuccess} 1800ms ease-in-out;
  transform: scale(1);

  &:before, &:after {
    display: block;
    content: '';
    position: absolute;
    height: 4px;
    background-color: #4cc93f;
    border-radius: 10px;
  }

  &:before {
    width: 2.4em;
    top: 4.3em;
    left: 1.4em;
    transform: rotate(45deg);
    animation: ${tipInPlace} 3000ms ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 180ms;
    visibility: hidden;
  }

  &:after {
    width: 4em;
    transform: rotate(-45deg);
    top: 3.70em;
    left: 2.75em;
    animation: ${longInPlace} 1400ms ease-in-out;
    animation-fill-mode: forwards;
    visibility: hidden;
    animation-delay: 300ms + 140ms;
  }
`;


export default Icon;
