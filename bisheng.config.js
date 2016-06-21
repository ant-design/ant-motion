const path = require('path');
module.exports = {
  source: [
    './cases',
    './language',
    './components',
  ],
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
  output: './_site',
  theme: './src/theme',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-react?lang=__react',
    './src/bisheng-plugin-antm',
  ],
  webpackConfig(config){
    config.babel.plugins.push([
      require.resolve('babel-plugin-antd'),
      {
        style: true,
      },
    ]);

    return config;
  },
  port: 8111,
};
