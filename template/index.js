const $ = window.$;
$(() => {
  const loadFunc = {
    init() {
      const url = this.getURLData('page');
      /*
       const cssFile = document.createElement('link');
       cssFile.setAttribute('rel', 'stylesheet');
       cssFile.setAttribute('type', 'text/css');
       cssFile.setAttribute('href', `${url}index.css`);
       document.getElementsByTagName('head')[0].appendChild(cssFile);
       const jsFile = document.createElement('script');
       jsFile.setAttribute('type', 'text/javascript');
       jsFile.setAttribute('src', `${url}index.js`);
       document.getElementsByTagName('head')[0].appendChild(jsFile);
       */
      $(`<link rel="stylesheet" type="text/css" href="${url}index.css" />`).appendTo($('head'));
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
