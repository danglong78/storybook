/**
 * A Input to a certain page, an anchor tag
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LINK_COLOR } from 'constants/styles';
import isValid from 'utils/validator';

import mMessages from './messages';
import Wrapper from './Wrapper';
import Validation from './Validation';

const Control = styled.input`
  color: ${LINK_COLOR};
  text-decoration: none;
  background: rgba(159, 154, 203, 0.2);
  border: 0px;
  border-radius: 16px;
  padding: 20px 24px;
  width: 100%;

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

function Input(props) {
  const {value, type, messages} = props;
  const [inputError, setInputError] = useState('');
  const [inputValue, setInputValue] = useState(value ? value : (inputValue ? inputValue : ''));
  // Clear value
  if(props.clear && inputValue){
    setInputValue('');
  }

  const handleKeypress = e => {
    if (e.charCode === 13) {
      // Call Back
      props.pressKey ? props.pressKey() : '';
    }
  };

  const handleInputChange = event => {
    const mValue = event.target.value;
    let mType = type;
    let mError = '';

    if (mValue && !props.novalidate) {
      if (type == 'text' && props.name.includes('name')) {
        mType = 'name';
      }

      if (!isValid(mType,mValue)) {
        mError = mMessages[mType];
      }
      
    } else if (props.required && !mValue) {
      mError = mMessages.required;
    }

    setInputError(mError);
    setInputValue(mValue);

    // Call Back
    props.isError ? props.isError(mError) : '';
    props.isChange ? props.isChange(mValue) : '';
  };

  return (
    <Wrapper>
      <FormattedMessage {...messages}>
        {msg => (
          <Control
            onChange={handleInputChange}
            onKeyPress={handleKeypress}
            placeholder={msg}
            value={inputValue}
            {...props}
          />
        )}
      </FormattedMessage>
      {inputError && (
        <Validation>
          <FormattedMessage {...inputError} />
        </Validation>
      )}
    </Wrapper>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
