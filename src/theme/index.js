const Article = './template/Content/Article';
const ComponentDoc = './template/Content/ComponentDoc';
const Api = './template/Content/Api';
const Exhibition = './template/Exhibition/index';
module.exports = {
  home: '/',
  routes: [
    {
      path: '/',
      component: './template/Layout/index',
      indexRoute: { component: './template/Home/index' },
      childRoutes: [
        { path: '/exhibition/', component: Exhibition},
        { path: '/getting/install', component: Article },
        { path: '/api/:contentName', component: Api},
        { path: '/components/:contentName', component: ComponentDoc },
        { path: '/language/:contentName', component: Article },
      ],
    },
  ],
};
