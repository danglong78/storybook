/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';

import { appLocales } from 'i18n';
import Lang from 'components/Lang';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import Wrapper from './Wrapper';
import Inner from './Inner';
import messages from './messages';

export function LocaleToggle(props) {
  return (
    <Wrapper>
      <Inner>
        <Lang
          // value={props.locale}
          value="vi"
          values={['vi', 'en']}
          // onToggle={props.onLocaleToggle}
          messages={messages}
        />
      </Inner>
    </Wrapper>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

// const mapStateToProps = createSelector(
//   makeSelectLocale(),
//   locale => ({
//     locale,
//   }),
// );

// export function mapDispatchToProps(dispatch) {
//   return {
//     onLocaleToggle: evt => dispatch(changeLocale(evt)),
//     dispatch,
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(LocaleToggle);
