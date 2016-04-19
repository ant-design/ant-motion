---
order: 3
cols: 3
title: 模糊效果
---

鼠标经过可查看模糊效果。

---

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
        animation={{ filter: 'blur(10px)', yoyo: true, repeat: -1, duration: 1000 }}
        paused={this.props.paused}
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
