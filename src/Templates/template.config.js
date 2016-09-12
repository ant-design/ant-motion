const Nav0 = require('./template/element/Nav0/template.config');
const Nav1 = require('./template/element/Nav1/template.config');
const Banner0 = require('./template/element/Banner0/template.config');
const Banner1 = require('./template/element/Banner1/template.config');
const Content0 = require('./template/element/Content0/template.config');
const Content1 = require('./template/element/Content1/template.config');
const Content2 = require('./template/element/Content2/template.config');
const Content3 = require('./template/element/Content3/template.config');
const Content4 = require('./template/element/Content4/template.config');
const Content5 = require('./template/element/Content5/template.config');
const Content6 = require('./template/element/Content6/template.config');
const Footer0 = require('./template/element/Footer0/template.config');
const Footer1 = require('./template/element/Footer1/template.config');

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
