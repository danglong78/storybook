import React from 'react';

import Wrapper from './Wrapper';
import Item from './Item';

function Dropdown({listItem}) {
  return (
    <Wrapper>
      {listItem.map((item, key) => (
        <Item key={key} {...item.props}>{item.value}</Item>
      ))}
    </Wrapper>
  );
}
export default Dropdown;
