---
order: 0
title: 
  zh-CN: 基本动画效果
  en-US: Basic Animate
mouseEnter: true
---

## zh-CN
鼠标经过或手指按下可查看位移效果。如 `x, y, z, scale, rotate, blur, marign`等, 更多参数参考 [动画术语](language/animate-term);

## en-US
Mouse hover or touch see the animation. For:  `x, y, z, scale, rotate, blur, marign` etc, more ref [Animate term](language/animate-term);


```jsx
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

function Demo(props) {
  return (
    <TweenOne
      animation={{ 
        x: 80, 
        scale: 0.5, 
        rotate: 120, 
        yoyo: true, // demo 演示需要
        repeat: -1, // demo 演示需要
        duration: 1000
      }}
      paused={props.paused}
      style={{ transform: 'translateX(-80px)' }}
      className="code-box-shape"
    />
  );
}

Demo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

ReactDOM.render(<Demo/>, mountNode);

```
