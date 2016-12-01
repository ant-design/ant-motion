const component = require('./index');
const templateStr = require('!raw!./index');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    nav0: {
      style: {
        height: {
          value: '64px',
          name: '区块高度',
        },
        background: {
          value: 'reba(51, 51, 51, 0.95)',
          name: '背景编辑',
          remark: '颜色或图片，图片请加上 url("");',
        },
        boxShadow: {
          value: '0 5px 8px rgba(0,0,0,0.15)',
          name: '区块阴影',
          remark: '参数从左到右: x y blur color, 参数之间都需要空格;',
        },
        position: {
          value: 'relative',
          name: '导航位置',
          remark: '参数为： "relative", "absolute", "fixed"; "fixed" 为始终浮在窗口；',
        },
      },
    },
    nav0_logo: {
      style: {
        top: {
          value: '50%',
          name: '顶部距离',
          remark: '请填写上单位 "px" 或 "%"',
        },
        left: {
          value: '4%',
          name: '左边距离',
          remark: '请填写上单位 "px" 或 "%"',
        },
        margin: {
          value: '-16px 0 0 0',
          name: 'margin',
          remark: 'margin 边距',
          length: 4,
        },
        height: {
          value: '33px',
          name: '图片高度',
          remark: '请填写上单位 "px" 或 "%"',
        },
      },
      children: {
        value: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        name: 'logo 图片',
      },
    },
    nav0_menu: {
      style: {
        color: {
          value: '#fff',
          name: '字体颜色',
          remark: '格式为：#000000 或 rgba(0,0,0,1)',
        },
        backgroundColor: {
          value: 'transparent',
          name: '背景颜色',
          remark: '格式为：#000000 或 rgba(0,0,0,1)',
        },
        lineHeight: {
          value: '62px',
          name: '文字行高',
          remark: '请填写上单位 "px" 或 "%"',
        },
        height: {
          value: '100%',
          name: '区块高度',
          remark: '请填写上单位 "px" 或 "%"',
        },
      },
      children: {
        menu1: {
          name: '导航一',
          value: '导航一',
        },
        menu2: {
          name: '导航二',
          value: '导航二',
        },
        menu3: {
          name: '导航三',
          value: '导航三',
        },
        menu4: {
          name: '导航四',
          value: '导航四',
        },
      },
    },
  },
};
