const component = require('./index');
const templateStr = require('!raw!./index');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    footer1: {
      style: {
        height: {
          value: '400px',
          name: '区块高度',
        },
        background: {
          name: '背景调整',
          value: '#333',
          blend: true,
          remark: '当前属性为 background; 可添加图片，图片需加上 url("");',
        },
      },
    },
    footer1_logo: {
      style: {
        width: {
          value: '20%',
          name: '区块宽度',
        },
        padding: {
          value: '10px',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        img: {
          name: '图片编辑',
          style: {
            width: {
              value: '80%',
              name: '图片宽度',
            },
            maxWidth: {
              value: '150px',
              name: '最大宽度',
            },
          },
          children: {
            name: '图片地址',
            value: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
          },
        },
        content: {
          name: '内容编辑',
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
              value: '16px',
              name: '文字行高',
            },
            margin: {
              value: '0',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            name: '标语文案',
            value: 'A efficient motion design solutions',
          },
        },
      },
    },
    footer1_block0: {
      style: {
        width: {
          value: '20%',
          name: '区块宽度',
        },
        padding: {
          value: '10px',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '24px',
              name: '文字大小',
            },
            color: {
              value: '#ccc',
              name: '文字颜色',
            },
          },
          children: {
            name: '标题名称',
            value: '产品',
          },
        },
        content: {
          name: '内容区块',
          children: {
            name: '文字内容',
            value: '产品更新记录\nAPI文档\n快速入门\n参考指南',
            remark: '与下面的链接地址相对应，一行一个',
          },
        },
        contentLink: {
          name: '内容链接',
          children: {
            name: '链接地址',
            value: '#\n#\n#\n#',
            remark: '与上面的文字内容相对应，一行一个',
          },
        },
      },
    },
    footer1_block1: {
      style: {
        width: {
          value: '20%',
          name: '区块宽度',
        },
        padding: {
          value: '10px',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '24px',
              name: '文字大小',
            },
            color: {
              value: '#ccc',
              name: '文字颜色',
            },
          },
          children: {
            name: '标题名称',
            value: '关于',
          },
        },
        content: {
          name: '内容区块',
          children: {
            name: '文字内容',
            value: 'FAQ\n联系我们',
            remark: '与下面的链接地址相对应，一行一个',
          },
        },
        contentLink: {
          name: '内容链接',
          children: {
            name: '链接地址',
            value: '#\n#',
            remark: '与上面的文字内容相对应，一行一个',
          },
        },
      },
    },
    footer1_block2: {
      style: {
        width: {
          value: '20%',
          name: '区块宽度',
        },
        padding: {
          value: '10px',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '24px',
              name: '文字大小',
            },
            color: {
              value: '#ccc',
              name: '文字颜色',
            },
          },
          children: {
            name: '标题名称',
            value: '资源',
          },
        },
        content: {
          name: '内容区块',
          children: {
            name: '文字内容',
            value: 'Ant Design\nAnt Design Mobile\nAnt Cool\nAntD Library',
            remark: '与下面的链接地址相对应，一行一个',
          },
        },
        contentLink: {
          name: '内容链接',
          children: {
            name: '链接地址',
            value: '#\n#\n#\n#',
            remark: '与上面的文字内容相对应，一行一个',
          },
        },
      },
    },
    footer1_block3: {
      style: {
        width: {
          value: '20%',
          name: '区块宽度',
        },
        padding: {
          value: '10px',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '24px',
              name: '文字大小',
            },
            color: {
              value: '#ccc',
              name: '文字颜色',
            },
          },
          children: {
            name: '标题名称',
            value: '关注',
          },
        },
        content: {
          name: '内容区块',
          children: {
            name: '图片地址',
            value: `https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg
 https://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg
 https://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg
 https://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg`,
            remark: '与下面的链接地址相对应，一行一个',
          },
        },
        contentLink: {
          name: '内容链接',
          children: {
            name: '链接地址',
            value: '#\n#\n#\n#',
            remark: '与上面的文字内容相对应，一行一个',
          },
        },
      },
    },
    footer1_content: {
      style: {
        color: {
          value: '#666',
          name: '文字颜色',
        },
        lineHeight: {
          value: '60px',
          name: '文字行高',
        },
        height: {
          value: '80px',
          name: '区块高度',
        },
      },
      children: {
        name: '版权信息',
        value: 'Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
      },
    },
  },
};
