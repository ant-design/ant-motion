const component = require('./index');
const templateStr = require('!raw!./index');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    all: true,
    content1: {
      style: {
        height: {
          value: '100vh',
          name: '区块高度',
          remark: '请填写上单位 "px" 或 "vh", 如果在第一屏且导航没加 fixed, 一屏为 calc(100vh - 64px)',
        },
      },
    },
    content1_bg0: {
      name: '第一屏背景',
      style: {
        backgroundImage: {
          name: '背景图片',
          value: 'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
          remark: '尺寸参考:1920*1080',
        },
        backgroundSize: {
          value: 'cover',
          name: '背景大小',
          remark: 'css 里的参数，"contain", "cover"等参数',
        },
        backgroundPosition: {
          value: 'center',
          name: '背景对齐',
          remark: '参数有: left right center bottom top; 如需配置两个，请以空格格开',
        },
      },
    },
    content1_wrapper0: {
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
          value: '50%',
          name: '距左边位置',
          remark: '请填写上单位 "px" 或 "%" ',
        },
        margin: {
          value: '0 0 0 -275px',
          name: 'margin',
          remark: '宽为550px, -275px 为居中',
          length: 4,
        },
      },
    },
    content1_title0: {
      name: '第一屏标题',
      style: {
        width: {
          value: '350px',
          name: '当前宽度',
        },
        padding: {
          value: '0 0 0 30px',
          name: 'padding',
          remark: '为调整图片位置; 第一行为上右, 第二行为下左; 必须加单位',
          length: 4,
        },
        margin: {
          value: 'auto',
          name: 'margin',
          remark: '为调整图片位置; 第一行为上右, 第二行为下左; 必须加单位',
          length: 4,
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
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        name: '图片标题',
        remark: '如果不是图片结尾将自动转换成标题',
      },
    },
    content1_content0: {
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
      },
      children: {
        value: '一个高效的页面动画解决方案',
        name: '广告语',
      },
    },
    content1_button0: {
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
    content1_bg1: {
      name: '第二屏背景',
      style: {
        backgroundImage: {
          name: '背景图片',
          value: 'https://zos.alipayobjects.com/rmsportal/xHxWkcvaIcuAdQl.jpg',
          remark: '尺寸参考:1920*1080',
        },
        backgroundSize: {
          value: 'cover',
          name: '背景大小',
          remark: 'css 里的参数，"contain", "cover"等参数',
        },
        backgroundPosition: {
          value: 'center',
          name: '背景对齐',
          remark: '参数有: left right center bottom top; 如需配置两个，请以空格格开',
        },
      },
    },
    content1_wrapper1: {
      name: '第二屏文字区块外壳',
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
    content1_title1: {
      name: '第二屏标题',
      style: {
        width: {
          value: '350px',
          name: '当前宽度',
        },
        padding: {
          value: '0 0 0 30px',
          name: 'padding',
          remark: '为调整图片位置; 第一行为上右, 第二行为下左; 必须加单位',
          length: 4,
        },
        margin: {
          value: 'auto',
          name: 'margin',
          remark: '为调整图片位置; 第一行为上右, 第二行为下左; 必须加单位',
          length: 4,
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
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        name: '图片标题',
        remark: '如果不是图片结尾将自动转换成标题',
      },
    },
    content1_content1: {
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
      },
      children: {
        value: '一个高效的页面动画解决方案',
        name: '广告语',
      },
    },
    content1_button1: {
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
};
