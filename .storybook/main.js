module.exports = {
  stories: ['../stories/index.js'],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'), // eslint-disable-line global-require
        },
      },
    },
  ]
};
