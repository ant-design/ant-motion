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
        { path: '/getting/:contentName', component: Article },
        { path: '/components/:contentName', component: ComponentDoc },
        { path: '/language/:contentName', component: Article },
        { path: '/api/tween-one', component: Article},
        { path: '/api/animate', component: Article},
        { path: '/api/queue-anim', component: Article},
        { path: '/api/scroll-anim', component: Article},
        { path: '/api/banner-anim', component: Article},
      ],
    },
  ],
};
