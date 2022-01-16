const path = require('path');
const custom = require('../internals/webpack/webpack.dev.babel');

const baseDir = path.resolve(__dirname, '../app');

module.exports = {
  stories: [
    '../app/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../app/components/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-react-intl',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.concat(custom.module.rules);
    config.resolve.modules.push(baseDir);

    // Return the altered config
    return config;
  },
};
