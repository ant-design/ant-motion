---
order: 1
title: 
  zh-CN: 时间轴效果
  en-US: Timeline
mouseEnter: true
---
## zh-CN
鼠标经过或手指按下可查看时间轴效果, 时间轴效果，无限循环时间轴效果。

## en-US
Mouse hover or touch see the animation. Timeline effects, infinite loop timeline effects.

```jsx
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.moment = null;
    this.animation = [
      { left: '-40%' },
      { left: '40%' },
      { top: '60px' },
      { scale: 0.7 },
      { scale: 1 },
      { top: 0 },
      { left: '0%' },
    ];
  }


  render() {
    return (
      <TweenOne
        animation={this.animation}
        paused={this.props.paused}
        repeat={-1} // demo 演示需要，时间轴循环
        yoyo // demo 演示需要，时间轴循环
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
