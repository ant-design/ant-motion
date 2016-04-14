export default {
  name: 'footer1',
  version: '0.0.1',
  footer1: {
    template: require('raw-js!./Footer'),
    dataSource: [
      {
        key: 'text',
        name: '内容',
        value: 'Copyright © 2015 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
      },
    ],
    variables: [
      {
        key: 'type',
        name: '样式',
        value: 'bottomPosition',
        donType: ['leftRightPoly', 'topBottomPoly'],
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
