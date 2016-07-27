const path = require('path');
module.exports = {
  source: [
    './cases',
    './language',
    './components',
  ],
  output: './_site',
  theme: './src/theme',
  htmlTemplate: './index.html',
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
