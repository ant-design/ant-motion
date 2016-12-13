const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    footer0: {
      style: {
        height: {
          value: '80px',
          name: '区块高度',
        },
        backgroundColor: {
          name: '背景调整',
          value: '#333',
        },
      },
    },
    footer0_content: {
      style: {
        color: {
          value: '#666',
          name: '文字颜色',
        },
        lineHeight: {
          value: '60px',
          name: '文字行高',
        },
      },
      children: {
        value: 'Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
        name: '版权信息',
      },
    },
  },
};
