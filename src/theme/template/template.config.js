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
      {
        src: 'https://zos.alipayobjects.com/rmsportal/CXrFvvZqkMwMHZo.jpg',
        text: '产品的特性介绍模块(图左)',
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/WxCxyIKjMdCUUSJ.jpg',
        text: '产品的特性介绍模块(图右)',
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/pUFfIJXizTljrgZ.jpg',
        text: '产品有多个功能点介绍的场景',
      },

      {
        src: 'https://zos.alipayobjects.com/rmsportal/ndmJrWwkQloTtKg.jpg',
        text: '用于需要video来更好的阐述功能如何使用时',
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/sgTBpfjKcsXWDtq.jpg',
        text: '案例较多的案例介绍页面',
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/yNbeUIWcDNZFKTY.jpg',
        text: '产品的一个功能模块有多个特性介绍点',
      },
      { src: 'https://zos.alipayobjects.com/rmsportal/CfSeDOXHJzJuPbz.jpg' },
      { src: 'https://zos.alipayobjects.com/rmsportal/MnbozfSRmOwdxvH.jpg' },
      { src: 'https://zos.alipayobjects.com/rmsportal/cMigmCVGBaJkuYG.jpg' },
      { src: 'https://zos.alipayobjects.com/rmsportal/VKeYAOSRQVtMccj.jpg' },
      { src: 'https://zos.alipayobjects.com/rmsportal/TAvpiZHalFQVewZ.jpg' },
    ],
  },
  other: {
    name: '其它功能选择',
    order: 3,
    other: true,
    data: [
      { label: '悬浮导航', value: 'fixed' },
      { label: '侧边小点（页面里的分屏锚点滚动）', value: 'point' },
      { label: '整屏滚动', value: 'full'},
    ]
  }
}
