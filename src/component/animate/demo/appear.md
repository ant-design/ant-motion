---
order: 2
title: 开始的进场
---

开始的进场动画, css样式查看第一个demo。


---

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
          transitionAppear
        >
          {this.state.show ? <div show className="code-box-shape" /> : null}
        </Animate>
      </div>
    );
  }
}
ReactDOM.render(<Test />, mountNode);
```

```css
#components-component-demo-appear .fade-appear {
  animation-duration: 5s;
}
```
