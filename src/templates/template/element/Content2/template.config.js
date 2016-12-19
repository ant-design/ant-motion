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
    content2: {
      style: {
        height: {
          value: '50vh',
          name: '区块高度',
          remark: '请填写上单位 "px" 或 "%" ',
        },
        ...bgStyle({
          imageRemark: '图片尺寸参考： 1920*540',
        }),
        ...borderStyle(),
      },
    },
    content2_imgWrapper: {
      style: {
        width: {
          value: '40%',
          name: '区块宽度',
        },
        lineHeight: {
          value: '50vh',
          name: '区块行高',
          remark: '控制图片垂直居中元素',
        },
      },
    },
    content2_img: {
      style: {
        width: {
          value: '55%',
          name: '图片宽度',
        },
        right: {
          value: '10%',
          name: '右边距离',
        },
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
        name: '图片展示',
        remark: '尺寸参考:268*296',
      },
    },
    content2_textWrapper: {
      style: {
        width: {
          value: '55%',
          name: '区块宽度',
        },
        margin: {
          value: '0 0 0 5%',
          name: 'margin',
          length: 4,
          remark: '为调整区块位置; 第一行为上右, 第二行为下左; 必须加单位',
        },
      },
    },
    content2_title: {
      style: {
        width: {
          value: '75%',
          name: '区块宽度',
        },
        ...textStyle({
          size: '32px',
          color: '#404040',
          align: 'left',
        }),
      },
      children: {
        name: '标题名称',
        value: '企业资源管理',
      },
    },
    content2_content: {
      style: {
        width: {
          value: '75%',
          name: '区块宽度',
        },
        ...textStyle({
          size: '12px',
          align: 'left',
        })
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
