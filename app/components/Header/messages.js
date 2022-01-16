/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  hlink1: {
    id: `${scope}.hlink1`,
    defaultMessage: 'Home',
  },
  hlink2: {
    id: `${scope}.hlink2`,
    defaultMessage: 'Skygate Metaverse',
  },
  hlink3: {
    id: `${scope}.hlink3`,
    defaultMessage: 'Sản Phẩm',
  },
  hlink4: {
    id: `${scope}.hlink4`,
    defaultMessage: 'Tin Tức',
  },
  hlink5: {
    id: `${scope}.hlink5`,
    defaultMessage: 'Liên Hệ',
  },
});
