---
order: 2
cols: 4
title: 旋转效果
mouseEnter: true
---

鼠标经过可查看旋转效果。


```jsx
import { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <TweenOne
        animation={{ r: 360, repeat: -1, duration: 1000 }}
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
