let point = require('!raw!./point.less');
point = point.replace('../../../static/custom.less', './custom.less');
const antD = require('!raw!./ant-d.less');
const common = require('!raw!./common.less');
const custom = require('!raw!./custom.less');
const content = require('!raw!./content.less');
export default {
  'ant-d': antD,
  common,
  custom,
  point,
  content,
};
