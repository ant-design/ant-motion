---
order: 1
title: 
  zh-CN: 删除子级
  en-US: Remove Child
---

## zh-CN

动画出场后将子级删除掉。

## en-US
The child is deleted after the animation leave.


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
          component=""
          transitionName="fade"
        >
          {
            this.state.show ? 
              <div key="1" className="code-box-shape" /> : null}
        </Animate>
      </div>
    );
  }
}
ReactDOM.render(<Test />, mountNode);
```
