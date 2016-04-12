export default {
  name: 'demoAnimation',
  version: '0.0.1',
  header: {
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
  banner: {
    dataSource: [
      {
        key: 'bgImg',
        name: '背景图片',
        value: 'https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg',
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
  page1: {
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
  page2: {
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
  page3: {
    dataSource: [
      {
        key: 'img',
        name: '配图',
        value: 'https://os.alipayobjects.com/rmsportal/JugUOImfNERsOAb.png',
        size: '352*285',
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
  page4: {
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
      {
        key: 'img1',
        name: '图片区块1',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '115*115',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
      {
        key: 'img2',
        name: '图片区块2',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '115*115',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
      {
        key: 'img3',
        name: '图片区块3',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '115*115',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
      },
      {
        key: 'img4',
        name: '图片区块4',
        value: {
          img: {
            key: 'img',
            name: '图片',
            size: '115*115',
            value: 'https://os.alipayobjects.com/rmsportal/eHBUBcXxqzLRitB.png',
          },
          title: {
            key: 'title',
            name: '标题',
            value: 'SLIDERS',
          },
          content: {
            key: 'content',
            name: '内容',
            value: 'Image source from the network Demo, please upload pictures to replace.' +
            ' Image source from the network Demo',
          },
        },
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
  footer: {
    dataSource: [
      {
        key: 'text',
        content: '内容',
        value: 'Copyright © 2015 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
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
