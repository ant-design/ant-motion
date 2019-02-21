---
order: 5
title: 
  zh-CN: SVG 线性动画
  en-US: SVG Linear Animate
---

## zh-CN
基本线性生成与消失的动态效果。

## en-US
Basic linear generation and disappearing dynamic effects.

```jsx
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import PropTypes from 'prop-types';
TweenOne.plugins.push(SvgDrawPlugin);

const dataStartArr = ['30 150', '50% 50%', '30% 200', '20 30%', 0, '100%'];
let i = 0;
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tweenData: '100%',
    };
  }
  
  onClick() {
    const tweenData = dataStartArr[i];
    this.setState({
      tweenData,
    });
    i++;
    i = i >= dataStartArr.length ? 0 : i;
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Button type="primary" onClick={this.onClick.bind(this)}>
          Switch
        </Button>
        <svg width="200" height="84" version="1.2"
          style={{ display: 'block', margin: 'auto' }}
        >
          <TweenOne
            animation={{ SVGDraw: this.state.tweenData, duration: 1000 }}
            style={{ fill: 'none', strokeWidth: 10, stroke: '#019BF0' }}
            component="path"
            d="M10,10c65,50,115,50,180,0"
          />
        </svg>
        <p>Current Param: {this.state.tweenData}</p>
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
