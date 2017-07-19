const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({
  source: {},
  output: './_site/templates',
  root: '/templates/',
  entryName: 'templates',
  theme: './src/templates',
  htmlTemplate: './src/templates/static/index.html',
  port: 8113,
}, commonConfig);
