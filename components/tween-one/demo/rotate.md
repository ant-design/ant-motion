---
order: 2
title: 旋转效果
mouseEnter: true
---

鼠标经过或手指按下可查看旋转效果。


```jsx
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.animation = { rotate: 360, repeat: -1, duration: 1000 };
  }

  render() {
    return (
      <TweenOne
        animation={this.animation}
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
