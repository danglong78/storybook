import React from 'react';

import RoundedImg from './RoundedImg';
import imgAvatar from './anonymous.jpg';

function Avatar(props) {
  const mAvatar =
    props.source && props.source !== 'default-avatar.jpg' ? props.source : imgAvatar;

  return <RoundedImg src={mAvatar} alt="User Avatar" width={props.width} />;
}

export default Avatar;
