---
order: 5
cols: 3
title: 变更动画参数
mouseEnter: true
---

可操作型变更动画。


```jsx
import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import {Button} from 'antd';

class Demo extends React.Component {

  constructor() {
    super(...arguments);
    this.moment = null;
    this.state = {
      moment: null,
      paused: true,
      reverse: false,
    };
    [
      'onClick',
      'onPause',
      'onReverse',
      'onRestart',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onPause() {
    this.setState({
      paused: true,
      moment: null,
    });
  }

  onReverse() {
    this.setState({
      paused: false,
      reverse: true,
      moment: null,
    });
  }

  onRestart() {
    this.setState({
      paused: false,
      reverse: false,
      moment: 0,
    }, () => {
      this.setState({
        moment: null,
      });
    });
  }

  onClick() {
    this.setState({
      paused: false,
      reverse: false,
      moment: null,
    });
  }


  render() {
    return (
      <div>
        <TweenOne
          animation={{ x: 200, duration: 2000 }}
          paused={this.state.paused}
          reverse={this.state.reverse}
          moment={this.state.moment}
          className="code-box-shape"
          style={{ margin: '40px 0' }}
        />
        <div className="demo-buttons"
          style={{ position: 'absolute', width: 292, left: '50%', marginLeft: -146, bottom: 15 }}
        >
          <Button type="primary" onClick={this.onClick}>play</Button>
          <Button type="primary" onClick={this.onPause}>pause</Button>
          <Button type="primary" onClick={this.onReverse}>reverse</Button>
          <Button type="primary" onClick={this.onRestart}>restart</Button>
        </div>
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
