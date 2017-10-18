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
    content0: {
      style: {
        ...offsetStyle({ height: '100vh' }),
        ...textStyle({ align: 'center' }),
        ...borderStyle({ width: '0px', style: 'none', color: '#666' }),
        '$:before': {
          name: '背景图片',
          style: {
            ...bgStyle({
              image: 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
              attachment: 'fixed',
              position: 'center',
              size: 'cover',
              isBanner: true,
            }),
          },
        },
      },
    },
    content0_wrapper: {
      style: {
        ...offsetStyle({ width: '550px', top: '20%', left: '0' }),
        margin: {
          value: 'auto',
          select: ['auto', 'inherit'],
          name: 'margin',
        },
      },
      stylePhone: {
        ...offsetStyle({ width: '90%', top: '20%', left: '0' }),
        margin: {
          value: 'auto',
          select: ['auto', 'inherit'],
          name: 'margin',
        },
      },
    },
    content0_title: {
      style: {
        ...offsetStyle({ width: '350px', left: '30px' }),
        ...textStyle({ size: '40px', color: '#fff' }),
      },
      stylePhone: {
        ...offsetStyle({ width: '90%', left: '0px' }),
        ...textStyle({ size: '40px', color: '#fff' }),
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        name: '图片标题',
        remark: '如果不是图片结尾将自动转换成标题',
      },
    },
    content0_content: {
      style: {
        ...textStyle({
          size: '14px',
          color: '#fff',
          align: 'center',
        }),
        ...marginAndPaddingStyle({ margin: '0px 0px 20px 0px' }),
      },
      children: {
        value: '一个高效的页面动画解决方案',
        name: '广告语',
      },
    },
    content0_button: {
      style: {
        ...textStyle({ color: '#fff' }),
        ...borderStyle({
          color: '#fff', width: '1px', style: 'solid', radius: '4px',
        }),
        ...bgStyle({ color: 'transparent', select: ['backgroundColor'] }),
        '$:hover': {
          name: 'hover 样式',
          style: {
            ...textStyle({ color: '#fff' }),
            ...borderStyle({ color: '#fff', width: '1px', style: 'solid' }),
            ...bgStyle({ color: 'transparent', select: ['backgroundColor'] }),
            ...boxShadowStyle('0 0 10px rgba(50,250,255,0.75)'),
          },
          stylePhone: {
            ...textStyle({ color: '#fff' }),
            ...borderStyle({ color: '#fff', width: '1px', style: 'solid' }),
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
