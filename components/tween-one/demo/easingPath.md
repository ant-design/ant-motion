---
order: 3
title: 
  zh-CN: 路径缓动
  en-US: Path Easing
  
mouseEnter: true
---
## zh-CN
鼠标经过或手指按下可查看旋转效果。

## en-US
Mouse hover or touch see the animation.

```jsx
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';

const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.animation = [
      {
        repeatDelay: 500,
        y: -70,
        repeat: -1,
        yoyo: true,
        ease: ease0,
        duration: 1000
      },
      {
        repeatDelay: 500,
        appearTo: 0,
        scaleX: 0,
        scaleY: 2,
        repeat: -1,
        yoyo: true,
        ease: ease1,
        duration: 1000,
      }
    ];
  }

  render() {
    return (
      <div>
        <TweenOne
          animation={this.animation}
          paused={this.props.paused}
          className="code-box-shape"
          style={{
            position: 'absolute',
            transformOrigin: 'center bottom',
          }}
        />
      </div>
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
