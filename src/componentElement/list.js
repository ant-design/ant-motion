import language from '../../_site/data/language';
import component from '../../_site/data/component';
import cases from '../../_site/data/cases';

function getMenuItems(data) {
  const menuMeta = Object.keys(data)
    .map(key => data[key].meta);
  const menuItems = [];
  menuMeta.sort((a, b) =>
    parseInt(parseFloat(a.order) + parseFloat(a.parentOrder || 0), 10)
      - parseInt(parseFloat(b.order) + parseFloat(b.parentOrder || 0), 10)
  ).forEach(meta => {
    const category = meta.category;
    const item = {};
    item.title = meta.chinese || meta.english;
    item.disabled = meta.disabled;
    item.order = meta.order;
    item.href = meta.fileName.split('/')[2].split('.')[0];
    if (meta.index) {
      item.href = '';
    }
    if (category) {
      const itemArr = menuItems.filter(_item => _item.title === category);
      const items = itemArr[0] || { title: category };
      items.children = items.children || [];

      items.open = items.open === false ? items.open : !meta.parentClose;
      items.disabled = items.disabled || meta.parentDisabled;
      items.order = items.order || meta.parentOrder;
      if (category === 'Components') {
        item.title = meta.english;
        item.desc = meta.chinese;
      }
      items.children.push(item);
      if (!itemArr.length) {
        menuItems.push(items);
      }
    } else {
      menuItems.push(item);
    }
  });
  return menuItems;
}
const list = {
  nav: [
    { name: '首页', href: '/', key: 'home' },
    { name: '语言', href: '/language/', key: 'language' },
    { name: '组件', href: '/component/', key: 'component' },
    { name: '实践', href: '/cases/', key: 'cases' },
  ],
  language: getMenuItems(language),
  component: getMenuItems(component),
  cases: getMenuItems(cases),
};
export default list;
