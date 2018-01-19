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
  const id = e.currentTarget.getAttribute('href').split('#')[1];
  const element = document.getElementById(id);
  let toTop;
  if (element) {
    toTop = element.getBoundingClientRect().top;
    const docTop = document.documentElement.getBoundingClientRect().top;
    toTop = Math.round(toTop) - Math.round(docTop);
    scrollTo(toTop);
  }
}
