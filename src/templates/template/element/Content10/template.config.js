import {
  marginAndPaddingStyle,
  offsetStyle,
  boxShadowStyle,
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
    content10: {
      func: {
        name: '其它功能',
        page: {
          value: 1,
          total: 2,
          name: '显示当前面页',
          type: 'page',
        },
      },
      style: {
        ...offsetStyle({ height: '100vh' }),
        ...borderStyle({ width: '0px', style: 'none', color: '#666' }),
        '$ .bg0': {
          name: '第一屏背景',
          style: {
            ...bgStyle({
              image: 'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
              position: 'center',
              size: 'cover',
            }),
          },
          stylePhone: {
            ...bgStyle({
              image: 'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
              position: 'center',
              size: 'cover',
              isMode: true,
            }),
          },
        },
      },
    },
    content10_wrapperBlock0: {
      style: {
        ...offsetStyle({ width: '550px', top: '20%', left: '0px', right: '0px' }),
        ...marginAndPaddingStyle({ margin: 'auto' }),
        ...textStyle({ align: 'center' }),
      },
    },
    content10_titleBlock0: {
      style: {
        ...offsetStyle({ width: '350px', left: '30px' }),
        ...textStyle({ size: '40px', color: '#fff', align: 'center' }),
      },
      children: {
        value: 'Ant Motion',
        name: '图片标题',
        remark: '如果不是图片结尾将自动转换成标题',
      },
    },
    content10_contentBlock0: {
      style: {
        ...textStyle({ size: '14px', color: '#fff', align: 'center' }),
        ...marginAndPaddingStyle({ margin: '0px 0px 20px 0px' }),
      },
      children: {
        value: 'Ant Motion 在界面里主要是来加强体验舒适度、描述层级关系、增加界面活力、反馈与意向等功能性的动效。',
        name: '广告语',
      },
    },
    content10_buttonBlock0: {
      style: {
        ...textStyle({ color: '#fff' }),
        ...borderStyle({ color: '#fff', radius: '4px' }),
        ...bgStyle({ color: 'transparent', select: ['backgroundColor'] }),
        '$:hover': {
          name: 'hover 样式',
          style: {
            ...textStyle({ color: '#fff' }),
            ...borderStyle({ color: '#fff' }),
            ...bgStyle({ color: 'transparent', select: ['backgroundColor'] }),
            ...boxShadowStyle('0 0 10px rgba(50,250,255,0.75)'),
          },
          stylePhone: {
            ...textStyle({ color: '#fff' }),
            ...borderStyle({ color: '#fff' }),
            ...bgStyle({ color: 'transparent', select: ['backgroundColor'] }),
            ...boxShadowStyle('0 0 10px rgba(50,250,255,0.75)'),
          },
        },
      },
      children: {
        value: 'Learn More',
        name: '按钮文字',
      },
    },
  },
};
