
const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({
  source: {},
  output: './_site/edit',
  root: '/edit/',
  entryName: 'edit',
  theme: './src/edit',
  htmlTemplate: './src/edit/static/index.html',
  port: 8112,
}, commonConfig);
