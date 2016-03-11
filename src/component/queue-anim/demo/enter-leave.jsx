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
        <QueueAnim className="demo-content">
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
    return (
      <div>
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <QueueAnim className="demo-content">
          {this.state.show ? [
          <div className="demo-kp" key="a">
            <ul>
              <li/>
              <li/>
              <li/>
            </ul>
          </div>,
          <div className="demo-listBox" key="b">
            <div className="demo-list">
              <div className="title"></div>
              <ul>
                <li/>
                <li/>
                <li/>
              </ul>
            </div>
          </div>
            ] : null}
        </QueueAnim>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);`;
const title = '进场与离场';
const content = '同时支持进场和离场动画。';

export default {
  Comp: Demo,
  mdString,
  title,
  content,
};
