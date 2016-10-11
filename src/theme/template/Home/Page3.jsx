import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';

import { Link } from 'react-router';

export default class Page3 extends React.Component {
  static contextTypes = {
    tweenAnim: React.PropTypes.object,
  };

  static defaultProps = {
    tweenAnim: {},
  };

  render() {
    return (<OverPack
      className="home-content page3"
      playScale={0.3}
      hideProps={{ video: { reverse: true } }}
      scrollName="page3"
    >
      <QueueAnim
        key="text"
        className="page-text white-text"
        type="bottom"
        leaveReverse
      >
        <h1 key="h1">为产品添加有趣的动效</h1>
        <p key="p">
          通过更有好的交互方式，让动化效果穿梭在不同的元素之间，<br/>
          让产品能够更好的和用户对话。
        </p>
        <div
          key="a"
          className="home-button"
        >
          <Link to="/a/">快速上手</Link>
        </div>
      </QueueAnim>
    </OverPack>);
  }
}
