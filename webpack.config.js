module.exports = function(webpackConfig) {

  webpackConfig.output.publicPath = "http://127.0.0.1:8111/";

  webpackConfig.module.loaders.forEach(function(loader) {
    if (loader.loader === 'babel') {
      // https://github.com/ant-design/babel-plugin-antd
      loader.query.plugins.push('antd');
    }
    return loader;
  });

  webpackConfig.module.loaders.push({
    test: /\.md$/,
    exclude: /node_modules/,
    loader: 'babel!antd-md',
  });

  return webpackConfig;
};
