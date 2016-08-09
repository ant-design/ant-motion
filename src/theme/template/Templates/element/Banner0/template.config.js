const component = require('./index.jsx');
const templateStr = require('!raw!./index.jsx');
const less = require('!raw!./index.less');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/gyseCGEPqWjQpYF.jpg',
  component,
  templateStr,
  less,
  text: '单张背景图的主页首屏幕，由一张单屏背景图',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: '100%',
      calc: true, // 如果是在导航后第一个区块，是否减去导航高度
      remark: '请填写上单位 "px" 或 "%" ',
    },
    {
      key: 'block1',
      name: '文字区域',
      value: {
        top: {
          name: '距离顶部位置',
          value: '25%',
          remark: '请填写上单位 "px" 或 "%" ',
        },
        logo: {
          name: 'logo图片',
          value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
          remark: '尺寸参考:320*254',
        },
        title: {
          name: '标题',
          value: '',
          remark: '标题或 logo 填写一个就足够了',
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
