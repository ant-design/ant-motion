const $ = window.$;
$(() => {
  const loadFunc = {
    init() {
      const url = this.getURLData('page');
      // 增加进度条.
      $(`<link rel="stylesheet" type="text/css" href="${url}index.css" />`).appendTo($('head'));
      $.ajaxSetup({ cache: true });
      $.getScript(`${url}index.js`);
    },
    getURLData(name) {
      const url = decodeURIComponent(location.search || '').replace('?', '').split('#')[0];
      const obj = {};
      url.split('&').forEach(item => {
        const _item = item.split('=');
        obj[_item[0]] = _item[1];
      });
      return obj[name];
    },
  };
  loadFunc.init();
});
