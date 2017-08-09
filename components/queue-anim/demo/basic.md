---
order: 1
title: 进场和离场
---

同时支持进场和离场动画。

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
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <QueueAnim className="demo-content">
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
