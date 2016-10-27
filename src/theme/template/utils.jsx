import React from 'react';
import ticker from 'rc-tween-one/lib/ticker';
import easingTypes from 'tween-functions';

export function toArrayChildren(children) {
  const ret = [];
  React.Children.forEach(children, (c) => {
    ret.push(c);
  });
  return ret;
}

/*
export function collectDocs(docs) {
  const docsList = Object.keys(docs)
    .map(key => docs[key])
    .map(value => (value.index || value));
  return docsList;
}

export function getMenuItems(data) {
  const menuMeta = data.map(item => item.meta);
  const menuItems = {};
  menuMeta.sort((a, b) =>
    parseInt(a.order, 10) - parseInt(b.order, 10)
  ).forEach((meta) => {
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

export function dataToArray(vars) {
  if (!vars && vars !== 0) {
    return [];
  }
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}
*/

export function currentScrollTop() {
  return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
}

export function scrollTo(number) {
  const scrollTop = currentScrollTop();
  if (scrollTop !== number) {
    const tickerId = `scrollToTop-${Date.now()}`;
    const startFrame = ticker.frame;
    ticker.wake(tickerId, () => {
      const moment = (ticker.frame - startFrame) * ticker.perFrame;
      const ratio = easingTypes.easeInOutCubic(moment, scrollTop, number, 450);
      window.scrollTo(window.scrollX, ratio);
      if (moment >= 450) {
        ticker.clear(tickerId);
      }
    });
  }
}


export function scrollClick(e) {
  const id = e.currentTarget.getAttribute('href');
  const element = document.querySelector(id);
  let toTop;
  if (element) {
    toTop = element.getBoundingClientRect().top;
    const docTop = document.documentElement.getBoundingClientRect().top;
    toTop = Math.round(toTop) - Math.round(docTop);
    scrollTo(toTop);
  }
}
