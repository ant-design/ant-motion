const list = {
  nav: [
    { name: '首页', href: '/', key: 'home' },
    { name: '语言', href: '/language/', key: 'language' },
    { name: '组件', href: '/component/', disabled: true, key: 'component' },
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
