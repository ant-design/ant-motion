import React from 'react';
import PropTypes from 'prop-types';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import * as utils from '../utils';

export default class Page3 extends React.PureComponent {
  static propTypes = {
    onButtonClick: PropTypes.func,
  };

  static defaultProps = {
    onButtonClick: () => {
    },
  };

  render() {
    const { isZhCN } = this.props;
    return (
      <div className="home-page-wrapper page3">
        <OverPack
          className="page"
          playScale={0.3}
          id="page3"
        >
          <QueueAnim
            key="text"
            className="page-text white-text"
            type="bottom"
            leaveReverse
          >
            <h1 key="h1"><FormattedMessage id="app.home.page3.title" /></h1>
            <p key="p">
              <FormattedMessage id="app.home.page3.content" />
            </p>
            <div
              key="a"
              className="home-button"
            >
              <Link to={utils.getLocalizedPathname('/api/tween-one', isZhCN)} onClick={this.props.onButtonClick}>
                <FormattedMessage id="app.home.page3.button" />
              </Link>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}
