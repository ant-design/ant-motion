import {
  marginAndPaddingStyle,
  offsetStyle,
  boxShadowStyle,
  positionStyle,
  textStyle,
  bgStyle,
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
        ...offsetStyle({ height: '64px', top: '0px' }),
        ...boxShadowStyle('0 5px 8px rgba(0,0,0,0.15)'),
        ...positionStyle({ value: 'relative', name: '导航位置' }),
        ...bgStyle({ color: 'rgba(51, 51, 51, 0.95)', select: 'backgroundColor' }),
      },
    },
    nav0_logo: {
      style: {
        ...offsetStyle({ left: '4%', width: '150px' }),
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
        ...offsetStyle({ height: '100%' }),
        ...bgStyle({ color: 'transparent', select: ['backgroundColor'] }),
      },
      stylePhone: {
        ...offsetStyle({ top: '0px', right: '20px', width: '16px', height: '14px' }),
        ...marginAndPaddingStyle({ margin: 'auto' }),
        '.header0-phone-nav-bar em': {
          name: '横条样式',
          stylePhone: {
            ...offsetStyle({ height: '100%' }),
            ...bgStyle({ color: 'rgba(51, 51, 51, 0.95)', select: 'backgroundColor' }),
          },
        },
        '.header0-phone-nav-text': {
          name: '菜单样式',
          stylePhone: {
            ...offsetStyle({ width: '100%', height: '100%', top: '0px', left: '0px' }),
            paddingTop: {
              value: '64px',
              name: 'paddingTop',
            },
            ...bgStyle({ color: '404040', select: 'backgroundColor' }),
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
