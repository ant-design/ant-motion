const component = require('./index.jsx');
const templateStr = require('!raw!./index.jsx');
const less = require('!raw!./index.less');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/WxCxyIKjMdCUUSJ.jpg',
  component,
  templateStr,
  less,
  text: '产品的特性介绍模块(图右)',
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
          value: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
          remark: '尺寸参考:268*290',
        },
        title: {
          name: '标题',
          value: '分布式中间件',
        },
        content: {
          name: '详细说明',
          value: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。' +
          '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
        },
      },
    },
  ],
};
