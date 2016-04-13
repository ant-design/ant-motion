export default {
  name: 'page2',
  version: '0.0.1',
  page2: {
    template: require('raw-js!./Page2'),
    dataSource: [
      {
        key: 'img',
        name: '配图',
        value: 'https://os.alipayobjects.com/rmsportal/uxvINJWDtuEWPeg.png',
        size: '352*470',
        link: {
          name: '上传图片',
          href: 'http://site.alipay.net/xingmin.zhu/toast/',
        },
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
            value: 'Image source from the network Demo, please upload pictures to replace. ' +
            'Image source from the network Demo,please upload pictures to replace. ' +
            'Image source from the network Demo, please upload pictures to replace. ' +
            'Image source from the network Demo, please upload pictures to replace.<br /> ' +
            'Image source from the network Demo,please upload pictures to replace. ' +
            'Image source from the network Demo, please upload pictures to replace.',
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
