module.exports = {
  source: [
    './language',
    './components',
    './exhibition',
  ],
  output: './_site',
  entry: {
    index: {
      theme: './src/theme',
      htmlTemplate: './src/theme/static/index.html',
    },
    edit: {
      theme: './src/edit',
      htmlTemplate: './src/edit/static/index.html',
    },
    templates: {
      theme: './src/templates',
      htmlTemplate: './src/templates/static/index.html',
    },
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd',
  ],
  webpackConfig(config) {
    config.babel.plugins.push(['import', {
      libraryName: 'antd',
      style: true,
    }]);
    config.resolve.alias = {
      'react-router': 'react-router/umd/ReactRouter',
    };
    return config;
  },
  port: 8111,
};
