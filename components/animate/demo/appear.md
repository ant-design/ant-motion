---
order: 2
title: 
  zh-CN: 开始的进场
  en-US: Appear
---

## zh-CN
开始的进场动画, css 样式查看第一个 demo。

## en-US
Appear the opening animation, css style to view the first demo.

```jsx
import Animate from 'rc-animate';
import Button from 'antd/lib/button';
class Test extends React.Component{
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
    };
    [
      'onClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }
  
  onClick(){
    this.setState({
      show: !this.state.show,
    });
  }
  
  render(){
    return (
      <div className="code-box-demo-wrapper">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <Animate
          transitionName="fade"
          transitionAppear
        >
          {this.state.show ? 
            <div key="1" className="code-box-shape" /> : null}
        </Animate>
      </div>
    );
  }
}
ReactDOM.render(<Test />, mountNode);
```
