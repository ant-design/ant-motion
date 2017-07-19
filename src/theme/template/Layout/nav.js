/**
 * Created by jljsj on 16/8/18.
 */
const location = window.location;
const protocol = location.protocol;
const isLocalMode = location.port;
const host = isLocalMode ? ':8112' : window.location.host;
const mainPath = isLocalMode ? '' : '/edit';
const href = `${protocol}//${location.hostname}${host}${mainPath}`;

export default [
  { name: '动效展示', href: '/exhibition/', key: 'exhibition' },
  { name: '设计语言', href: '/language/basic', key: 'language' },
  { name: '动效组件', href: '/components/tween-one', key: 'components' },
  { name: 'API', href: '/api/tween-one', key: 'api' },
  {
    name: '动效模板',
    href: `${href}/#t%3Dnav_0_0%2Ccontent_0_0%2Ccontent_2_0%2Ccontent_3_0%2Ccontent_4_0%2Cfooter_0_0`,
    key: 'cases',
    open: true,
  },
];
