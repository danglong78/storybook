import React, { Children } from 'react';
import PropTypes from 'prop-types';
 
import A from 'components/A';
import Wrapper from './Wrapper';
 
 function ButtonLink(props) {
   // Render an anchor tag
   let button = (
     <A href={props.href} onClick={props.onClick} className={(props.disabled ? ' disabled' : '')}>
       {Children.toArray(props.children)}
     </A>
   );
 
   return <Wrapper className={props.className}>{button}</Wrapper>;
 }
 
 ButtonLink.propTypes = {
   href: PropTypes.string,
   onClick: PropTypes.func,
   children: PropTypes.node.isRequired,
 };
 
 export default ButtonLink;
 