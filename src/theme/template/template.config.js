const Nav0 = require('./Templates/element/Nav0/template.config.js');
const Nav1 = require('./Templates/element/Nav1/template.config.js');
const Banner0 = require('./Templates/element/Banner0/template.config.js');
const Banner1 = require('./Templates/element/Banner1/template.config.js');
const Content0 = require('./Templates/element/Content0/template.config.js');
const Content1 = require('./Templates/element/Content1/template.config.js');
const Content2 = require('./Templates/element/Content2/template.config.js');
const Content3 = require('./Templates/element/Content3/template.config.js');
const Content4 = require('./Templates/element/Content4/template.config.js');
const Content5 = require('./Templates/element/Content5/template.config.js');
const Content6 = require('./Templates/element/Content6/template.config.js');
const Footer0 = require('./Templates/element/Footer0/template.config.js');
const Footer1 = require('./Templates/element/Footer1/template.config.js');

export default {
  nav: {
    name: '导航选择',
    order: 0,
    data: [
      Nav0,
      Nav1,
    ],
  },
  banner: {
    name: 'Banner选择',
    checkbox: true,
    order: 1,
    data: [
      Banner0,
      Banner1,
    ],
  },
  content: {
    name: '内容选择',
    checkbox: true,
    order: 2,
    data: [
      Content0,
      Content1,
      Content2,
      Content3,
      Content4,
      Content5,
      Content6,
      { disabled: true, src: 'https://zos.alipayobjects.com/rmsportal/MnbozfSRmOwdxvH.jpg' },
      { disabled: true, src: 'https://zos.alipayobjects.com/rmsportal/cMigmCVGBaJkuYG.jpg' },
      { disabled: true, src: 'https://zos.alipayobjects.com/rmsportal/VKeYAOSRQVtMccj.jpg' },
      { disabled: true, src: 'https://zos.alipayobjects.com/rmsportal/TAvpiZHalFQVewZ.jpg' },
    ],
  },
  footer: {
    name: '页尾选择',
    order: 3,
    data: [
      Footer0,
      Footer1,
    ],
  },
  other: {
    name: '其它功能选择',
    order: 4,
    other: true,
    data: [
      { label: '悬浮导航', value: 'fixed' },
      { label: '侧边小点（页面里的分屏锚点滚动）', value: 'point' },
      { label: '整屏滚动', value: 'full' },
    ],
  },
};
