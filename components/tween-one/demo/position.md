---
order: 0
title: 位移效果
mouseEnter: true
---

鼠标经过或手指按下可查看位移效果。


```jsx
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.animation = { left: '20%', yoyo: true, repeat: -1, duration: 1000 };
  }

  render() {
    return (
      <TweenOne
        animation={this.animation}
        paused={this.props.paused}
        style={{ left: '-20%' }}
        className="code-box-shape"
      />
    );
  }
}
Demo.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool,
};

ReactDOM.render(<Demo/>, mountNode);

```
