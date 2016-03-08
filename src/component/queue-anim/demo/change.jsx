import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Button from 'antd/lib/button';

class Demo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
      items: [
        <li key="0"></li>,
        <li key="1"></li>,
        <li key="2"></li>,
      ],
    };
    [
      'onClick',
      'onAdd',
      'onRemove',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  onAdd() {
    const items = this.state.items;
    items.push(<li key={Date.now()}></li>);
    this.setState({
      show: true,
      items,
    });
  }

  onRemove() {
    const items = this.state.items;
    items.splice(items.length - 1, 1);
    this.setState({
      show: true,
      items,
    });
  }

  getStyle() {
    return `
    .code-box-demo .queue-anim-leaving{
      position: relative !important;
    }
    `;
  }

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: this.getStyle() }}></style>
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>切换</Button>
          <Button onClick={this.onAdd} style={{ marginLeft: 10 }}>添加</Button>
          <Button onClick={this.onRemove} style={{ marginLeft: 10 }}>删除</Button>
        </p>
        <div className="demo-content">
          <div className="demo-listBox" key="b">
            <div className="demo-list">
              <div className="title"></div>
              <QueueAnim component="ul" type={['right', 'left']}>
                {this.state.show ? this.state.items : null}
              </QueueAnim>
            </div>
          </div>
        </div>
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
      items: [
        <li key="0"></li>,
        <li key="1"></li>,
        <li key="2"></li>
      ],
    };
    [
      'onClick',
      'onAdd',
      'onRemove',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  onAdd() {
    let items = this.state.items;
    items.push(<li key={Date.now()}></li>);
    this.setState({
      show: true,
      items,
    });
  }

  onRemove() {
    let items = this.state.items;
    items.splice(items.length - 1, 1);
    this.setState({
      show: true,
      items,
    });
  }

  render() {
    return (
      <div>
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>切换</Button>
          <Button onClick={this.onAdd} style={{ marginLeft: 10 }}>添加</Button>
          <Button onClick={this.onRemove} style={{ marginLeft: 10 }}>删除</Button>
        </p>
        <div className="demo-content">
          <div className="demo-listBox" key="b">
            <div className="demo-list">
              <div className="title"></div>
              <QueueAnim component="ul" type={['right', 'left']}>
                {this.state.show ? this.state.items : null}
              </QueueAnim>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, mountNode);`;
const title = '添加删除';
const content = '场景里有增加或删除条目时也会触发动画';

export default {
  Comp: Demo,
  mdString,
  title,
  content,
};
