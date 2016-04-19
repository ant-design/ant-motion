/**
 * Created by jljsj on 16/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import toReactComponent from 'jsonml-to-react-component';
import { getTagName, getAttributes, getChildren } from 'jsonml.js/lib/utils';
import VideoPlayer from './language/VideoExplain';// 'react-sublime-video';

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

export function jsonmlToComponent(pathname, jsonml) {
  return toReactComponent(jsonml, [
    [(node) => React.isValidElement(node), (node, index) =>
      React.cloneElement(node, { key: index }),
    ],
    [(node) => typeof node === 'function', (node, index) =>
      React.cloneElement(node(React, ReactDOM), { key: index }),
    ],
    [(node) => isHeading(getTagName(node)), (node, index) => {
      const children = getChildren(node);
      return React.createElement(getTagName(node), {
        key: index,
        id: children,
        ...getAttributes(node),
      }, [
        <span key="title">{ children.map((child) => toReactComponent(child)) }</span>,
        (<Link to={{ pathname, query: { scrollTo: children } }} className="anchor" key="anchor">
          #
        </Link>),
      ]);
    }],
    [node => getTagName(node) === 'pre' && getAttributes(node).highlighted, (node, index) =>
      React.createElement('pre', { key: index, lang: getAttributes(node).lang },
        React.createElement(
          'code',
          { dangerouslySetInnerHTML: { __html: getChildren(getChildren(node)[0])[0] } }
        )
      ),
    ],
    [(node) => getTagName(node) === 'video', (node, index) => {
      const className = getAttributes(node).classname;
      return <VideoPlayer {...getAttributes(node)} className={className} key={index} />;
    }],
  ]);
}
