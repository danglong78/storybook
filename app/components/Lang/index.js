/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { DEFAULT_LOCALE } from 'i18n';

// Components
import Flag from './Flag';
import Arrow from './Arrow';
// Images
import IcoVi from './language-vi.svg';
import IcoEn from './language-en.svg';
import IcoArrow from './arrow-down.svg';

function Lang(props) {
  const { formatMessage } = props.intl;
  const imgLangs = {
    vi: IcoVi,
    en: IcoEn,
  };
  const mLocale = props.value ? props.value : DEFAULT_LOCALE;
  const imgLang = imgLangs[props.value];

  let content = '';
  if (props.values) {
    content = props.values.map((value, i) => (
      <li key={i}
        onClick={() => props.onToggle(value)}
        className={value === props.value ? 'active' : 'inactive'}
      >
        <Flag src={imgLangs[value]} alt={value} /> 
        {props.messages ? formatMessage(props.messages[value]) : value}
      </li>
    ));
  }

  return (
    <ul>
      <li>
        <Flag src={imgLang} alt="Lang - icon" /> 
        {props.messages ? formatMessage(props.messages[mLocale]) : mLocale}
        <Arrow src={IcoArrow} alt="Arrow - icon" />
        <ul>{content}</ul>
      </li>
    </ul>
  );
}

Lang.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default injectIntl(Lang);
