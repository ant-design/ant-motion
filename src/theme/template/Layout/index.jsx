import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Page from '../Content/Page';
import TweenOne from 'rc-tween-one';
import '../../static/style.js';
class Layout extends React.Component {
  constructor() {
    super(...arguments);
  }

  onChange = (e) => {
    // fixed 与 transform
    if(e.type === 'enter'){
      const dom = ReactDOM.findDOMNode(this.refs.content);
      Array.prototype.slice.call(dom.children).forEach(item => {
        item.style.transform = 'none';
      })
    }
  }

  render() {
    const path = this.props.location.pathname;
    let pathKey = path && path.split('/')[0];
    const key = !pathKey ? 'index' : 'page';
    const children = !pathKey ?
      React.cloneElement(this.props.children, {
        key: key,
        ref: key,
      }) : (<Page key={key} ref={key} pathname={this.props.location.pathname} pageData={this.props.pageData}>
      {this.props.children}
    </Page>);
    console.log(this.props)
    return (<div id="react-root" className={!pathKey ? 'home' : ''}>
      <Header activeKey={pathKey} />
      <TweenOne.TweenOneGroup className="content-wrapper"
        onEnd={this.onChange}
        enter={{ y: 30, type: 'from', opacity: 0, ease: 'easeOutQuart'}}
        leave={{ y: -30, opacity:0, ease: 'easeInOutQuart' }}
        ref='content'
      >
        {children}
      </TweenOne.TweenOneGroup>
      <Footer />
    </div>)
  }
}

export default Layout;

