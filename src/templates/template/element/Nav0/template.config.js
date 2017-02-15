import {
  marginAndPaddingStyle,
  offsetStyle,
  boxShadowStyle,
  positionStyle,
  textStyle,
} from '../../utils-style';

const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    nav0: {
      style: {
        height: {
          value: '64px',
          name: '区块高度',
          type: 'number',
        },
        backgroundColor: {
          value: 'rgba(51, 51, 51, 0.95)',
          name: '背景颜色',
          type: 'color',
        },
        ...boxShadowStyle('0 5px 8px rgba(0,0,0,0.15)'),
        ...positionStyle({ value: 'relative', name: '导航位置' }),
        ...offsetStyle({ top: 0 }),
      },
    },
    nav0_logo: {
      style: {
        ...offsetStyle({ left: '4%' }),
        width: {
          value: '150px',
          name: '图片宽度',
          remark: '请填写上单位 "px" 或 "%"',
        },
      },
      children: {
        value: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        name: 'logo 图片',
      },
    },
    nav0_menu: {
      func: {
        name: '其它功能',
        switch: {
          value: false,
          name: '切换导航',
          type: 'switch',
          isMode: true,
          close: true, // 关闭时恢复
        },
      },
      style: {
        ...textStyle({ color: '#fff', lineHeight: '62px' }),
        backgroundColor: {
          value: 'transparent',
          name: '背景颜色',
        },
        height: {
          value: '100%',
          name: '区块高度',
          remark: '请填写上单位 "px" 或 "%"',
        },
      },
      stylePhone: {
        width: {
          value: '16px',
          name: '导航宽度',
        },
        height: {
          value: '14px',
          name: '导航高度',
        },
        ...offsetStyle({ top: '0px', right: '20px' }),
        ...marginAndPaddingStyle({ margin: 'auto' }),
        '.header0-phone-nav-bar em': {
          name: '横条样式',
          stylePhone: {
            backgroundColor: {
              value: '#fff',
              name: '条状颜色',
            },
            height: {
              value: '2px',
              name: '条状高度',
            },
          },
        },
        '.header0-phone-nav-text': {
          name: '菜单样式',
          stylePhone: {
            width: {
              value: '100%',
              name: '菜单宽度',
            },
            height: {
              value: '100%',
              name: '菜单高度',
            },
            backgroundColor: {
              value: '#404040',
              name: '背景颜色',
            },
            paddingTop: {
              value: '64px',
              name: 'paddingTop',
            },
            ...offsetStyle({ top: '0px', left: '0px' }),
            ...boxShadowStyle('0 0 0 rgba(0,0,0,0)'),
          },
        },
      },
      children: {
        menu1: {
          name: '导航一',
          value: '导航一',
        },
        menu2: {
          name: '导航二',
          value: '导航二',
        },
        menu3: {
          name: '导航三',
          value: '导航三',
        },
        menu4: {
          name: '导航四',
          value: '导航四',
        },
      },
    },
  },
};
