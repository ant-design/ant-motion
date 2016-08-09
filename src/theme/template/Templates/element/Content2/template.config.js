const component = require('./index.jsx');
const templateStr = require('!raw!./index.jsx');
const less = require('!raw!./index.less');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/pUFfIJXizTljrgZ.jpg',
  component,
  templateStr,
  less,
  text: '产品有多个功能点介绍的场景',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: '100%',
      remark: '请填写上单位 "px" 或 "%" ',
    },
    {
      key: 'title',
      name: '标题文字',
      value: {
        title: {
          name: '标题',
          value: '蚂蚁金融云提供专业的服务',
        },
        content: {
          name: '说明内容',
          value: '基于阿里云强大的基础资源',
        },
      },
    },
    {
      key: 'block0',
      name: '内容区域1',
      value: {
        iconImg: {
          name: 'icon图片',
          value: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          remark: '尺寸参考:40*40',
        },
        title: {
          name: '标题',
          value: '企业资源管理',
        },
        content: {
          name: '详细说明',
          value: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
        },
      },
    },
    {
      key: 'block1',
      name: '内容区域2',
      value: {
        iconImg: {
          name: 'icon图片',
          value: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          remark: '尺寸参考:40*40',
        },
        title: {
          name: '标题',
          value: '云安全',
        },
        content: {
          name: '详细说明',
          value: '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
        },
      },
    },
    {
      key: 'block2',
      name: '内容区域3',
      value: {
        iconImg: {
          name: 'icon图片',
          value: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          remark: '尺寸参考:40*40',
        },
        title: {
          name: '标题',
          value: '云监控',
        },
        content: {
          name: '详细说明',
          value: '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
        },
      },
    },
    {
      key: 'block3',
      name: '内容区域4',
      value: {
        iconImg: {
          name: 'icon图片',
          value: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          remark: '尺寸参考:40*40',
        },
        title: {
          name: '标题',
          value: '移动',
        },
        content: {
          name: '详细说明',
          value: '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
        },
      },
    },
    {
      key: 'block4',
      name: '内容区域5',
      value: {
        iconImg: {
          name: 'icon图片',
          value: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          remark: '尺寸参考:40*40',
        },
        title: {
          name: '标题',
          value: '分布式中间件',
        },
        content: {
          name: '详细说明',
          value: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
        },
      },
    },
    {
      key: 'block5',
      name: '内容区域6',
      value: {
        iconImg: {
          name: 'icon图片',
          value: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          remark: '尺寸参考:40*40',
        },
        title: {
          name: '标题',
          value: '大数据',
        },
        content: {
          name: '详细说明',
          value: '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
        },
      },
    },
  ],
};
