const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');
const style = require('../../utils-style');

const bgStyle = style.bgStyleData;
const borderStyle = style.borderStyleData;

export default {
  component,
  templateStr,
  less,
  dataSource: {
    all: true,
    content1: {
      name: '整个区块',
      style: {
        height: {
          value: '100vh',
          name: '区块高度',
          remark: '请填写上单位 "px" 或 "vh", 如果在第一屏且导航位置为 relative, 一屏为 calc(100vh - 64px)',
        },
        ...borderStyle(),
      },
    },
    content1_block0: {
      children: {
        bg: {
          name: '第一屏背景',
          style: {
            ...bgStyle({
              image: 'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
            }),
          },
        },
        wrapper: {
          name: '第一屏文字区块外壳',
          style: {
            width: {
              value: '550px',
              name: '内容宽度',
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
            textAlign: {
              name: '文字对齐',
              value: 'center',
              select: ['center', 'left', 'right'],
            },
          },
        },
        title: {
          name: '第一屏标题',
          style: {
            width: {
              value: '350px',
              name: '当前宽度',
            },
            left: {
              value: '30px',
              name: '距左边位置',
            },
            fontSize: {
              value: '40px',
              name: '文字大小',
              remark: '如是图片不需要设置',
            },
            color: {
              value: '#ffffff',
              name: '文字颜色',
              remark: '如是图片不需要设置',
            },
            textAlign: {
              name: '文字对齐',
              value: 'center',
              select: ['center', 'left', 'right'],
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
            name: '图片标题',
            remark: '如果不是图片结尾将自动转换成标题',
          },
        },
        content: {
          name: '第一屏内容',
          style: {
            fontSize: {
              value: '14px',
              name: '文字大小',
            },
            color: {
              value: '#ffffff',
              name: '文字颜色',
            },
            textAlign: {
              name: '文字对齐',
              value: 'center',
              select: ['center', 'left', 'right'],
            },
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
        button: {
          name: '第一屏按钮',
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
    },
    content1_block1: {
      children: {
        bg: {
          name: '第二屏背景',
          style: {
            ...bgStyle({
              image: 'https://zos.alipayobjects.com/rmsportal/xHxWkcvaIcuAdQl.jpg',
            }),
          },
        },
        wrapper: {
          name: '第二屏文字区块外壳',
          style: {
            width: {
              value: '550px',
              name: '内容宽度',
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
            textAlign: {
              name: '文字对齐',
              value: 'center',
              select: ['center', 'left', 'right'],
            },
          },
        },
        title: {
          name: '第二屏标题',
          style: {
            width: {
              value: '350px',
              name: '当前宽度',
            },
            left: {
              value: '30px',
              name: '距左边位置',
            },
            fontSize: {
              value: '40px',
              name: '文字大小',
              remark: '如是图片不需要设置',
            },
            color: {
              value: '#ffffff',
              name: '文字颜色',
              remark: '如是图片不需要设置',
            },
            textAlign: {
              name: '文字对齐',
              value: 'center',
              select: ['center', 'left', 'right'],
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
            name: '图片标题',
            remark: '如果不是图片结尾将自动转换成标题',
          },
        },
        content: {
          name: '第二屏内容',
          style: {
            fontSize: {
              value: '14px',
              name: '文字大小',
            },
            color: {
              value: '#ffffff',
              name: '文字颜色',
            },
            textAlign: {
              name: '文字对齐',
              value: 'center',
              select: ['center', 'left', 'right'],
            },
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
        button: {
          name: '第二屏按钮',
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
    },
  },
};
