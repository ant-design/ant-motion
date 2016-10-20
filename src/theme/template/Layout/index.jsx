import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import Header from './Header';
import Footer from './Footer';
import Page from '../Content/Page';
import '../../static/style';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    pageData: PropTypes.any,
  };

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
      >
        {this.props.children}
      </Page>);
    return (<div id="react-root" className={!pathKey ? 'home' : ''}>
      <Header activeKey={pathKey} />
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

export default Layout;

