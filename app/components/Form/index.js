/**
 *
 * Form
 *
 */

import React, { Children, useState }  from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/LoadingIndicator';
import Wrapper from './Wrapper';
import WrapperLoading from './WrapperLoading';
function Form(props) {
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);
    props.mySubmit ? props.mySubmit(e) : '';
  }

  return <Wrapper><form onSubmit={handleSubmit} noValidate>{Children.toArray(props.children)} {isSubmit ? <WrapperLoading><Loading /></WrapperLoading> : ''} </form></Wrapper>;
}
 
Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
 