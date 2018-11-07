import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { notification } from 'antd';
import TweenOne from 'rc-tween-one';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Footer from './Footer';
import Page from '../Content/Page';
import '../../static/style';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class Index extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    pageData: PropTypes.any,
  };

  state = {
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
    const args = {
      message: '编辑器下线通知',
      description: (
        <div>
          <a href="https://landing.ant.design">Ant Deisng Landing</a>
          {' '}
          测试版已经上线，本网站的模板编辑系统将会下线，请移至
          {' '}
          <a href="https://landing.ant.design">Ant Deisng Landing</a>
          {' '}
          重新编辑你的网页。
        </div>
      ),
      duration: 0,
      placement: 'bottomLeft',
    };
    notification.warning(args);
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
    const path = this.props.location.pathname;
    const pathKey = path && path.split('/')[0];
    const key = !pathKey ? 'index' : 'page';
    const children = !pathKey || pathKey === 'exhibition' ?
      React.cloneElement(this.props.children, {
        key: pathKey ? path : key,
      }) :
      (<Page
        key={key}
        pathname={this.props.location.pathname}
        pageData={this.props.pageData}
        hash={this.props.location.hash}
        isMobile={this.state.isMobile}
      >
        {this.props.children}
      </Page>);
    return (
      <div id="react-root" className={!pathKey ? 'home' : ''}>
        <Header activeKey={pathKey} isMobile={this.state.isMobile} />
        <TweenOne.TweenOneGroup
          className="content-wrapper"
          onEnd={this.onChange}
          enter={{ type: 'from', opacity: 0, ease: 'easeOutQuart' }}
          leave={{ opacity: 0, ease: 'easeInOutQuart' }}
          ref={(c) => { this.content = c; }}
        >
          {children}
        </TweenOne.TweenOneGroup>
        <Footer />
      </div>);
  }
}

export default Index;

