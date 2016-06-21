export default {
  name: 'page1',
  version: '0.0.1',
  data: {
    template: require('raw-js!./Page'),
    dataSource: [
      {
        key: 'height',
        name: '区块高度',
        value: '520px',
      },
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
      {
        key: 'img',
        name: '图片',
        value: 'https://os.alipayobjects.com/rmsportal/wpeWNczzJziTcVH.jpg',
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
        value: 'easeOutQuart',
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
