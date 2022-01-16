export const PRI_COLOR = '#2F4797';
export const LIGHT_PRI_COLOR = '#9F9ACB';
export const DARK_PRI_COLOR = '#2C3677';
export const LIGHT_COLOR = '#FFF';
export const DARK_COLOR = '#000';
export const PRI_FONTCOLOR = '#1C1C28';
export const ACTIVE_COLOR = '#F6A422';
export const INACTIVE_COLOR = '#ddd';
export const LINK_COLOR = '#14142B';
export const GAP_ELEMENT = '15';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};