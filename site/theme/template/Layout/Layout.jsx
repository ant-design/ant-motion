import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import TweenOne from 'rc-tween-one';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Footer from './Footer';
import Page from '../Content/Page';
import '../../static/style';

import enLocale from '../../en-US';
import cnLocale from '../../zh-CN';
import * as utils from '../utils';

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  require('../../static/style');

  // Expose to iframe
  window.react = React;
  window['react-dom'] = ReactDOM;
  window.antd = require('antd');
  /* eslint-enable global-require */
}

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    localizedPageData: PropTypes.any,
  };

  static childContextTypes = {
    isMobile: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const appLocale = utils.isZhCN(pathname) ? cnLocale : enLocale;

    this.state = {
      appLocale,
      isMobile,
    };
  }

  getChildContext() {
    const { isMobile: mobile } = this.state;
    return { isMobile: mobile };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onChange = (e) => {
    // fixed 与 transform
    if (e.type === 'enter') {
      const dom = ReactDOM.findDOMNode(this.content);
      Array.prototype.slice.call(dom.children).forEach((item) => {
        const cItem = item;
        cItem.style.transform = 'none';
      });
    }
  }

  render() {
    const { location, children, localizedPageData } = this.props;
    const { pathname, hash } = location;
    const { appLocale } = this.state;
    const pathKey = pathname && pathname.split('/')[0].replace('-cn', '');
    const key = !pathKey || pathKey === 'index' ? 'index' : 'page';
    const childrenToRender = key === 'index' || pathKey === 'exhibition'
      ? React.cloneElement(this.props.children, {
        key: pathKey ? pathname : key,
        localizedPageData,
        isMobile: this.state.isMobile,
      })
      : (
        <Page
          {...this.props}
          key={key}
          pathname={pathname}
          hash={hash}
          isMobile={this.state.isMobile}
          localizedPageData={localizedPageData}
        >
          {children}
        </Page>
      );
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <ConfigProvider locale={appLocale.locale === 'zh-CN' ? zhCN : null}>
          <div id="react-root" className={key === 'index' ? 'home' : ''}>
            <Header {...this.props} activeKey={pathKey} isMobile={this.state.isMobile} />
            <TweenOne.TweenOneGroup
              className="content-wrapper"
              onEnd={this.onChange}
              enter={{ type: 'from', opacity: 0, ease: 'easeOutQuart' }}
              leave={{ opacity: 0, ease: 'easeInOutQuart' }}
              ref={(c) => { this.content = c; }}
            >
              {
                childrenToRender
              }
            </TweenOne.TweenOneGroup>
            <Footer {...this.props} />
          </div>
        </ConfigProvider>
      </IntlProvider>
    );
  }
}

export default Layout;
