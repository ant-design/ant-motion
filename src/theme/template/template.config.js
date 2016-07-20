export default {
  nav: {
    name: '导航选择',
    order: 0,
    data: [
      require('./Templates/element/Nav0/template.config.js'),
      require('./Templates/element/Nav1/template.config.js'),
    ],
  },
  banner: {
    name: 'Banner选择',
    checkbox: true,
    order: 1,
    data: [
      require('./Templates/element/Banner0/template.config.js'),
      require('./Templates/element/Banner1/template.config.js'),
    ]
  },
  content: {
    name: '内容选择',
    checkbox: true,
    order: 2,
    data: [
      require('./Templates/element/Content0/template.config.js'),
      require('./Templates/element/Content1/template.config.js'),
      require('./Templates/element/Content2/template.config.js'),
      require('./Templates/element/Content3/template.config.js'),
      require('./Templates/element/Content4/template.config.js'),
      {
        disabled: true,
        src: 'https://zos.alipayobjects.com/rmsportal/yNbeUIWcDNZFKTY.jpg',
        text: '产品的一个功能模块有多个特性介绍点',
      },
      { disabled: true, src: 'https://zos.alipayobjects.com/rmsportal/CfSeDOXHJzJuPbz.jpg' },
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
      require('./Templates/element/Footer0/template.config.js'),
      require('./Templates/element/Footer1/template.config.js'),
    ]
  },
  other: {
    name: '其它功能选择',
    order: 4,
    other: true,
    data: [
      { label: '悬浮导航', value: 'fixed' },
      { label: '侧边小点（页面里的分屏锚点滚动）', value: 'point' },
      { label: '整屏滚动', value: 'full'},
    ]
  }
}
