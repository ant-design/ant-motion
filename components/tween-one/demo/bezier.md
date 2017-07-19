---
order: 10
title: 曲线动画
mouseEnter: true
vertical: true
---

贝赛尔曲线动画。功能重复，即将去除，请使用 PathPlugin;


```jsx
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);
class Demo extends React.Component {

  constructor(props) {
    super();
    this.animation = {
      bezier: {
        type: 'soft',
        autoRotate: true,
        vars: [
          { x: 150, y: 150 },
          { x: 300, y: 0 },
          { x: 450, y: 150 },
          { x: 600, y: 0 },
        ],
      },
      duration: 5000,
    };
  }

  render() {
    return (
      <div style={{ position: 'relative', height: 200, width: 650, margin: '40px auto' }}>
        <TweenOne
          animation={this.animation}
          style={{ margin: 0 }}
          className="code-box-shape"
          paused={this.props.paused}
        />
        <span className="demo-bezier-shape"></span>
        <span style={{ transform: 'translate(150px,150px)' }} className="demo-bezier-shape"></span>
        <span style={{ transform: 'translate(300px,0px)' }} className="demo-bezier-shape" ></span>
        <span style={{ transform: 'translate(450px,150px)' }} className="demo-bezier-shape" ></span>
        <span style={{ transform: 'translate(600px,0px)' }} className="demo-bezier-shape" ></span>
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
