export default {
  nav: {
    name: '导航选择',
    order: 0,
    remark: '导航仅可选择一项',
    data: [
      {
        src: 'https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg',
        text: '普通型导航',
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/UTHsfGMNXXbpEoL.jpg',
        text: '带用户型导航',
      },
    ],
  },
  content: {
    name: '内容选择',
    checkbox: true,
    order: 2,
    remark: '可添加多项',
    data: [
      {
        src: 'https://zos.alipayobjects.com/rmsportal/gyseCGEPqWjQpYF.jpg',
        text: '单张背景图Banner',
        order: 0,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/chnhazooyzrjWSv.jpg',
        text: '多张背景图Banner',
        order: 1,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/xLbbmipjHaqSoJSXhIzP.jpg',
        text: '单张背景图Banner2',
        order: 10,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/tFEFnHEpyPhRnFCsKjdR.jpg',
        text: '产品介绍',
        order: 9,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/CXrFvvZqkMwMHZo.jpg',
        text: '产品特性介绍1',
        order: 2,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/WxCxyIKjMdCUUSJ.jpg',
        text: '产品特性介绍2',
        order: 3,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/pUFfIJXizTljrgZ.jpg',
        text: '多个功能点介绍',
        order: 4,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/ndmJrWwkQloTtKg.jpg',
        text: 'video页面展示',
        order: 5,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/sgTBpfjKcsXWDtq.jpg',
        text: '案例介绍页面',
        order: 6,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/yNbeUIWcDNZFKTY.jpg',
        text: '单个模块介绍',
        order: 7,
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/CfSeDOXHJzJuPbz.jpg',
        text: '多个模块介绍',
        order: 8,
      },
      /*{ disabled: true, src: 'https://zos.alipayobjects.com/rmsportal/MnbozfSRmOwdxvH.jpg' },
      { disabled: true, src: 'https://zos.alipayobjects.com/rmsportal/cMigmCVGBaJkuYG.jpg' },
      { disabled: true, src: 'https://zos.alipayobjects.com/rmsportal/VKeYAOSRQVtMccj.jpg' },
      { disabled: true, src: 'https://zos.alipayobjects.com/rmsportal/TAvpiZHalFQVewZ.jpg' },*/
    ],
  },
  footer: {
    name: '页尾选择',
    order: 3,
    remark: '页尾仅可选择一项',
    data: [
      {
        src: 'https://zos.alipayobjects.com/rmsportal/aJutnIvTFWkEAWj.jpg',
        text: '简单型页尾',
        id: 'footer',
      },
      {
        src: 'https://zos.alipayobjects.com/rmsportal/PEXAhbheOHVTyfM.jpg',
        text: '带信息尾页',
        id: 'footer',
      },
    ],
  },
  other: {
    name: '其它功能选择',
    order: 4,
    data: [
      { src: 'https://zos.alipayobjects.com/rmsportal/OSQFJjsAgApqJFxdMaFt.jpg', label: '分屏锚点圆点', value: 'point' },
      { src: 'https://os.alipayobjects.com/rmsportal/pwggipnVeoQkgGwmWilN.mp4', label: '整屏滚动', value: 'full' },
    ],
  },
};
