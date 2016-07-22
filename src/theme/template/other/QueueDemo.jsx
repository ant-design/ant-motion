import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './queueDemo.less';
class Demo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      queueShow: false,
    };
    [
      'mouseOverQueue',
      'mouseOutQueue',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  mouseOverQueue() {
    this.setState({
      queueShow: true,
    });
  }

  mouseOutQueue() {
    this.setState({
      queueShow: false,
    });
  }

  render() {
    const child = [
      <li key="0" />,
      <li key="1" />,
      <li key="2" />,
      <li key="3" />,
    ];
    return (
      <div className="content-wrapper">
        <h3>4.区块出场栅格</h3>
        <div style={{ width: 760, margin: '20px auto' }}>
          <img src="https://t.alipayobjects.com/images/T1_shmXf0gXXXXXXXX.jpg" width="100%" />
        </div>
        <p style={{ width: 760, margin: '20px auto' }}>
          以屏幕的对角线为轴，将页面的栅格体系45°旋转，形成出场栅格体系，
          同一栅格体系里的组件和内容的出场时间和效果相同。如果单位刚好居中则更具页面内容和区块划分。
        </p>
        <h3>示例 demo: (鼠标移到以下灰色区域出来效果)</h3>
        <div className="timer-queue-wrapper"
          onMouseEnter={this.mouseOverQueue}
          onMouseLeave={this.mouseOutQueue}
        >
          <div className="demo-content">
            <div className="demo-kp" key="a">
              <QueueAnim component="ul" animatingClassName={[]} delay={[0, 300]} type="scale"
                ease={['easeOutQuart', 'easeInQuart']} leaveReverse
              >
                {this.state.queueShow ? child : null}
              </QueueAnim>
            </div>
            <div className="demo-kp" key="b">
              <QueueAnim component="ul" animatingClassName={[]} delay={150} type="scale"
                ease={['easeOutQuart', 'easeInQuart']} leaveReverse
              >
                {this.state.queueShow ? child : null}
              </QueueAnim>
            </div>
            <div className="demo-kp" key="c">
              <QueueAnim component="ul" animatingClassName={[]} delay={[300, 0]} type="scale"
                ease={['easeOutQuart', 'easeInQuart']} leaveReverse
              >
                {this.state.queueShow ? child : null }
              </QueueAnim>
            </div>
          </div>
        </div>
      </div>);
  }
}
export default Demo;
