import React from 'react';
import QueueAnim from 'rc-queue-anim';
import AnimExplain from './AnimExplain';

class Timer extends React.Component {
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
    return (<div>
      <h1>时间栅格</h1>
      <i className="dotted-line" />
      <p className="text">物体运动在时间栅格中具有不同运动速率和出场，动画停止与启动都不是瞬间完成的，
        因它需要一段缓冲的时间来加速或减速，因此当物体突然移动或停止，会显的很不自然。
      </p>
      <AnimExplain
        animation={{
          left: 410, duration: 1000, repeat: -1,
          yoyo: true, repeatDelay: 500, ease: 'easeInOutCubic',
        }}
        title="1.单物体可视范围内点到点之间的运动"
      >
        单物体可视范围内点到点之间的运动，采用的是
        <span className="text-highlight"> ease-in-out </span>
      </AnimExplain>
      <AnimExplain
        title="2.单物体可视范围外进场的运动"
        leftHide
        animation={{
          left: 410, duration: 1000, repeat: -1,
          repeatDelay: 500, ease: 'easeOutCubic',
        }}
        circleStyle={{ left: -100 }}
      >
        单物体进入可视范围的运动，采用的是
        <span className="text-highlight"> ease-out </span>

      </AnimExplain>
      <AnimExplain
        title="3.单物体可视范围内出场的运动"
        rightHide
        animation={{ left: 510, duration: 1000, repeat: -1, repeatDelay: 500, ease: 'easeInCubic' }}
      >
        单物体出可视范围的运动，采用的是
        <span className="text-highlight"> ease-in </span>
      </AnimExplain>
      <div className="timer-wrapper">
        <h3>4.区块出场栅格</h3>
        <div style={{ width: 760, margin: '20px auto' }}>
          <img src="https://t.alipayobjects.com/images/T1_shmXf0gXXXXXXXX.jpg" width="760" />
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
      </div>
    </div>);
  }
}

export default Timer;
