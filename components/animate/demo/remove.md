---
order: 1
title: 删除子级
---

动画出场后将子级删除掉。

```jsx
import Animate from 'rc-animate';
import { Button } from 'antd';
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
      <div>
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <Animate
          showProp="show"
          transitionName="fade"
        >
          {this.state.show ? <div show className="code-box-shape" /> : null}
        </Animate>
      </div>
    );
  }
}
ReactDOM.render(<Test />, mountNode);
```
