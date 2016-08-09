const component = require('./index.jsx');
const templateStr = require('!raw!./index.jsx');
const less = require('!raw!./index.less');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/CXrFvvZqkMwMHZo.jpg',
  component,
  templateStr,
  less,
  text: '产品的特性介绍模块(图左)',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: '50%',
      remark: '请填写上单位 "px" 或 "%" ',
    },
    {
      key: 'block1',
      name: '内容区域',
      value: {
        img: {
          name: '图片',
          value: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
          remark: '尺寸参考:268*296',
        },
        title: {
          name: '标题',
          value: '企业资源管理',
        },
        content: {
          name: '详细说明',
          value: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。' +
          '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。' +
          '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
        },
      },
    },
  ],
};
