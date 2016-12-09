const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    nav1: {
      style: {
        height: {
          value: '64px',
          name: '区块高度',
        },
        backgroundColor: {
          value: 'rgba(51, 51, 51, 0.95)',
          name: '背景颜色',
        },
        boxShadow: {
          value: '0 5px 8px rgba(0,0,0,0.15)',
          name: '区块阴影',
          remark: '参数从左到右: x y blur color, 参数之间都需要空格;',
          length: 4,
        },
        position: {
          value: 'relative', // 方便第一屏不用设 calc，直接用 absolute;
          select: ['relative', 'absolute', 'fixed'],
          name: '导航位置',
          remark: '参数为： "relative", "absolute", "fixed"; "fixed" 为始终浮在窗口；',
        },
        top: {
          value: '0',
          name: '顶部距离',
        },
      },
    },
    nav1_logo: {
      style: {
        left: {
          value: '4%',
          name: '左边距离',
          remark: '请填写上单位 "px" 或 "%"',
        },
        width: {
          value: '150px',
          name: '图片宽度',
          remark: '请填写上单位 "px" 或 "%"',
        },
        lineHeight: {
          value: '64px',
          name: '区块行高',
          remark: '图片垂直居中, 每行的行高',
        },
      },
      children: {
        value: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        name: 'logo 图片',
      },
    },
    nav1_user: {
      style: {
        margin: {
          name: 'margin',
          value: '0 4% 0 0',
          remark: 'margin 边距，右边留 4%',
          length: 4,
        },
        lineHeight: {
          name: '文字行高',
          value: '62px',
          remark: '请填写上单位 "px" 或 "%"',
        },
        height: {
          name: '区块高度',
          value: '64px',
          remark: '请填写上单位 "px" 或 "%"',
        },
      },
    },
    nav1_menu: {
      style: {
        color: {
          value: '#fff',
          name: '字体颜色',
        },
        backgroundColor: {
          value: 'transparent',
          name: '背景颜色',
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
