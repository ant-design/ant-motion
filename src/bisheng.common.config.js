/* eslint no-param-reassign: 0*/
module.exports = {
  webpackConfig(config) {
    config.babel.plugins.push([
      require.resolve('babel-plugin-transform-runtime'),
      {
        polyfill: false,
        regenerator: false,
      },
    ], [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
    ]);
    config.resolve.alias = {
      'react-router': 'react-router/umd/ReactRouter',
    };
    return config;
  },
};
