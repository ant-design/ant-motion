import React from 'react';
import PropTypes from 'prop-types';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import CoderDemo from './CodeDemo';
import * as utils from '../utils';

export default class Page1 extends React.PureComponent {
  static propTypes = {
    pageData: PropTypes.object,
    utils: PropTypes.object,
    tweenAnim: PropTypes.object,
    onButtonClick: PropTypes.func,
  };

  static defaultProps = {
    pageData: {},
    utils: {},
    tweenAnim: {},
    onButtonClick: () => {
    },
  };

  render() {
    const { isZhCN } = this.props;
    return (
      <div className="home-page-wrapper page1">
        <OverPack
          playScale={0.6}
          className="page vh"
          id="page1"
        >
          <QueueAnim className="page-text" key="text" type="bottom" leaveReverse delay={100}>
            <h1 key="h1"><FormattedMessage id="app.home.page1.title" /></h1>
            <p key="p">
              <FormattedMessage id="app.home.page1.content" />
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
            key="a"
            className="home-button"
            animation={{ ...this.props.tweenAnim, delay: 300 }}
          >
            <Link
              to={utils.getLocalizedPathname('/components/tween-one', isZhCN)}
              onClick={this.props.onButtonClick}
            >
              <FormattedMessage id="app.home.learn-more" />
            </Link>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}
