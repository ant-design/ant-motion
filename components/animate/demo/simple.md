---
order: 0
title: 
  zh-CN: 简单的例子
  en-US: Simple
---
## zh-CN
同时支持进场和离场动画。

## en-US
Both enter and leave animations are supported.

```jsx
import Animate from 'rc-animate';
import Button from 'antd/lib/button';
const Div = (props) => {
  const childrenProps = { ...props };
  delete childrenProps.show;
  return <div {...childrenProps} />;
};
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
          showProp="show"
          transitionName="fade"
        >
          <Div show={this.state.show} className="code-box-shape" />
        </Animate>
      </div>
    );
  }
}
ReactDOM.render(<Test />, mountNode);
```

```css
.fade-enter {
  opacity: 0;
  animation-duration: .5s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
  animation-play-state: paused;
}

.fade-appear {
  opacity: 0;
  animation-duration: .5s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
  animation-play-state: paused;
}

.fade-leave {
  animation-duration: .5s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
  animation-play-state: paused;
}

.fade-enter.fade-enter-active {
  animation-name: fadeIn;
  animation-play-state: running;
}

.fade-appear.fade-appear-active {
  animation-name: fadeIn;
  animation-play-state: running;
}

.fade-leave.fade-leave-active {
  animation-name: fadeOut;
  animation-play-state: running;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

```
