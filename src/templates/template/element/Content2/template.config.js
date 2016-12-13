const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');
const bgStyle = require('../../bgStyleData');
const borderStyle = require('../../borderStyleData');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    content2: {
      style: {
        height: {
          value: '50vh',
          name: '区块高度',
          remark: '请填写上单位 "px" 或 "%" ',
        },
        backgroundColor: {
          value: '#fff',
          name: '背景颜色',
        },
        backgroundImage: {
          name: '背景图片',
          value: '',
          remark: '尺寸参考:1920*1080',
        },
        ...bgStyle,
        ...borderStyle,
      },
    },
    content2_imgWrapper: {
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
    content2_img: {
      style: {
        width: {
          value: '55%',
          name: '图片宽度',
        },
        right: {
          value: '10%',
          name: '右边距离',
        },
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
        name: '图片展示',
        remark: '尺寸参考:268*296',
      },
    },
    content2_textWrapper: {
      style: {
        width: {
          value: '55%',
          name: '区块宽度',
        },
        margin: {
          value: '0 0 0 5%',
          name: 'margin',
          length: 4,
          remark: '为调整区块位置; 第一行为上右, 第二行为下左; 必须加单位',
        },
      },
    },
    content2_title: {
      style: {
        width: {
          value: '75%',
          name: '区块宽度',
        },
        textAlign: {
          value: 'left',
          name: '文字对齐',
          select: ['center', 'left', 'right', 'start', 'end'],
        },
        color: {
          value: '#404040',
          name: '文字颜色',
        },
        fontSize: {
          value: '32px',
          name: '文字大小',
        },
      },
      children: {
        name: '标题名称',
        value: '企业资源管理',
      },
    },
    content2_content: {
      style: {
        width: {
          value: '75%',
          name: '区块宽度',
        },
        textAlign: {
          value: 'left',
          name: '文字对齐',
          select: ['center', 'left', 'right', 'start', 'end'],
        },
        color: {
          value: '#666',
          name: '文字颜色',
        },
        fontSize: {
          value: '12px',
          name: '文字大小',
        },
      },
      children: {
        name: '详细说明',
        value: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。' +
        '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。' +
        '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
      },
    },
  },
};
