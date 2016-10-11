import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import BannerAnim from 'rc-banner-anim';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import { Link } from 'react-router';
TweenOne.plugins.push(SvgMorphPlugin);

const Element = BannerAnim.Element;
const BgElement = Element.BgElement;

export default class Banner extends React.Component {
  static contextTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'banner',
  };

  render() {
    return (<ScrollElement scrollName="banner" className={this.props.className}>
      <div className={`${this.props.className}-text`}>
        <h1>Motion Design</h1>
        <h3>The react animation solution</h3>
        <p>使用 Ant Motion 能够快速在 React 框架中使用动画。<br />
          我们提供了单项，组合动画，以及整套解决方案</p>
        <div>
          <Link to="/language/basic" className={`${this.props.className}-text-button`}>
            立即了解
            <i />
          </Link>
        </div>
      </div>
      <div className={`${this.props.className}-demo`}>
      </div>
      <TweenOne
        className={`${this.props.className}-mouse`}
        animation={{ opacity: 0, type: 'from', delay: 400 }}
      >
        <TweenOne
          className="mouse-bar"
          animation={{ y: 5, yoyo: true, repeat: -1, duration: 900 }}
        />
      </TweenOne>
    </ScrollElement>);
  }
}

