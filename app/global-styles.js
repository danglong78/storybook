import { createGlobalStyle } from 'styled-components';
import { PRI_FONTCOLOR, INACTIVE_COLOR } from './constants/styles';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: SVN-Gilroy, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: SVN-Gilroy, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #E5E5E5;
    min-height: 100%;
    min-width: 100%;
  }

  p, label, section, input {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 17px;

    color: ${PRI_FONTCOLOR};
  }
  button, [type="button"], [type="reset"], [type="submit"] {
    border: 0;
  }
  .wrapper{
    padding: 0 16px;
  }
  .text-center{
    text-align: center;
  }
  .header-column{
    flex-direction: column;
  }
  .header-column .slogan{display:none;}

  a.disabled {
    pointer-events: none;
    cursor: default;
    background-color: ${INACTIVE_COLOR};
  }
  
  @media screen and (min-width: 993px) {
    .header-row{
      flex-direction: row;
      margin: 72px auto;
      justify-content: center;
    }
    .header-row>div{
      align-self: center;
      align-items: stretch;
      width: 50%;
    }
  }
  @media screen and (max-width: 992px) {
    .header-row{
      flex-direction: column;
    }
  }
  
`;

export default GlobalStyle;
