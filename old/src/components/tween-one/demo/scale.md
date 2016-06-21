---
order: 1
cols: 3
title: 缩放效果
mouseEnter: true
---

鼠标经过可查看缩放效果。

```jsx
import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <TweenOne
        animation={{ scale: 0, yoyo: true, repeat: -1, duration: 1000 }}
        paused={this.props.paused}
        style={{ transform: 'scale(1)' }}
        className="code-box-shape"
      />
    );
  }
}
Demo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
ReactDOM.render(<Demo/>, mountNode);
```
