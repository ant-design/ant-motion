import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Page from '../Content/Page';
import TweenOne from 'rc-tween-one';
class Layout extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const path = this.props.routes[1].path;
    let pathKey = path && path.split('/')[1];
    const indexOr404 = path === '*' ? '404' : 'index';
    const key = pathKey ? 'page' : indexOr404;
    const children = key === 'index' || path === '*' ?
      React.cloneElement(this.props.children, {
        key: key,
      }) : (<Page key={key} pathname={this.props.location.pathname} pageData={this.props.pageData}>
      {this.props.children}
    </Page>);
    pathKey = path === '*' ? '404' : pathKey;
    return (<div id="react-root">
      <Header activeKey={pathKey} />
      <TweenOne.TweenOneGroup className="content-wrapper"
        enter={{ y: '+=30', type: 'from', opacity: 0, ease: 'easeOutQuart'}}
        leave={{ y: '+=30', opacity:0, ease: 'easeInOutQuart' }}
      >
        {children}
      </TweenOne.TweenOneGroup>
      <Footer />
    </div>)
  }
}

export default Layout;

