export default {
  name: 'page1',
  version: '0.0.1',
  page1: {
    template: require('raw-js!./Page1'),
    dataSource: [
      {
        key: 'text',
        name: '文字区块',
        value: {
          title: {
            key: 'title',
            name: '标题',
            value: 'PAGE TITLE',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Demo source from the network, please upload pictures to replace. ' +
            'Demo source from the network, please upload pictures to replace. ' +
            'Demo source from the network, please upload pictures to replace.',
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
