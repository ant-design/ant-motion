export function collectDocs(docs) {
  const docsList = Object.keys(docs)
    .map(key => docs[key])
    .map((value) => {
      return value.index || value;
    });
  return docsList;
}

export function getMenuItems(data) {
  const menuMeta = data.map((item) => item.meta);
  const menuItems = {};
  menuMeta.sort((a, b) => {
    return parseInt(a.order, 10) - parseInt(b.order, 10);
  }).forEach((meta) => {
    const category = meta.category || 'topLevel';
    if (!menuItems[category]) {
      menuItems[category] = {};
    }

    const type = meta.type || 'topLevel';
    if (!menuItems[category][type]) {
      menuItems[category][type] = [];
    }

    menuItems[category][type].push(meta);
  });

  return menuItems;
}

