import React from 'react';
import TweenOne from 'rc-tween-one';

class Timer extends React.Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {

  }

  render() {
    return (<div>
      <h1>时间栅格</h1>
      <i className="dotted-line" />
      <p className="text">物体运动在时间栅格中具有不同运动速率和出场，动画停止与启动都不是瞬间完成的，
        因它需要一段缓冲的时间来加速或减速，因此当物体突然移动或停止，会显的很不自然。
      </p>
      <div className="timer-wrapper">
        <h3>1.单物体可视范围内点到点之间的运动</h3>
        <div className="demo-wrapper">
          <div className="circle-dashed" style={{ left: 0 }}></div>
          <TweenOne className="circle"
            animation={{ left: 410, duration: 2000, repeat: -1, yoyo: true, repeatDelay: 1000 }}
          />
          <div className="east">
            <i className="line"></i>
            <i className="arrow"></i>
          </div>
          <div className="circle-dashed"></div>
        </div>
        <p className="text-center">单物体可视范围内点到点之间的运动，采用的是
          <span className="text-highlight">ease-in-out。</span>
        </p>
      </div>
    </div>);
  }
}

export default Timer;
