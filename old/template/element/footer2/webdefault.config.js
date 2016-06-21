export default {
  name: 'footer1',
  version: '0.0.1',
  data: {
    template: require('raw-js!./Footer'),
    dataSource: [
      {
        key: 'height',
        name: '区块高度',
        value: '230px',
      },
      {
        key: 'block1',
        name: '区块1',
        value: {
          title: {
            key: 'title',
            name: '标题',
            value: 'ANT MOTION',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'A efficient motion design solutions',
          },
        },
      },
      {
        key: 'block2',
        name: '区块2',
        value: {
          title: {
            key: 'title',
            name: '标题',
            value: 'ABOUT US',
          },
          content: {
            key: 'content',
            name: '内容',
            value: `<a href="#">Ant UED blog</a>
<a href="#">Ant Design</a>
<a href="#">Ant Motion</a>`,
          },
        },
      },
      {
        key: 'block3',
        name: '区块3',
        value: {
          title: {
            key: 'title',
            name: '标题',
            value: 'GET IN TOUCH',
          },
          content: {
            key: 'content',
            name: '内容',
            value: `<p class="address">18 # Wan Tang Lu HangZou ZheJiang</p>
<p class="phone">0576-26888888</p>
<p class="mail">alipay@alipay.com</p>`,
          },
        },
      },
      {
        key: 'text',
        name: '内容',
        value: 'Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
      },
    ],
    variables: [
      {
        key: 'type',
        name: '样式',
        value: 'bottomPosition',
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
