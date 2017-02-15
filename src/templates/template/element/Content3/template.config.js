import {
  textStyle,
  bgStyle,
  borderStyle,
} from '../../utils-style';

const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    content3: {
      style: {
        height: {
          value: '50vh',
          name: '区块高度',
        },
        ...bgStyle({
          imageRemark: '图片尺寸参考： 1920*540',
        }),
        ...borderStyle(),
      },
    },
    content3_imgWrapper: {
      style: {
        width: {
          value: '40%',
          name: '区块宽度',
        },
        lineHeight: {
          value: '50vh',
          name: '区块行高',
          remark: '控制图片垂直居中元素',
        },
      },
    },
    content3_img: {
      style: {
        width: {
          value: '55%',
          name: '图片宽度',
        },
        left: {
          value: '10%',
          name: '左边距离',
        },
      },
      children: {
        name: '图片展示',
        value: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
        remark: '尺寸参考:268*290',
      },
    },
    content3_textWrapper: {
      style: {
        width: {
          value: '55%',
          name: '区块宽度',
        },
        margin: {
          value: '0 5% 0 0',
          name: 'margin',
          length: 4,
          remark: '为调整区块位置; 第一行为上右, 第二行为下左; 必须加单位',
        },
      },
    },
    content3_title: {
      style: {
        width: {
          value: '75%',
          name: '区块宽度',
        },
        ...textStyle({
          size: '32px',
          color: '#404040',
          align: 'left',
        }),
      },
      children: {
        name: '标题名称',
        value: '分布式中间件',
      },
    },
    content3_content: {
      style: {
        width: {
          value: '75%',
          name: '区块宽度',
        },
        ...textStyle({
          size: '12px',
          align: 'left',
        }),
      },
      children: {
        name: '详细说明',
        value: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。' +
        '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
      },
    },
  },
};
