---
order: 1
title: Animate
---

Animate the individual elements according to the state, and use them together with css or other third-party animation classes; specific ref [API](/api/animate)

## When To Use

- When the element state is switched;

---

## How To Use

### Install

```bash
$ npm install rc-animate --save
```

### Usage

```jsx
var Animate = require('rc-animate');
var ReactDOM = require('react-dom');
ReactDOM.render((
  <Animate showProp="visible" transitionName="fade">
    {show ? <div visible key="1">demo</div> : null}
  </Animate>
), container);
```
> [Detailed use](https://github.com/react-component/animate/blob/master/docs/zh-cn/intro.md)

## API

### props 

| name           | type                 | default    | description                        |
|-----------|----------|------------|-------------------|
| showProp  | String   |  null      | using prop for show and hide. [demo](http://react-component.github.io/animate/examples/hide-todo.html) |
| exclusive | Boolean  |  false     | whether allow only one set of animations(enter and leave) at the same time. |
| transitionName | String  |  null  | specify corresponding css, see ReactCSSTransitionGroup | 
| transitionAppear | Boolean | false | whether support transition appear animate |
| transitionEnter  | Boolean | true  | whether support transition enter animate |
| transitionLeave  | Boolean | true  | whether support transition leave animate  |
| onEnd     | Func     |  true    | animation end callback, callBack(key: String, exists: Boolean); |
| animation | Object   | {}         |  to animate with js. see animation format below. |
| component | React.Element/String   | `span` | wrap dom node or component for children. set to '' if you do not wrap for only one child  |
| componentProps | Object  | {} | extra props that will be passed to component  |

> `animation` case to see [demo](http://react-component.github.io/animate/)
