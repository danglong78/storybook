import { createGlobalStyle } from 'styled-components';

import FontWoff from './SVNGilroyLight/SVNGilroy.woff';
import FontTtf from './SVNGilroyLight/SVNGilroy.ttf';
import FontEot from './SVNGilroyLight/SVNGilroy.eot';
import FontSvg from './SVNGilroyLight/SVNGilroy.svg';

export default createGlobalStyle`
    @font-face {
        font-family: 'SVN-Gilroy';
        src: url(${FontEot});
        src: local('☺'),
        url(${FontWoff}) format('woff'),
        url(${FontTtf}) format('truetype'),
        url(${FontSvg}) format('svg');
    }
`;