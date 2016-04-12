/**
 * Created by jljsj on 16/2/22.
 */
import React from 'react';

import { Link } from 'react-router';
import Highlight from './Highlight';


function noop() {
}
export function load(vars) {
  const _onUpdate = vars.onUpdate || noop;
  const _onComplete = vars.onComplete || noop;
  let loadNum = 0;
  const data = vars.data;

  function getLoad() {
    const src = data[loadNum].src;
    const img = new Image();
    img.onload = img.onerror = () => {
      _onUpdate(loadNum);
      loadNum++;
      if (loadNum >= data.length) {
        _onComplete();
      } else {
        getLoad();
      }
    };
    img.src = src;
  }

  getLoad();
}


function isHeading(type) {
  return /h[1-6]/i.test(type);
}

export function objectToComponent(pathname, object, index) {
  if (object === null) {
    return null;
  }

  if (React.isValidElement(object)) {
    return React.cloneElement(object, { key: index });
  }

  if (typeof object === 'function') {
    return React.createElement(object, { key: index });
  }

  if (typeof object === 'string') {
    return <span key={index}>{ object }</span>;
  }

  const children = object.children;

  if (object.type === 'html') {
    return React.createElement('div', {
      className: 'markdown',
      key: index,
      dangerouslySetInnerHTML: { __html: children },
    });
  }

  if (isHeading(object.type)) {
    return React.createElement(object.type, {
      key: index,
      id: children.replace(/[~'!<>@#$%^&*()-+_=:\s]/g, ''),
    }, [
      object.children,
      <Link
        to={{ pathname,
          query: { scrollTo: object.children.replace(/[~'!<>@#$%^&*()-+_=:\s]/g, '') },
        }} className="anchor" key="anchor"
      > #
      </Link>,
    ]);
  }

  if (object.type === 'code') {
    const innerHTML = object.props.lang === '__html';
    return (
      <Highlight className={object.props.lang} key={index} innerHTML={innerHTML}>
        {children}
      </Highlight>
    );
  }

  if (typeof children === 'string') {
    return React.createElement(object.type, {
      key: index,
      dangerouslySetInnerHTML: { __html: children },
    });
  }

  return React.createElement(
    object.type,
    { key: index },
    children && children.map(objectToComponent.bind(null, pathname)) // `hr` has no children
  );
}
