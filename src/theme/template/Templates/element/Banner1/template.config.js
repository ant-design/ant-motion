const component = require('./index.jsx');
const templateStr = require('!raw!./index.jsx');
const less = require('!raw!./index.less');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/chnhazooyzrjWSv.jpg',
  component,
  templateStr,
  less,
  text: '多张需要显示的背景图的产品主页的首屏',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: '100%',
      calc: true, // 如果是在导航后第一个区块，是否减去导航高度
    },
    {
      key: 'block1',
      name: '第一屏',
      value: {
        logo: {
          name: 'logo图片',
          value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
          remark: '尺寸参考:320*254',
        },
        content: {
          name: '广告语',
          value: '一个高效的页面动画解决方案',
        },
        button: {
          name: '按钮文案',
          value: 'Learn More',
        },
        bgImg: {
          name: '背景图片',
          value: 'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
          remark: '尺寸参考:1920*1080',
        },
      },
    },
    {
      key: 'block2',
      name: '第二屏',
      value: {
        logo: {
          name: 'logo图片',
          value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
          remark: '尺寸参考:320*254',
        },
        content: {
          name: '广告语',
          value: '一个高效的页面动画解决方案',
        },
        button: {
          name: '按钮文案',
          value: 'Learn More',
        },
        bgImg: {
          name: '背景图片',
          value: 'https://zos.alipayobjects.com/rmsportal/xHxWkcvaIcuAdQl.jpg',
          remark: '尺寸参考:1920*1080',
        },
      },
    },
    {
      key: 'block3',
      name: '第三屏',
      value: {
        logo: {
          name: 'logo图片',
          value: 'https://zos.alipayobjects.com/rmsportal/glzXQktozLMgGtE.png',
          remark: '尺寸参考:320*254',
        },
        content: {
          name: '广告语',
          value: '一个高效的页面动画解决方案',
        },
        button: {
          name: '按钮文案',
          value: 'Learn More',
        },
        bgImg: {
          name: '背景图片',
          value: 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
          remark: '尺寸参考:1920*1080',
        },
      },
    },
  ],
};
