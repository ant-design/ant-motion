const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');
const bgStyle = require('../../bgStyleData');
const borderStyle = require('../../borderStyleData');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    content4: {
      style: {
        height: {
          name: '区块高度',
          value: '100vh',
          remark: '请填写上单位 "px" 或 "vh", 如果在第一屏且导航没加 fixed, 一屏为 calc(100vh - 64px)',
        },
        backgroundColor: {
          value: '#fff',
          name: '背景颜色',
        },
        backgroundImage: {
          name: '背景图片',
          value: '',
          remark: '尺寸参考:1920*1080',
        },
        ...bgStyle,
        ...borderStyle,
      },
    },
    content4_title: {
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
    content4_titleContent: {
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
        maxWidth: {
          value: '600px',
          name: '最大宽度',
        },
      },
      children: {
        value: '基于阿里云强大的基础资源',
        name: '说明内容',
      },
    },
    content4_block0: {
      style: {
        padding: {
          value: '6% 5% 0 5%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        icon: {
          name: 'icon区块',
          style: {
            width: {
              value: '15%',
              name: 'icon宽度',
              remark: '需要与文字区块的宽度关联',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
            name: 'icon图片',
            remark: '尺寸参考:40*40',
          },
        },
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '32px',
              name: '文字大小',
            },
            color: {
              value: '#404040',
              name: '文字颜色',
            },
          },
          children: {
            value: '企业资源管理',
            name: '标题文字',
          },
        },
        content: {
          name: '内容区块',
          style: {
            fontSize: {
              value: '12px',
              name: '文字大小',
            },
            color: {
              value: '#666',
              name: '文字颜色',
            },
          },
          children: {
            value: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
            name: '详细说明',
          },
        },
      },
    },
    content4_block1: {
      style: {
        padding: {
          value: '6% 5% 0 5%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        icon: {
          name: 'icon区块',
          style: {
            width: {
              value: '15%',
              name: 'icon宽度',
              remark: '需要与文字区块的宽度关联',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
            name: 'icon图片',
            remark: '尺寸参考:40*40',
          },
        },
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '32px',
              name: '文字大小',
            },
            color: {
              value: '#404040',
              name: '文字颜色',
            },
          },
          children: {
            value: '云安全',
            name: '标题文字',
          },
        },
        content: {
          name: '内容区块',
          style: {
            fontSize: {
              value: '12px',
              name: '文字大小',
            },
            color: {
              value: '#666',
              name: '文字颜色',
            },
          },
          children: {
            value: '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
            name: '详细说明',
          },
        },
      },
    },
    content4_block2: {
      style: {
        padding: {
          value: '6% 5% 0 5%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        icon: {
          name: 'icon区块',
          style: {
            width: {
              value: '15%',
              name: 'icon宽度',
              remark: '需要与文字区块的宽度关联',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
            name: 'icon图片',
            remark: '尺寸参考:40*40',
          },
        },
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '32px',
              name: '文字大小',
            },
            color: {
              value: '#404040',
              name: '文字颜色',
            },
          },
          children: {
            value: '云监控',
            name: '标题文字',
          },
        },
        content: {
          name: '内容区块',
          style: {
            fontSize: {
              value: '12px',
              name: '文字大小',
            },
            color: {
              value: '#666',
              name: '文字颜色',
            },
          },
          children: {
            value: '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
            name: '详细说明',
          },
        },
      },
    },
    content4_block3: {
      style: {
        padding: {
          value: '6% 5% 0 5%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        icon: {
          name: 'icon区块',
          style: {
            width: {
              value: '15%',
              name: 'icon宽度',
              remark: '需要与文字区块的宽度关联',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
            name: 'icon图片',
            remark: '尺寸参考:40*40',
          },
        },
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '32px',
              name: '文字大小',
            },
            color: {
              value: '#404040',
              name: '文字颜色',
            },
          },
          children: {
            value: '移动',
            name: '标题文字',
          },
        },
        content: {
          name: '内容区块',
          style: {
            fontSize: {
              value: '12px',
              name: '文字大小',
            },
            color: {
              value: '#666',
              name: '文字颜色',
            },
          },
          children: {
            value: '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
            name: '详细说明',
          },
        },
      },
    },
    content4_block4: {
      style: {
        padding: {
          value: '6% 5% 0 5%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        icon: {
          name: 'icon区块',
          style: {
            width: {
              value: '15%',
              name: 'icon宽度',
              remark: '需要与文字区块的宽度关联',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
            name: 'icon图片',
            remark: '尺寸参考:40*40',
          },
        },
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '32px',
              name: '文字大小',
            },
            color: {
              value: '#404040',
              name: '文字颜色',
            },
          },
          children: {
            value: '分布式中间件',
            name: '标题文字',
          },
        },
        content: {
          name: '内容区块',
          style: {
            fontSize: {
              value: '12px',
              name: '文字大小',
            },
            color: {
              value: '#666',
              name: '文字颜色',
            },
          },
          children: {
            value: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
            name: '详细说明',
          },
        },
      },
    },
    content4_block5: {
      style: {
        padding: {
          value: '6% 5% 0 5%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        icon: {
          name: 'icon区块',
          style: {
            width: {
              value: '15%',
              name: 'icon宽度',
              remark: '需要与文字区块的宽度关联',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
            name: 'icon图片',
            remark: '尺寸参考:40*40',
          },
        },
        title: {
          name: '标题区块',
          style: {
            fontSize: {
              value: '32px',
              name: '文字大小',
            },
            color: {
              value: '#404040',
              name: '文字颜色',
            },
          },
          children: {
            value: '大数据',
            name: '标题文字',
          },
        },
        content: {
          name: '内容区块',
          style: {
            fontSize: {
              value: '12px',
              name: '文字大小',
            },
            color: {
              value: '#666',
              name: '文字颜色',
            },
          },
          children: {
            value: '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
            name: '详细说明',
          },
        },
      },
    },
  },
};
