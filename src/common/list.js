const list = {
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
      ],
    },
    {
      title: '过渡动效',
      href: 'space',
      disabled: true,
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
