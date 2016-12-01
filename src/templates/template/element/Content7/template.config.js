const component = require('./index');
const templateStr = require('!raw!./index');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    content7: {
      style: {
        height: {
          value: '100vh',
          name: '区块高度',
        },
        background: {
          name: '背景调整',
          value: '#fff',
          remark: '当前属性为 background; 可添加图片，图片需加上 url("");',
        },
      },
    },
    content7_textWrapper: {
      style: {
        width: {
          value: '35%',
          name: '区块宽度',
        },
        margin: {
          value: '15% 5% 0',
          name: 'margin',
          length: 4,
        },
      },
    },
    content7_title: {
      style: {
        fontSize: {
          value: '32px',
          name: '文字大小',
        },
        color: {
          value: '#404040',
          name: '文字颜色',
        },
        lineHeight: {
          value: '48px',
          name: '文字行高',
        },
      },
      children: {
        value: '蚂蚁金融云提供专业的服务',
        name: '标题文字',
      },
    },
    content7_content: {
      style: {
        fontSize: {
          value: '12px',
          name: '文字大小',
        },
        color: {
          value: '#666',
          name: '文字颜色',
        },
        lineHeight: {
          value: '24px',
          name: '文字行高',
        },
      },
      children: {
        value: '基于阿里云计算强大的基础资源',
        name: '详细说明',
      },
    },
    content7_img: {
      style: {
        width: {
          value: '55%',
          name: '图片宽度',
        },
        margin: {
          value: '15% 0 0 0',
          name: 'margin',
          length: 4,
        },
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
        name: '图片地址',
      },
    },
    content7_block0: {
      style: {
        margin: {
          value: '8% 0 0',
          length: 4,
          name: 'margin',
        },
      },
      children: {
        img: {
          name: '图片区块',
          style: {
            width: {
              value: '30px',
              name: '图片宽度',
            },
            height: {
              value: '30px',
              name: '图片高度',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
            name: '图片地址',
          },
        },
        title: {
          name: '区块标题',
          style: {
            fontSize: {
              value: '14px',
              name: '文字大小',
            },
            color: {
              value: '#3e3e3e',
              name: '文字颜色',
            },
            margin: {
              value: '0 0 10px 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: '技术',
            name: '标题文字',
          },
        },
        content: {
          name: '区块内容',
          style: {
            fontSize: {
              value: '12px',
              name: '文字大小',
            },
            color: {
              value: '#666',
              name: '文字颜色',
            },
            margin: {
              value: '0 0 0 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            name: '详细说明',
            value: '丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
          },
        },
      },
    },
    content7_block1: {
      style: {
        margin: {
          value: '8% 0 0',
          length: 4,
          name: 'margin',
        },
      },
      children: {
        img: {
          name: '图片区块',
          style: {
            width: {
              value: '30px',
              name: '图片宽度',
            },
            height: {
              value: '30px',
              name: '图片高度',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
            name: '图片地址',
          },
        },
        title: {
          name: '区块标题',
          style: {
            fontSize: {
              value: '14px',
              name: '文字大小',
            },
            color: {
              value: '#3e3e3e',
              name: '文字颜色',
            },
            margin: {
              value: '0 0 10px 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: '融合',
            name: '标题文字',
          },
        },
        content: {
          name: '区块内容',
          style: {
            fontSize: {
              value: '12px',
              name: '文字大小',
            },
            color: {
              value: '#666',
              name: '文字颜色',
            },
            margin: {
              value: '0 0 0 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            name: '详细说明',
            value: '解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。\n解放业务及技术生产力，推动金融服务底层创新。',
          },
        },
      },
    },
    content7_block2: {
      style: {
        margin: {
          value: '8% 0 0',
          length: 4,
          name: 'margin',
        },
      },
      children: {
        img: {
          name: '图片区块',
          style: {
            width: {
              value: '30px',
              name: '图片宽度',
            },
            height: {
              value: '30px',
              name: '图片高度',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
            name: '图片地址',
          },
        },
        title: {
          name: '区块标题',
          style: {
            fontSize: {
              value: '14px',
              name: '文字大小',
            },
            color: {
              value: '#3e3e3e',
              name: '文字颜色',
            },
            margin: {
              value: '0 0 10px 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: '开发',
            name: '标题文字',
          },
        },
        content: {
          name: '区块内容',
          style: {
            fontSize: {
              value: '12px',
              name: '文字大小',
            },
            color: {
              value: '#666',
              name: '文字颜色',
            },
            margin: {
              value: '0 0 0 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            name: '详细说明',
            value: '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
          },
        },
      },
    },
  },
};
