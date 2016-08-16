const path = require('path');
module.exports = {
  source: [
    './cases',
    './language',
    './components',
  ],
  output: './_site',

  entry: {
    index: {
      theme: './src/theme',
      htmlTemplate: './src/theme/static/index.html',
    },
    templates: {
      theme: './src/templates',
      htmlTemplate: './src/templates/static/index.html',
    },
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd',
    //'./src/bisheng-plugin-antm',
  ],
  webpackConfig(config) {
    config.resolve.alias = {
      'react-router': 'react-router/umd/ReactRouter',
    };
    return config;
  },
  port: 8111,
};
