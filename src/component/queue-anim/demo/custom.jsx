import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Button from 'antd/lib/button';

class Demo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
    };
    [
      'onClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const childrenArr = [<div className="demo-kp" key="a">
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </div>,
      <div className="demo-listBox" key="b">
        <div className="demo-list">
          <div className="title"></div>
          <ul>
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>,
    ];
    return (
      <div>
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <QueueAnim className="demo-content"
          animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            { opacity: [1, 0], translateY: [0, -50] },
          ]}
          ease={['easeOutQuart', 'easeInOutQuart']}
        >
          {this.state.show ? childrenArr : null}
        </QueueAnim>
      </div>
    );
  }
}

const mdString = `import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import Button from 'antd/lib/button';

class Demo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
    };
    [
      'onClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const childrenArr = [<div className="demo-kp" key="a">
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </div>,
      <div className="demo-listBox" key="b">
        <div className="demo-list">
          <div className="title"></div>
          <ul>
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>,
    ];
    return (
      <div>
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <QueueAnim className="demo-content"
          animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            { opacity: [1, 0], translateY: [0, -50] }
          ]}
          ease={['easeOutQuart', 'easeInOutQuart']}
        >
          {this.state.show ? childrenArr: null}
        </QueueAnim>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);`;
const title = '自定义参数';
const content = (
  <span>
    通过把属性设置一个数组来分别表示进出场的效果，
    <code>type</code>、
    <code>animConfig</code>、
    <code>delay</code>、
    <code>duration</code>、
    <code>interval</code>、
    <code>ease</code>
    等属性均支持配置为数组。。
  </span>
);

export default {
  Comp: Demo,
  mdString,
  title,
  content,
};
