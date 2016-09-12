const component = require('./index');
const templateStr = require('!raw!./index');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: '80px',
      remark: '请填写上单位 "px" 或 "%" ',
    },
    {
      key: 'copyright',
      name: '内容区块',
      value: {
        content: {
          name: '版权信息',
          value: 'Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
        },
      },
    },
  ],
};
