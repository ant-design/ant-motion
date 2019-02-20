
const path = require('path');
const replaceLib = require('antd-tools/lib/replaceLib');

const isDev = process.env.NODE_ENV === 'development';

const antdImport = ['import', { libraryName: 'antd', style: true }];

function alertBabelConfig(rules) {
  rules.forEach((rule) => {
    if (rule.loader && rule.loader.indexOf('babel-loader') >= 0) {
      if (rule.options.plugins.indexOf(replaceLib) === -1) {
        rule.options.plugins.push(replaceLib);
      }
      if (rule.options.plugins.indexOf(antdImport) === -1) {
        rule.options.plugins.push(antdImport);
      }
      /* rule.options.plugins = rule.options.plugins.filter(plugin =>
        !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1
      ); */
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

module.exports = {
  source: {
    language: './language',
    components: './components',
    exhibition: './exhibition',
  },
  theme: './site/theme',
  themeConfig: {
    root: '/',
    language: {
      动效: 0,
      Motion: 0,
    },
  },
  htmlTemplate: './site/theme/static/index.html',
  port: 8111,
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  doraConfig: {
    verbose: true,
  },
  lessConfig: {
    javascriptEnabled: true,
  },
  webpackConfig(config) {
    config.resolve.alias = {
      site: path.join(process.cwd(), 'site'),
      'react-router': 'react-router/umd/ReactRouter',
    };

    // eslint-disable-next-line
    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
    };
    if (isDev) {
      // eslint-disable-next-line
      config.devtool = 'source-map';
    }
    alertBabelConfig(config.module.rules);
    return config;
  },
  devServerConfig: {
    public: process.env.DEV_HOST || 'localhost',
    disableHostCheck: !!process.env.DEV_HOST,
  },

  htmlTemplateExtraData: {
    isDev,
  },
};
