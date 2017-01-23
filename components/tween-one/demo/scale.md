---
order: 1
title: 缩放效果
mouseEnter: true
---

鼠标经过或手指按下可查看缩放效果。

```jsx
import { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.animation = { scale: 0, yoyo: true, repeat: -1, duration: 1000 };
  }

  render() {
    return (
      <TweenOne
        animation={this.animation}
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
