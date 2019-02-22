import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Icon } from 'antd';
import Demo from './Demo';
import * as utils from '../utils';

TweenOne.plugins.push(SvgMorphPlugin);

export default class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'banner',
  };

  render() {
    const { isZhCN } = this.props;
    return (
      <ScrollElement id="banner" className={`${this.props.className}-wrapper`}>
        <svg className={`${this.props.className}-bg-center`} width="100%" viewBox="0 0 1200 800">
          <TweenOne
            component="circle"
            fill="rgba(161,174,245,.15)"
            r="130"
            cx="350"
            cy="350"
            animation={{
              y: 30, x: -10, repeat: -1, duration: 3000, yoyo: true,
            }}
          />
          <TweenOne
            component="circle"
            fill="rgba(120,172,254,.1)"
            r="80"
            cx="500"
            cy="420"
            animation={{
              y: -30, x: 10, repeat: -1, duration: 3000, yoyo: true,
            }}
          />
        </svg>
        <div className={this.props.className}>
          <div className={`${this.props.className}-demo`}>
            <Demo />
          </div>
          <QueueAnim
            type="bottom"
            className={`${this.props.className}-text`}
            delay={300}
          >
            <h1 key="h1">Motion Design</h1>
            <h3 key="h3">Animation specification and components of Ant Design.</h3>
            <p key="p">
              <FormattedMessage id="app.home.introduce" />
              <br />
              <FormattedMessage id="app.home.introduce2" />
            </p>
            <div key="button">
              <Link
                to={utils.getLocalizedPathname('/language/basic', isZhCN)}
                className={`${this.props.className}-text-button`}
              >
                <FormattedMessage id="app.home.learn-more" />
                <i />
              </Link>
              <a
                className={`${this.props.className}-text-button template`}
                href={`https://landing.ant.design/edit${utils.getLocalizedPathname('/', isZhCN)}`}
                target="_blank"
              >
                <FormattedMessage id="app.home.enter-editor" />
                <i />
              </a>
            </div>
          </QueueAnim>
          <TweenOne
            animation={{ opacity: 0, type: 'from', delay: 400 }}
            className={`${this.props.className}-down-wrapper`}
          >
            <div key="down" className={`${this.props.className}-down`}>
              <TweenOne animation={{
                y: 5, yoyo: true, repeat: -1, duration: 900,
              }}
              >
                <Icon type="down-circle-o" />
              </TweenOne>
            </div>
            <div
              className={`${this.props.className}-mouse`}
              key="mouse"
            >
              <TweenOne
                className="mouse-bar"
                animation={{
                  y: 5, yoyo: true, repeat: -1, duration: 900,
                }}
              />
            </div>
          </TweenOne>
        </div>
      </ScrollElement>
    );
  }
}
