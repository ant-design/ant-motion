export default {
  nav: {
    name: '导航选择',
    order: 0,
    data: [
      {
        src: 'https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg',
        text: '普通型',
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/UTHsfGMNXXbpEoL.jpg',
        text: '带用户型',
      },
    ],
  },
  banner: {
    name: 'Banner选择',
    checkbox: true,
    order: 1,
    data: [
      {
        src: 'https://zos.alipayobjects.com/rmsportal/gyseCGEPqWjQpYF.jpg',
        text: '单张背景图的主页首屏幕，由一张单屏背景图',
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/chnhazooyzrjWSv.jpg',
        text: '多张需要显示的背景图的产品主页的首屏',
      },
    ],
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
      {
        src: 'https://zos.alipayobjects.com/rmsportal/CfSeDOXHJzJuPbz.jpg',
        text: '产品的多个功能模块特性介绍',
      },
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
      {
        src: 'https://zos.alipayobjects.com/rmsportal/aJutnIvTFWkEAWj.jpg',
        text: '简单型页尾',
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/PEXAhbheOHVTyfM.jpg',
        text: '带信息或链接的尾页',
      },
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
