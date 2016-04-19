---
order: 0
cols: 3
title: 位移效果
---

鼠标经过可查看位移效果。

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
        animation={{ left: '20%', yoyo: true, repeat: -1, duration: 1000 }}
        paused={this.props.paused}
        style={{ left: '-20%' }}
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
