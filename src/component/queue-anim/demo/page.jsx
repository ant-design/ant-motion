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
    const childrenArr = [<div className="demo-header" key="header">
      <div className="logo">
        <img height="20" src="https://os.alipayobjects.com/rmsportal/tdjazOmUHhUKXxZ.svg" />
      </div>
      <QueueAnim component="ul">
        <li key="0" />
        <li key="1" />
        <li key="2" />
        <li key="3" />
        <li key="4" />
      </QueueAnim>
    </div>,
      <QueueAnim className="demo-content" key="content" delay={300}>
        <div className="demo-title" key="title">我是标题</div>
        <div className="demo-kp" key="b">
          <QueueAnim component="ul">
            <li key="0" />
            <li key="1" />
            <li key="2" />
          </QueueAnim>
        </div>
        <div className="demo-title" key="title2">我是标题</div>
        <div className="demo-listBox">
          <QueueAnim className="demo-list" delay={500}>
            <div className="title" key="title3"></div>
            <QueueAnim component="ul" type="bottom" key="li">
              <li key="0" />
              <li key="1" />
              <li key="2" />
              <li key="3" />
              <li key="4" />
            </QueueAnim>
          </QueueAnim>
        </div>
      </QueueAnim>,
      <QueueAnim delay={1000} type="bottom" key="footerBox" style={{ overflow: 'hidden' }}>
        <div className="demo-footer" key="footer"></div>
      </QueueAnim>,
    ];
    return (
      <div>
        <p className="buttons" style={{ marginBottom: 20 }}>
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <QueueAnim type={['right', 'left']}>
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
        <p className="buttons" style={{ marginBottom: 20 }}>
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <QueueAnim type={['right', 'left']}>
          {this.state.show ? [
          <div className="demo-header" key="header">
            <div className="logo">
              <img height="20" src="https://os.alipayobjects.com/rmsportal/tdjazOmUHhUKXxZ.svg" />
            </div>
            <QueueAnim component="ul">
              <li key="0" />
              <li key="1" />
              <li key="2" />
              <li key="3" />
              <li key="4" />
            </QueueAnim>
          </div>,
          <QueueAnim className="demo-content" key="content" delay={300}>
            <div className="demo-title" key="title">我是标题</div>
            <div className="demo-kp" key="b">
              <QueueAnim component="ul">
                <li key="0" />
                <li key="1" />
                <li key="2" />
              </QueueAnim>
            </div>
            <div className="demo-title" key="title2">我是标题</div>
            <div className="demo-listBox">
              <QueueAnim className="demo-list" delay={500}>
                <div className="title" key="title3"></div>
                <QueueAnim component="ul" type="bottom" key="li">
                  <li key="0" />
                  <li key="1" />
                  <li key="2" />
                  <li key="3" />
                  <li key="4" />
                </QueueAnim>
              </QueueAnim>
            </div>
          </QueueAnim>,
          <QueueAnim delay={1000} type="bottom" key="footerBox" style={{ overflow: 'hidden' }}>
            <div className="demo-footer" key="footer"></div>
          </QueueAnim>
            ] : null}
        </QueueAnim>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);`;
const title = '一个复杂些的例子';
const content = '模似一个完整页面';

export default {
  Comp: Demo,
  mdString,
  title,
  content,
};
