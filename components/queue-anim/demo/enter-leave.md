---
order: 2
title: 
  zh-CN: 属性设置
  en-US: Property Settings
---

## zh-CN

通过把属性设置一个数组来分别表示进出场的效果，`type`、`animConfig`、`delay`、`duration`、`interval`、`ease` 等属性均支持配置为数组。

## en-US
By setting properties to represent the animation of entering and leaving, `type`, `animConfig`, `delay`, `duration`, `interval`, `ease` etc attributes support arrays.

````jsx
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';

class Test extends React.Component{
  state = {
    show: true
  };
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className="queue-demo">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <QueueAnim className="demo-content"
          key="demo"
          type={['right', 'left']}
          ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.state.show ? [
            <div className="demo-thead" key="a">
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </div>,
            <div className="demo-tbody" key="b">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          ] : null}
        </QueueAnim>
      </div>
    );
  }
};

ReactDOM.render(<Test />, mountNode);
````
