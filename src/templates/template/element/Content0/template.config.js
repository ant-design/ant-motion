const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');
const style = require('../../utils-style');

const bgStyle = style.bgStyleData;
const borderStyle = style.borderStyleData;
const textStyle = style.textStyleData;

export default {
  component,
  templateStr,
  less,
  dataSource: {
    content0: {
      style: {
        height: {
          name: '区块高度',
          value: '100vh',
          remark: '请填写上单位 "px" 或 "vh", 如果在第一屏且导航位置为 relative, 一屏为 calc(100vh - 64px)',
        },
        textAlign: {
          name: '内容对齐',
          value: 'center',
          select: ['center', 'left', 'right'],
        },
        ...bgStyle({
          image: 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
          attachment: 'fixed',
        }),
        ...borderStyle(),
      },
    },
    content0_wrapper: {
      style: {
        width: {
          value: '550px',
          name: '内容宽度',
          remark: '请填写上单位 "px" 或 "%" ',
        },
        top: {
          value: '20%',
          name: '距顶部位置',
          remark: '请填写上单位 "px" 或 "%" ',
        },
        left: {
          value: '0',
          name: '距左边位置',
        },
        right: {
          value: '0',
          name: '距右边位置',
        },
        margin: {
          value: 'auto',
          select: ['auto', 'inherit'],
          name: 'margin',
        },
      },
    },
    content0_title: {
      style: {
        width: {
          value: '350px',
          name: '当前宽度',
          remark: '请填写上单位 "px" 或 "%" ',
        },
        left: {
          value: '30px',
          name: '距左边位置',
        },
        fontSize: {
          value: '40px',
          name: '文字大小',
          remark: '如是图片不需要设置, 请填写上单位 "px" 或 "%" ',
        },
        color: {
          value: '#ffffff',
          name: '文字颜色',
          remark: '如是图片不需要设置',
        },
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        name: '图片标题',
        remark: '如果不是图片结尾将自动转换成标题',
      },
    },
    content0_content: {
      style: {
        ...textStyle({
          size: '14px',
          color: '#fff',
          align: 'center',
        }),
        margin: {
          name: 'margin',
          value: '0px 0px 20px 0px',
          length: 4,
        },
      },
      children: {
        value: '一个高效的页面动画解决方案',
        name: '广告语',
      },
    },
    content0_button: {
      style: {
        color: {
          value: '#ffffff',
          name: '文字颜色',
        },
        backgroundColor: {
          value: 'transparent',
          name: '按钮颜色',
        },
        borderColor: {
          value: '#fff',
          name: '描边颜色',
        },
      },
      children: {
        value: 'Learn More',
        name: '按钮文字',
      },
    },
  },
};
