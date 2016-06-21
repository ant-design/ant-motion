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
    '/cases/:contentName': Article,
    '/language/:contentName': Article,
  }
}
