import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import { Link } from 'react-router';
TweenOne.plugins.push(SvgMorphPlugin);


export default class Banner extends React.Component {
  static contextTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'banner',
  };

  render() {
    return (<ScrollElement scrollName="banner" className={`${this.props.className}-wrapper`}>
      <svg className={`${this.props.className}-bg-center`} width="100%" viewBox="0 0 1200 800">
        <defs>
          <filter id="Blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        <g>
          <TweenOne
            component="circle"
            fill="rgba(161,174,245,.2)"
            r="130"
            cx="350"
            cy="350"
            style={{ filter: 'url(#Blur)' }}
            animation={{ y: 30, repeat: -1, duration: 3000, yoyo: true }}
          />
        </g>
        <g>
          <TweenOne
            component="circle"
            fill="rgba(120,172,254,.15)"
            r="80"
            cx="500"
            cy="420"
            style={{ filter: 'url(#Blur)' }}
            animation={{ y: -30, repeat: -1, duration: 3000, yoyo: true }}
          />
        </g>
      </svg>
      <div className={this.props.className}>
        <QueueAnim type="bottom"
          className={`${this.props.className}-text`}
          delay={300}
        >
          <h1 key="h1">Motion Design</h1>
          <h3 key="h3">The react animation solution</h3>
          <p key="p">
            使用 Ant Motion 能够快速在 React 框架中使用动画。<br />
            我们提供了单项，组合动画，以及整套解决方案
          </p>
          <div key="button">
            <Link to="/language/basic" className={`${this.props.className}-text-button`}>
              立即了解
              <i />
            </Link>
          </div>
        </QueueAnim>
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
      </div>
    </ScrollElement>);
  }
}

