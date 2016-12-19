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
    content9: {
      style: {
        height: {
          value: '500px',
          name: '区块高度',
        },
        ...bgStyle(),
        ...borderStyle(),
      },
    },
    content9_title: {
      style: {
        width: {
          value: '100%',
          name: '区块宽度',
        },
        top: {
          value: '15%',
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
        value: '产品与服务',
      },
    },
    content9_contentWrapper: {
      style: {
        width: {
          value: '100%',
          name: '区块宽度',
        },
        top: {
          value: '25%',
          name: '顶部距离',
        },
        margin: {
          value: '0',
          name: 'margin',
          length: 4,
        },
        padding: {
          value: '20px 0',
          name: 'padding',
          length: 4,
        },
      },
    },
    content9_block0: {
      name: '外框样式',
      style: {
        width: {
          value: '33.33%',
          name: '区块宽度',
        },
        padding: {
          value: '0 4%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        icon: {
          name: 'icon 区块',
          style: {
            width: {
              value: '100px',
              name: 'icon宽度',
            },
            height: {
              value: '100px',
              name: 'icon高度',
            },
            margin: {
              value: 'auto',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            name: 'icon地址',
          },
        },
        title: {
          name: '标题区块',
          style: {
            ...textStyle({
              size: '14px',
              align: 'center',
            }),
            margin: {
              value: '10px 0',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: '一站式业务接入',
            name: '标题名称',
          },
        },
        content: {
          name: '内容区块',
          style: {
            ...textStyle({
              align: 'center',
            }),
          },
          children: {
            value: '支付、结算、核算接入产品效率翻四倍',
            name: '区块内容',
          },
        },
      },
    },
    content9_block1: {
      name: '外框样式',
      style: {
        width: {
          value: '33.33%',
          name: '区块宽度',
        },
        padding: {
          value: '0 4%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        icon: {
          name: 'icon 区块',
          style: {
            width: {
              value: '100px',
              name: 'icon宽度',
            },
            height: {
              value: '100px',
              name: 'icon高度',
            },
            margin: {
              value: 'auto',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            name: 'icon地址',
          },
        },
        title: {
          name: '标题区块',
          style: {
            ...textStyle({
              size: '14px',
              align: 'center',
            }),
            margin: {
              value: '10px 0',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: '一站式事中风险监控',
            name: '标题名称',
          },
        },
        content: {
          name: '内容区块',
          style: {
            ...textStyle({
              align: 'center',
            }),
          },
          children: {
            value: '在所有需求配置环节事前风险控制和质量控制能力',
            name: '区块内容',
          },
        },
      },
    },
    content9_block2: {
      name: '外框样式',
      style: {
        width: {
          value: '33.33%',
          name: '区块宽度',
        },
        padding: {
          value: '0 4%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        icon: {
          name: 'icon 区块',
          style: {
            width: {
              value: '100px',
              name: 'icon宽度',
            },
            height: {
              value: '100px',
              name: 'icon高度',
            },
            margin: {
              value: 'auto',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            name: 'icon地址',
          },
        },
        title: {
          name: '标题区块',
          style: {
            ...textStyle({
              size: '14px',
              align: 'center',
            }),
            margin: {
              value: '10px 0',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: '一站式数据运营',
            name: '标题名称',
          },
        },
        content: {
          name: '内容区块',
          style: {
            ...textStyle({
              align: 'center',
            }),
          },
          children: {
            value: '沉淀产品接入效率和运营小二工作效率数据',
            name: '区块内容',
          },
        },
      },
    },
  },
};

