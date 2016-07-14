const Article = './template/Content/Article';
const ComponentDoc = './template/Content/ComponentDoc';
module.exports = {
  home: '/',
  routes: [
    {
      template: './template/Layout/index',
      props: { ignoreScrollBehavior: true },
      children : [
        { dataPath: '/', template: './template/Home/index' },
        { dataPath: '/components/:contentName', template: ComponentDoc },
        { dataPath: '/cases/about', template: Article },
        { dataPath: '/cases/help', template: Article },
        { dataPath: '/cases/full', template: Article },
        { dataPath: '/cases/splicing', template: './template/Splicing/index' },
        { dataPath: '/language/:contentName', template: Article },

      ]
    },
    { dataPath: '/templates/', template:  './template/Templates/index' },
  ]
};
