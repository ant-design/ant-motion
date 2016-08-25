import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';

export default class Page1 extends React.Component {
  render(){
    return (<OverPack className="home-content page1" playScale={0.25}>
      <QueueAnim type="bottom" key="text" className="page1-text" leaveReverse>
        <h1 key="h1">基于 React 的动画解决方案</h1>
        <p key="p">
          你需要的潜力来设计一些全新的东西，成帧器是一个设计工具，使用代码做任何事情可能，先锋新模式和突破性的设计。
          寻找最佳的解决方案，而不仅仅是预期之一。
        </p>
        <TweenOne
          key="icon"
          animation={{ y: 20, duration: 2000, yoyo: -1, repeat: -1 }}
          className="icon"
        >
          <Icon type="double-right"/>
        </TweenOne>
      </QueueAnim>

    </OverPack>)
  }
}
