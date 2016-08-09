const component = require('./index.jsx');
const templateStr = require('!raw!./index.jsx');
const less = require('!raw!./index.less');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/yNbeUIWcDNZFKTY.jpg',
  component,
  templateStr,
  less,
  text: '产品的一个功能模块有多个特性介绍点',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: '100%',
      remark: '请填写上单位 "px" 或 "%" ',
    },
    {
      key: 'title',
      name: '标题',
      value: {
        title: {
          name: '标题',
          value: '蚂蚁金融云提供专业的服务',
        },
        content: {
          name: '说明',
          value: '基于阿里云计算强大的基础资源',
        },
      },
    },
    {
      key: 'img',
      name: '右边图片',
      value: {
        img: {
          name: '图片地址',
          value: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
        },
      },
    },
    {
      key: 'block1',
      name: '例案区域',
      value: {
        img: {
          name: '案例logo',
          value: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        },
        title: {
          name: '标题',
          value: '技术',
        },
        content: {
          name: '文字说明',
          value: '丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
        },
      },
    },
    {
      key: 'block2',
      name: '例案区域',
      value: {
        img: {
          name: '案例logo',
          value: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: {
          name: '标题',
          value: '融合',
        },
        content: {
          name: '文字说明',
          value: '解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。\n解放业务及技术生产力，推动金融服务底层创新。',
        },
      },
    },
    {
      key: 'block3',
      name: '例案区域',
      value: {
        img: {
          name: '案例logo',
          value: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          name: '标题',
          value: '开发',
        },
        content: {
          name: '文字说明',
          value: '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        },
      },
    },
  ],
};
