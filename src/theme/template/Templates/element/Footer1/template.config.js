const component = require('./index.jsx');
const templateStr = require('!raw!./index.jsx');
const less = require('!raw!./index.less');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/PEXAhbheOHVTyfM.jpg',
  component,
  templateStr,
  less,
  text: '带信息或链接的尾页',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: '400px',
      remark: '请填写上单位 "px" 或 "%" ',
    },
    {
      key: 'logo',
      name: 'logo区域',
      value: {
        logo: {
          name: 'logo图片',
          value: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        },
        content: {
          name: '标语',
          value: 'A efficient motion design solutions',
        },
      },
    },
    {
      key: 'block1',
      name: '产品',
      value: {
        title: {
          name: '标题',
          value: '产品',
        },
        content: {
          name: '链接名称',
          remark: '与下面的链接地址相对应。',
          value: '产品更新记录\nAPI文档\n快速入门\n参考指南',
        },
        contentLink: {
          name: '链接地址',
          value: '#\n#\n#\n#',
        },
      },
    },
    {
      key: 'block2',
      name: '关于',
      value: {
        title: {
          name: '标题',
          value: '关于',
        },
        content: {
          name: '链接名称',
          remark: '与下面的链接地址相对应。',
          value: 'FAQ\n联系我们',
        },
        contentLink: {
          name: '链接地址',
          value: '#\n#',
        },
      },
    },
    {
      key: 'block3',
      name: '资源',
      value: {
        title: {
          name: '标题',
          value: '资源',
        },
        content: {
          name: '链接名称',
          remark: '与下面的链接地址相对应。',
          value: 'Ant Design\nAnt Design Mobile\nAnt Cool\nAntD Library',
        },
        contentLink: {
          name: '链接地址',
          value: '#\n#\n#\n#',
        },
      },
    },
    {
      key: 'block4',
      name: '关注',
      value: {
        title: {
          name: '标题',
          value: '关注',
        },
        content: {
          name: '链接Icon',
          remark: '与下面的链接地址相对应。',
          value: `https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg
https://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg
https://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg
https://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg`,
        },
        contentLink: {
          name: '链接地址',
          value: '#\n#\n#\n#',
        },
      },
    },
    {
      key: 'copyright',
      name: '版权区块',
      value: {
        content: {
          name: '版权信息',
          value: 'Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
        },
      },
    },
  ],
};
