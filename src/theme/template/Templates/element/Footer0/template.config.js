const component = require('./index.jsx');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/aJutnIvTFWkEAWj.jpg',
  component,
  text: '简单型页尾',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: 80,
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
