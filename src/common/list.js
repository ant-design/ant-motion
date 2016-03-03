const list = {
  nav: [
    { name: '首页', href: '/', key: 'home' },
    { name: '语言', href: '/language/', key: 'language' },
    { name: '组件', href: '/component/', key: 'component' },
    { name: '实践', href: '/cases/', key: 'cases' },
  ],
  language: [
    {
      title: '基本原则',
      children: [
        {
          title: '时间栅格',
          href: '',
        },
        {
          title: '大气空间',
          href: 'space',
        },
        {
          title: '微秒运动',
          href: 'abc',
          disabled: true,
        },
      ],
    },
    {
      title: '巧用过渡',
      href: 'transition',
    },
    {
      title: '增强示意',
      href: 'interact',
    },
    {
      title: '改善感知',
      href: 'aware',
    },
  ],
  component: [
    {
      title: 'Ant Motion of React',
      href: '',
    },
    {
      title: 'Component',
      key: 'componet',
      open: true,
      children: [
        {
          title: 'TweenOne',
          desc: '单元素动画',
          href: 'tween-one',
        },
        {
          title: 'QueueAnim',
          desc: '进出场动画',
          href: 'queue-anim',
        },
        {
          title: 'ScrollAnim',
          desc: '页面滚动动画',
          href: 'scroll-anim',
        },
        {
          title: 'BannerAnim',
          desc: 'banner动画',
          href: 'banner-anim',
          disabled: true,
        },
        {
          title: 'IconAnim',
          desc: 'Icon变换动画',
          href: 'icon-anim',
          disabled: true,
        },
      ],
    },
  ],
  cases: [
    {
      title: '页面示例',
      children: [
        {
          title: '首页案例',
          href: '',
        },
        {
          title: '列表案例',
          href: 'list',
          disabled: true,
        },
      ],
    },
    {
      title: '单元素示例',
      key: 'one',
      disabled: true,
      children: [
        {
          title: '进出场示例',
          href: 'queue',
        },
      ],
    },
  ],
};
export default list;
