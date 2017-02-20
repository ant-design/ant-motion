import {
  marginAndPaddingStyle,
  offsetStyle,
  textStyle,
  bgStyle,
  borderStyle,
} from '../../utils-style';

const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    content2: {
      style: {
        ...offsetStyle({ height: '50vh' }),
        ...bgStyle({
          imageRemark: '图片尺寸参考： 1920*540',
        }),
        ...borderStyle({ width: '0px', style: 'none', color: '#666' }),
      },
      stylePhone: {
        ...offsetStyle({ height: '400px' }),
        ...bgStyle({
          imageRemark: '图片尺寸参考： 1920*540',
        }),
        ...borderStyle({ width: '0px', style: 'none', color: '#666' }),
      },
    },
    content2_imgWrapper: {
      style: {
        ...offsetStyle({ width: '40%' }),
        lineHeight: {
          value: '50vh',
          name: '区块行高',
          remark: '控制图片垂直居中元素',
        },
      },
      stylePhone: {
        ...offsetStyle({ height: '200px', width: '90%' }),
        ...textStyle({ lineHeight: '200px' }),
        ...marginAndPaddingStyle({ margin: '20px auto' }),
      },
    },
    content2_img: {
      style: {
        ...offsetStyle({ width: '55%', right: '10%' }),
      },
      stylePhone: {
        ...offsetStyle({ width: '180px', height: '200px', right: '0px', left: '0px' }),
        ...marginAndPaddingStyle({ margin: 'auto' }),
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
        name: '图片展示',
        remark: '尺寸参考:268*296',
      },
    },
    content2_textWrapper: {
      style: {
        ...offsetStyle({ width: '55%' }),
        ...marginAndPaddingStyle({ margin: '0 0 0 5%' }),
      },
      stylePhone: {
        ...offsetStyle({ width: '90%', height: '140px' }),
        ...marginAndPaddingStyle({ margin: 'auto auto 20px' }),
        ...textStyle({ align: 'center' }),
      },
    },
    content2_title: {
      style: {
        ...offsetStyle({ width: '75%', top: '35%' }),
        ...textStyle({
          size: '32px',
          color: '#404040',
          align: 'left',
        }),
      },
      stylePhone: {
        ...offsetStyle({ width: '100%' }),
        ...textStyle({ size: '32px', color: '#404040', align: 'center' }),
        ...marginAndPaddingStyle({ margin: '10px auto' }),
      },
      children: {
        name: '标题名称',
        value: '企业资源管理',
      },
    },
    content2_content: {
      style: {
        ...offsetStyle({ width: '75%', top: '37%' }),
        ...textStyle({
          size: '12px',
          color: '#666',
          align: 'left',
        }),
      },
      stylePhone: {
        ...offsetStyle({ width: '100%' }),
        ...textStyle({ size: '12px', color: '#666', align: 'center' }),
        ...marginAndPaddingStyle({ margin: 'auto' }),
      },
      children: {
        name: '详细说明',
        value: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。' +
        '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。' +
        '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
      },
    },
  },
};
