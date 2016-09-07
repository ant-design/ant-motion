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

export function dataToArray(vars) {
  if (!vars && vars !== 0) {
    return [];
  }
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}

export function currentScrollTop() {
  const supportPageOffset = window.pageXOffset !== undefined;
  const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
  const isCSS1ScrollTop = isCSS1Compat ?
    document.documentElement.scrollTop : document.body.scrollTop;
  return supportPageOffset ? window.pageYOffset : isCSS1ScrollTop;
}

export function scrollClick(tickerId, e) {
  const scrollTop = currentScrollTop();
  const startFrame = ticker.frame;
  const id = e.currentTarget.getAttribute('href');
  const element = document.querySelector(id);
  let toTop;
  if (element) {
    toTop = element.getBoundingClientRect().top;
    const docTop = document.documentElement.getBoundingClientRect().top;
    toTop = Math.round(toTop) - Math.round(docTop);
  } else {
    return;
  }
  ticker.wake(tickerId, () => {
    const moment = (ticker.frame - startFrame) * ticker.perFrame;
    const ratio = easingTypes.easeInOutCubic(moment, scrollTop, toTop, 450);
    window.scrollTo(window.scrollX, ratio);
    if (moment >= 450) {
      ticker.clear(tickerId);
    }
  });
};
