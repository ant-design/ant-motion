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
    content8: {
      style: {
        height: {
          value: '100vh',
          name: '区块高度',
        },
        ...bgStyle(),
        ...borderStyle(),
      },
    },
    content8_title: {
      style: {
        width: {
          value: '100%',
          name: '区块宽度',
        },
        top: {
          value: '10%',
          name: '顶部距离',
        },
        ...textStyle({
          size: '32px',
          color: '#404040',
          align: 'center',
          lineHeight: '48px',
        }),
        margin: {
          value: 'auto',
          name: 'margin',
          length: 4,
        },
      },
      children: {
        name: '标题文案',
        value: '蚂蚁金融云提供专业的服务',
      },
    },
    content8_content: {
      style: {
        ...textStyle({
          lineHeight: '24px',
        }),
        maxWidth: {
          value: '600px',
          name: '最大宽度',
        },
      },
      children: {
        name: '详细说明',
        value: '科技想象力，金融创造力',
      },
    },
    content8_block0: {
      children: {
        tag: {
          name: '标签编辑',
          children: {
            name: '标签文字',
            value: 'PHONE',
          },
        },
        icon: {
          name: '标签icon',
          children: {
            name: 'icon地址',
            value: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
          },
        },
        content: {
          name: '文字区块',
          children: {
            name: '详细内容',
            value: `<h3>技术</h3>
丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
<h3>融合</h3>
解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
<h3>开放</h3>
符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。`,
          },
        },
        img: {
          name: '内容图片',
          children: {
            name: '图片地址',
            value: 'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    },
    content8_block1: {
      children: {
        tag: {
          name: '标签编辑',
          children: {
            name: '标签文字',
            value: 'TABLET',
          },
        },
        icon: {
          name: '标签icon',
          children: {
            name: 'icon地址',
            value: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
          },
        },
        content: {
          name: '文字区块',
          children: {
            name: '详细内容',
            value: `<h3>技术</h3>
丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
<h3>融合</h3>
解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
<h3>开放</h3>
符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。`,
          },
        },
        img: {
          name: '内容图片',
          children: {
            name: '图片地址',
            value: 'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    },
    content8_block2: {
      children: {
        tag: {
          name: '标签编辑',
          children: {
            name: '标签文字',
            value: 'DESKTOP',
          },
        },
        icon: {
          name: '标签icon',
          children: {
            name: 'icon地址',
            value: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg',
          },
        },
        content: {
          name: '文字区块',
          children: {
            name: '详细内容',
            value: `<h3>技术</h3>
丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
<h3>融合</h3>
解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
<h3>开放</h3>
符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。`,
          },
        },
        img: {
          name: '内容图片',
          children: {
            name: '图片地址',
            value: 'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    },
  },
};

