import styled from 'styled-components';

const Inner = styled.div`
  display: inline;
  color: #1C1C28;
  font-size: 22px;
  text-transform: uppercase;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;
  }
  ul li {
    cursor: pointer;
    padding: 12px 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li ul {
    display: none;
  }
  li:hover ul {
    position: absolute;
    top: 50px;
    min-width: 120px;
    right: -15px;
    display: block;
    background: #fff;
    padding: 8px 0px;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  li ul li {
    position: relative;
    text-align: left;
    z-index: 2;
  }
  li ul li:hover{
    background-color:rgba(0,0,0,0.1);
  }
  li ul li:hover,
  li ul li.active {
    color: #F6A422;
  }
`;

export default Inner;
