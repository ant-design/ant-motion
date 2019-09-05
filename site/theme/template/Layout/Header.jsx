import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import GitHubButton from 'react-github-button';
import navArr from './nav';
import * as utils from '../utils';

class Header extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    activeKey: PropTypes.any,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: 'header',
  };

  constructor(props) {
    super(props);
    this.state = {
      openAnim: null,
      phoneOpen: false,
      barAnim: [],
    };
  }

  getAnimData = (phoneOpen) => (phoneOpen ? {
    phoneOpen: false,
    openAnim: { opacity: 0, delay: 300, duration: 400 },
    barAnim: [
      { rotate: 0, y: 0, duration: 300 },
      { opacity: 1, duration: 300 },
      { rotate: 0, y: 0, duration: 300 },
    ],
  }
    : {
      phoneOpen: true,
      openAnim: { opacity: 1, duration: 400 },
      barAnim: [
        { rotate: 45, y: 6, duration: 300 },
        { opacity: 0, duration: 300 },
        { rotate: -45, y: -6, duration: 300 },
      ],
    });

  phoneClick = (e, phoneOpen, href, isLogo) => {
    if (!this.props.isMobile || (isLogo && !phoneOpen)) {
      return;
    }
    if (href) {
      e.preventDefault();
      setTimeout(() => {
        this.context.router.push({
          pathname: href,
        });
      }, 600);
    }
    this.setState(this.getAnimData(phoneOpen));
  }

  handleLangChange = () => {
    const { pathname } = this.props.location;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }

    window.location.href = `${currentProtocol}${
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)),
      )
    }`;
  }

  render() {
    const { pathname } = this.props.location;
    const isZhCN = utils.isZhCN(pathname);
    const navToRender = navArr.map((item) => {
      const className = this.props.activeKey === item.key ? 'active' : '';
      const link = utils.getLocalizedPathname(item.href, isZhCN);
      if (item.open) {
        return (
          <li key={item.key}>
            <a href={item.href} target="_blank">{item.name}</a>
          </li>
        );
      }
      return (
        <li key={item.key}>
          <Link
            to={link}
            className={className}
            disabled={item.disabled}
            onClick={(e) => {
              this.phoneClick(e, this.state.phoneOpen, link);
            }}
          >
            {item.name}
          </Link>
        </li>
      );
    });
    const gitBtn = (
      <span className="git-btn">
        <GitHubButton
          type="stargazers"
          namespace="ant-design"
          repo="ant-motion"
        />
      </span>
    );

    navToRender.push(
      <li key="lang" className="lang-btn">
        <Button ghost size="small" onClick={this.handleLangChange}>
          <FormattedMessage id="app.header.lang" />
        </Button>
      </li>
    );
    if (!this.props.isMobile) {
      navToRender.push(
        <li key="git" className="git-btn-li">
          {gitBtn}
        </li>
      );
    }
    return (
      <header
        className={`${this.props.className}-wrapper${this.state.phoneOpen ? ' open' : ''}`}
      >
        <div className={this.props.className}>
          <TweenOne
            className={`${this.props.className}-logo`}
            animation={{ opacity: 0, type: 'from' }}
          >
            <Link
              to={utils.getLocalizedPathname('/', isZhCN)}
              key="logo"
              onClick={(e) => {
                this.phoneClick(e, this.state.phoneOpen, '/', true);
              }}
            >
              <img className="logo-img" alt="img" height="24" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" />
              <img alt="img" height="14" src="https://zos.alipayobjects.com/rmsportal/bNfCyCcgnyTgRmz.svg" />
            </Link>
          </TweenOne>
          {this.props.isMobile && gitBtn}
          {
            this.props.isMobile
              ? (
                <div className="phone-nav">
                  <div
                    className="phone-nav-bar"
                    onClick={(e) => {
                      this.phoneClick(e, this.state.phoneOpen);
                    }}
                  >
                    <TweenOne component="em" animation={this.state.barAnim[0]} />
                    <TweenOne component="em" animation={this.state.barAnim[1]} />
                    <TweenOne component="em" animation={this.state.barAnim[2]} />
                  </div>
                  <TweenOne
                    className="phone-nav-text-wrapper"
                    animation={this.state.openAnim}
                    style={{ pointerEvents: this.state.phoneOpen ? 'auto' : 'none' }}
                  >
                    <QueueAnim
                      component="ul"
                      duration={150}
                      interval={50}
                      delay={[200, 0]}
                      ease={['easeOutQuad', 'easeInQuad']}
                      type="bottom"
                      leaveReverse
                    >
                      {this.state.phoneOpen && navToRender}
                    </QueueAnim>

                  </TweenOne>
                </div>
              )
              : (
                <TweenOne
                  component="nav"
                  className="web-nav"
                  animation={{ opacity: 0, type: 'from' }}
                >
                  <ul>
                    {navToRender}
                  </ul>
                </TweenOne>
              )
          }
        </div>
      </header>
    );
  }
}

export default Header;
