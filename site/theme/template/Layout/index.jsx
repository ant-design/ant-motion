import collect from 'bisheng/collect';
import Layout from './Layout';
import * as utils from '../utils';

export default collect(async (nextProps) => {
  const pathname = nextProps.location.pathname;

  const path = pathname.replace('-cn', '');

  let pageDataPath = path.split('/');

  if (path === 'index' || path === '/') {
    // exhibition.demo, queue-anim.simple.demo
    const exhibitionPageData = nextProps.utils.get(nextProps.data, ['exhibition']).demo();
    const componentsPageData = nextProps.utils.get(nextProps.data, ['components'])['queue-anim'].demo();
    return {
      localizedPageData: {
        exhibition: await exhibitionPageData,
        'queue-anim': await componentsPageData,
      },
    };
  }
  if (/\/components/.test(path) && pageDataPath[1]) {
    const str = pageDataPath[1];
    pageDataPath[1] = str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (/exhibition/.test(path) && pageDataPath[1]) {
    pageDataPath = pageDataPath.slice(0, pageDataPath.length - 1);
  }

  if (/api/.test(path) && pageDataPath[1]) {
    pageDataPath = ['components', pageDataPath[1]];
  }
  let pageData = nextProps.utils.get(nextProps.data, pageDataPath);
  pageData = pageDataPath[0] === 'exhibition' && !pageDataPath[1] ? pageData.demo : pageData;

  // 路由跳转统一处理
  if (pathname === 'components') {
    location.href = '/components/tween-one';
    return;
  }

  if (!pageData) {
    throw 404; // eslint-disable-line no-throw-literal
  }
  const locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
  const pageDataPromise = typeof pageData === 'function'
    ? pageData() : (pageData[locale] || pageData.index[locale] || pageData.index)();
  const demosFetcher = nextProps.utils.get(nextProps.data, [...pageDataPath, 'demo']);
  if (demosFetcher) {
    const [localizedPageData, demos] = await Promise.all([pageDataPromise, demosFetcher()]);
    return { localizedPageData, demos };
  }
  return { localizedPageData: await pageDataPromise };
})(Layout);
