export default {
  name: 'demoAnimation',
  version: '0.0.1',
  header: {
    dataSource: [
      {
        key: 'img',
        name: 'icon',
        value: 'https://os.alipayobjects.com/rmsportal/YysxJDMuhbSlKid.png',
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
        name: '动画样式',
        value: 'leftRightPoly',
      },
      {
        key: 'duration',
        name: '动画时长',
        value: 800,
      },
      {
        key: 'interval',
        name: '动画间隔',
        value: 100,
      },
      {
        key: 'delay',
        name: '延迟时间',
        value: 100,
      },
    ],
  },
  banner: {
    dataSource: [
      {
        key: 'bgImg',
        name: '背景',
        value: 'https://os.alipayobjects.com/rmsportal/YysxJDMuhbSlKid.png',
      },
      {
        key: 'title',
        name: '标题',
        value: 'Ant Motion Demo',
      },
      {
        key: 'content',
        name: '内容',
        value: 'Image source from the network Demo, please upload pictures to replace.Image source from the network Demo, please upload pictures to replace',
      },
      {
        key: 'button',
        name: '按钮',
        value: 'Learn More',
      },
    ],
    variables: [
      {
        key: 'type',
        name: '动画样式',
        value: 'bottomPosition',
        donType: ['leftRightPoly', 'topBottomPoly'],
      },
      {
        key: 'duration',
        name: '动画时长',
        value: 800,
      },
      {
        key: 'interval',
        name: '动画间隔',
        value: 100,
      },
      {
        key: 'delay',
        name: '延迟时间',
        value: 100,
      },
    ],
  }
}
