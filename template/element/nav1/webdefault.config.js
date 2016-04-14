export default {
  name: 'nav1',
  version: '0.0.1',
  nav1: {
    template: require('raw-js!../../element/nav1/Header'),
    dataSource: [
      {
        key: 'img',
        name: 'logo',
        value: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        size: '152*33',
        link: {
          name: '上传图片',
          href: 'https://rmsportal.alipay.com/',
        },
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
        value: 'leftRightPoly',
      },
      {
        key: 'ease',
        name: '缓动',
        value: 'easeInOutQuart',
      },
      {
        key: 'duration',
        name: '时长',
        value: 450,
      },
      {
        key: 'interval',
        name: '间隔',
        value: 100,
      },
      {
        key: 'delay',
        name: '延迟',
        value: 0,
      },
    ],
  },
};
