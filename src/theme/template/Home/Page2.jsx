import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import CoderDemo from './CodeDemo';

import { Link } from 'react-router';

export default class Page2 extends React.Component {
  static contextTypes = {
    pageData: React.PropTypes.object,
    utils: React.PropTypes.object,
    tweenAnim: React.PropTypes.object,
  };

  static defaultProps = {
    pageData: {},
    utils: {},
    tweenAnim: {},
  };
  render() {
    return (<OverPack
      playScale={0.8}
      className="home-content page2 vh"
      hideProps={{ code: { reverse: true } }}
    >
      <TweenOne
        className="code-wrapper"
        animation={this.props.tweenAnim}
        key="code"
      >
        <CoderDemo className="code" pageData={this.props.pageData} utils={this.props.utils}/>
      </TweenOne>
      <QueueAnim className="page2-text white-text" key="text" type="bottom" leaveReverse delay={100}>
        <h2 key="h1">AntMotion 让动效更简单</h2>
        <p key="p">
          你需要的潜力来设计一些全新的东西，成帧器是一个设计工具，
          使用代码做任何事情可能，先锋新模式和突破性的设计,先锋新模式和突破性的设计
        </p>
        <div key="a" className="home-button"><Link to="/getting/install">快速上手</Link></div>
      </QueueAnim>
    </OverPack>)
  }
}
