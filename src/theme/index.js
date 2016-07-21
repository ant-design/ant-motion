const Article = './template/Content/Article';
const ComponentDoc = './template/Content/ComponentDoc';
module.exports = {
  home: '/',
  routes: [
    {
      template: './template/Layout/index',
      props: { ignoreScrollBehavior: true },
      children: [
        { route: '/', dataPath: '/', template: './template/Home/index' },
        {
          route: '/components/:contentName',
          dataPath: '/components/:contentName',
          template: ComponentDoc,
        },
        { route: '/cases/about', dataPath: '/cases/about', template: Article },
        { route: '/cases/help', dataPath: '/cases/help', template: Article },
        { route: '/cases/full', dataPath: '/cases/full', template: Article },
        {
          route: '/cases/splicing',
          dataPath: '/cases/splicing',
          template: './template/Splicing/index',
        },
        {
          route: '/language/:contentName',
          dataPath: '/language/:contentName',
          template: Article,
        },
      ],
    },
    {
      route: '/templates/',
      dataPath: '/templates/',
      template: './template/Templates/index',
    },
  ],
};
