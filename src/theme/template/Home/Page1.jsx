import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Link } from 'react-router';
import CoderDemo from './CodeDemo';

export default class Page1 extends React.Component {
  static propTypes = {
    pageData: React.PropTypes.object,
    utils: React.PropTypes.object,
    tweenAnim: React.PropTypes.object,
    onButtonClick: React.PropTypes.func,
  };

  static defaultProps = {
    pageData: {},
    utils: {},
    tweenAnim: {},
    onButtonClick: () => {
    },
  };

  render() {
    return (<OverPack
      playScale={0.8}
      className="home-content page1 vh"
      id="page1"
    >
      <QueueAnim className="page-text" key="text" type="bottom" leaveReverse delay={100}>
        <h1 key="h1">AntMotion 让动效更简单</h1>
        <p key="p">
          在 React 框架下，只需要一段简单的代码就可以实现动画效果，可以更好的提高你的工作效率。
        </p>
      </QueueAnim>
      <TweenOne
        className="code-wrapper"
        animation={{ ...this.props.tweenAnim, delay: 200 }}
        key="code"
      >
        <CoderDemo className="code" pageData={this.props.pageData} utils={this.props.utils} />
      </TweenOne>
      <TweenOne
        key="a" className="home-button" animation={{ ...this.props.tweenAnim, delay: 300 }}
      >
        <Link to="/components/tween-one" onClick={this.props.onButtonClick}>了解更多</Link>
      </TweenOne>
    </OverPack>);
  }
}
