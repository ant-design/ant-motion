module.exports = function(webpackConfig) {
  webpackConfig.module.loaders.forEach(function(loader) {
    if (loader.loader === 'babel') {
      // https://github.com/ant-design/babel-plugin-antd
      loader.query.plugins.push('antd');
    }
    return loader;
  });
  return webpackConfig;
};
