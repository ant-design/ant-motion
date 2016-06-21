---
order: 6
cols: 1
title: 曲线动画
mouseEnter: true
---

贝赛尔曲线动画。


```jsx
import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div style={{ position: 'relative', height: 200, width: 800, margin: '20px auto' }}>
        <TweenOne
          animation={{
            bezier: {
              type: 'soft',
              autoRotate: true,
              vars: [
                { x: 200, y: 200 },
                { x: 400, y: 0 },
                { x: 600, y: 200 },
                { x: 800, y: 0 },
              ],
              yoyo: true,
              repeat: -1,
            },
            duration: 5000,
          }}
          style={{ margin: 0 }}
          className="code-box-shape"
          paused={this.props.paused}
        />
        <span className="demo-bezier-shape"></span>
        <span style={{ transform: 'translate(200px,200px)' }} className="demo-bezier-shape"></span>
        <span style={{ transform: 'translate(400px,0px)' }} className="demo-bezier-shape" ></span>
        <span style={{ transform: 'translate(600px,200px)' }} className="demo-bezier-shape" ></span>
        <span style={{ transform: 'translate(800px,0px)' }} className="demo-bezier-shape" ></span>
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
