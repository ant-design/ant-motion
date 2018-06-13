---
order: 0
title: 基本动画效果
mouseEnter: true
---

鼠标经过或手指按下可查看位移效果。如 x, y, z, scale, rotate, blur, marign等, 更多参数参考 [动画述语里](language/animate-term);


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
