---
order: 6
title: svg 线性动画
---

点击切换线效果。


```jsx
import TweenOne from 'rc-tween-one';
import {Button} from 'antd';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
TweenOne.plugins.push(SvgDrawPlugin);

const dataStartArr = ['30 150', '50% 50%', '30% 200', '20 30%', 0, '100%'];
let i = 0;
class Demo extends React.Component {

  constructor() {
    super(...arguments);
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
          点击切换
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
        <p>当前参数：{this.state.tweenData}</p>
      </div>
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
