const component = require('./index');
const templateStr = require('!raw!./index');
const less = require('!raw!./index.less');

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
        backgroundColor: {
          value: '#fff',
          name: '背景颜色',
        },
        backgroundImage: {
          name: '背景图片',
          value: '',
          remark: '尺寸参考:1920*1080',
        },
        backgroundAttachment: {
          value: 'relative',
          name: '背景位置',
          select: ['relative', 'absolute', 'fixed'],
          remark: '参数为： "relative", "absolute", "fixed"; "fixed" 为背景随滚动条滚动',
        },
        backgroundSize: {
          value: 'cover',
          name: '背景大小',
          select: ['contain', 'cover', 'inherit'],
          remark: 'css 里的参数，"contain", "cover"等参数',
        },
        backgroundPosition: {
          value: 'center',
          name: '背景对齐',
          select: ['center', 'top', 'left', 'bottom', 'right',
            'left top', 'left bottom', 'right top', 'right bottom'],
          remark: '参数有: left right center bottom top; 如需配置两个，请以空格格开',
        },
      },
    },
    content2_imgWrapper: {
      style: {
        width: {
          value: '40%',
          name: '区块宽度',
        },
      },
    },
    content2_img: {
      style: {
        height: {
          value: '60%',
          name: '图片高度',
        },
        maxHeight: {
          value: '400px',
          name: '最大高度',
        },
        top: {
          value: '20%',
          name: '顶部距离',
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
        textAlign: {
          value: 'left',
          name: '文字对齐',
          select: ['center', 'left', 'right', 'start', 'end'],
        },
        color: {
          value: '#404040',
          name: '文字颜色',
        },
        margin: {
          value: '0 30% 0 0',
          name: 'margin',
          length: 4,
          remark: '为调整图块位置; 第一行为上右, 第二行为下左; 必须加单位',
        },
        fontSize: {
          value: '32px',
          name: '文字大小',
        },
      },
      children: {
        name: '标题名称',
        value: '企业资源管理',
      },
    },
    content2_content: {
      style: {
        textAlign: {
          value: 'left',
          name: '文字对齐',
          select: ['center', 'left', 'right', 'start', 'end'],
        },
        color: {
          value: '#666',
          name: '文字颜色',
        },
        padding: {
          value: '0 30% 0 0',
          name: 'padding',
          length: 4,
          remark: '为调整区块位置; 第一行为上右, 第二行为下左; 必须加单位',
        },
        fontSize: {
          value: '12px',
          name: '文字大小',
        },
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
