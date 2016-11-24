const component = require('./index');
const templateStr = require('!raw!./index');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    content0: {
      style: {
        backgroundImage: {
          value: 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
          remark: '尺寸参考:1920*1080',
          name: '背景图片',
        },
        backgroundAttachment: {
          value: 'fixed',
          name: '背景锁定',
          remark: '背景不随滚动条滚动',
        },
        height: {
          name: '区块高度',
          value: '100vh',
          calc: true, // 如果是在导航后第一个区块，是否减去导航高度
          remark: '请填写上单位 "px" 或 "vh"',
        },
        textAlign: {
          name: '文字元素居中',
          value: 'center',
          remark: '子级居中对齐',
        },
      },
    },
    content0_wrapper: {
      style: {
        width: {
          value: '550px',
          name: '宽度',
          remark: '内容区块的宽度',
        },
        top: {
          value: '20%',
          name: '距顶部位置',
          remark: '请填写上单位 "px" 或 "%" ',
        },
        left: {
          value: '50%',
          name: '距左边位置',
          remark: '请填写上单位 "px" 或 "%" ',
        },
        margin: {
          value: '0 0 0 -275px',
          name: '边框距离',
          remark: '宽为550px, -275px 为居中',
          length: 4,
        },
      },
    },
    content0_title: {
      style: {
        width: {
          value: '350px',
          name: '宽度',
        },
        padding: {
          value: '0 0 0 30px',
          name: 'padding 位置',
          remark: '为调整图片位置; 第一行为上右, 第二行为下左',
          length: 4,
        },
        margin: {
          value: 'auto',
          name: 'margin 位置',
          remark: '为调整图片位置; 第一行为上右, 第二行为下左',
          length: 4,
        },
        fontSize: {
          value: '40px',
          name: '文字大小',
          remark: '如是图片不需要设置',
        },
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        name: '图片或标题',
        remark: '如果不是图片结尾将自动转换成标题',
      },
    },
    content0_content: {
      style: {
        fontSize: {
          value: '14px',
          name: '文字大小',
        },
        color: {
          value: '#ffffff',
          name: '文字颜色',
        },
      },
      children: {
        value: '一个高效的页面动画解决方案',
        name: '广告语',
      },
    },
    content0_button: {
      children: {
        value: 'Learn More',
        name: '按钮文字',
      },
    },
  },
};
