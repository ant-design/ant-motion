const Article = './template/Content/Article';
const ComponentDoc = './template/Content/ComponentDoc';
module.exports = {
  home: '/',
  parentRoute: {
    component: require('./template/Layout/index'),
    ignoreScrollBehavior: true,
  },
  routes: {
    '/': './template/Home/index',
    '/components/:contentName': ComponentDoc,
    '/cases/about': Article,
    '/cases/help': Article,
    '/cases/full': Article,
    '/cases/splicing': './template/Splicing/index',
    '/language/:contentName': Article,
  }
}
