export default {
  name: 'demoAnimation',
  version: '0.0.1',
  header: {
    template: require('raw-js!./component/Header'),
    dataSource: [
      {
        key: 'img',
        name: 'logo',
        value: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        link: '',
      },
      {
        key: 'menu1',
        name: '导航一',
        value: '导航一',
      },
      {
        key: 'menu2',
        name: '导航二',
        value: '导航二',
      },
      {
        key: 'menu3',
        name: '导航三',
        value: '导航三',
      },
      {
        key: 'menu4',
        name: '导航四',
        value: '导航四',
      },
    ],
    variables: [
      {
        key: 'type',
        name: '样式',
        value: 'bottomPosition',
        icon: 'https://os.alipayobjects.com/rmsportal/npZvNtlUVWrrKuC.svg',
      },
      {
        key: 'ease',
        name: '缓动',
        value: 'easeInOutQuart',
        icon: 'https://os.alipayobjects.com/rmsportal/lgPiDrfdcBgViAu.svg',
      },
      {
        key: 'duration',
        name: '时长',
        value: 300,
        icon: 'https://os.alipayobjects.com/rmsportal/PjZWmtkBAYbNrRo.svg',
      },
      {
        key: 'interval',
        name: '间隔',
        value: 100,
        icon: 'https://os.alipayobjects.com/rmsportal/KLvLgWxtdqTeLFj.svg',
      },
      {
        key: 'delay',
        name: '延迟',
        value: 0,
        icon: 'https://os.alipayobjects.com/rmsportal/KLvLgWxtdqTeLFj.svg',
      },
    ],
  },
  banner: {
    dataSource: [
      {
        key: 'bgImg',
        name: '背景图片',
        value: 'https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg',
      },
      {
        key: 'text',
        name: '文字区块',
        value: {
          title: {
            key: 'title',
            name: '标题',
            value: 'Ant Motion Demo',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            'Image source from the network Demo, please upload pictures to replace',
          },
          button: {
            key: 'button',
            name: '按钮',
            value: 'Learn More',
          },
        },
      },
    ],
    variables: [
      {
        key: 'type',
        name: '样式',
        value: 'bottomPosition',
        donType: ['leftRightPoly', 'topBottomPoly'],
        icon: 'https://os.alipayobjects.com/rmsportal/npZvNtlUVWrrKuC.svg',
      },
      {
        key: 'ease',
        name: '缓动',
        value: 'easeInOutQuart',
        icon: 'https://os.alipayobjects.com/rmsportal/lgPiDrfdcBgViAu.svg',
      },
      {
        key: 'duration',
        name: '时长',
        value: 300,
        icon: 'https://os.alipayobjects.com/rmsportal/PjZWmtkBAYbNrRo.svg',
      },
      {
        key: 'interval',
        name: '间隔',
        value: 100,
        icon: 'https://os.alipayobjects.com/rmsportal/KLvLgWxtdqTeLFj.svg',
      },
      {
        key: 'delay',
        name: '延迟',
        value: 0,
        icon: 'https://os.alipayobjects.com/rmsportal/KLvLgWxtdqTeLFj.svg',
      },
    ],
  },
};
