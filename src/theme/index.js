const Article = './template/Content/Article';
const ComponentDoc = './template/Content/ComponentDoc';
module.exports = {
  home: '/',
  routes: [
    {
      path: '/',
      component: './template/Layout/index',
      indexRoute: { component: './template/Home/index' },
      childRoutes: [
        { path: '/components/:contentName', component: ComponentDoc },
        { path: '/cases/about', component: Article },
        { path: '/cases/help', component: Article },
        { path: '/cases/full', component: Article },
        { path: '/cases/splicing', component: './template/Splicing/index' },
        { path: '/language/:contentName', component: Article },
      ],
    },
    { path: '/templates/', component: './template/Templates/index' },
  ],
};
