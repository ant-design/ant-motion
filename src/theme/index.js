const Article = './template/Content/Article';
const ComponentDoc = './template/Content/ComponentDoc';
const Exhibition = './template/Exhibition/index';
const Details = './template/Exhibition/Details';
module.exports = {
  home: '/',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd',
  ],
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: './template/Home/index' },
    childRoutes: [
      { path: '/exhibition/', component: Exhibition },
      { path: '/exhibition/demo/:contentName', component: Details },
      { path: '/getting/:contentName', component: Article },
      { path: '/components/:contentName', component: ComponentDoc },
      { path: '/language/:contentName', component: Article },
      { path: '/api/tween-one', component: Article },
      { path: '/api/animate', component: Article },
      { path: '/api/queue-anim', component: Article },
      { path: '/api/scroll-anim', component: Article },
      { path: '/api/banner-anim', component: Article },
      { path: '/api/texty', component: Article },
    ],
  },
};
