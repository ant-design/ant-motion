const Article = './template/Content/Article';
const ComponentDoc = './template/Content/ComponentDoc';
const Exhibition = './template/Exhibition/index';
const Details = './template/Exhibition/Details';
const path = require('path');

const homeTmpl = './template/Home/index';
// const contentTmpl = './template/Content/index';

function pickerGenerator(module = 'language/') {
  const tester = new RegExp(`^${module}`);
  return (markdownData) => {
    const { filename } = markdownData.meta;
    if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta,
      };
    }
    return null;
  };
}

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    language: pickerGenerator(),
    components: pickerGenerator('components'),
    api: pickerGenerator('components'),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    'bisheng-plugin-antd',
    'bisheng-plugin-react?lang=__react',
  ],
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [
      {
        path: 'index-cn',
        component: homeTmpl,
      },
      {
        path: '/exhibition/',
        component: Exhibition,
      },
      {
        path: '/exhibition-cn/',
        component: Exhibition,
      },
      {
        path: '/exhibition/demo/:children',
        component: Details,
      },
      { path: '/language/:children', component: Article },
      {
        path: '/components/:children',
        component: ComponentDoc,
      },
      { path: '/api/:children', component: Article },
      /* { path: '/exhibition/', component: Exhibition },
      { path: '/exhibition/demo/:contentName', component: Details },
      { path: '/getting/:contentName', component: Article },
      { path: '/components/:contentName', component: ComponentDoc },
      { path: '/language/:contentName', component: Article },
      { path: '/api/tween-one', component: Article },
      { path: '/api/animate', component: Article },
      { path: '/api/queue-anim', component: Article },
      { path: '/api/scroll-anim', component: Article },
      { path: '/api/banner-anim', component: Article },
      { path: '/api/texty', component: Article }, */
    ],
  },
};
