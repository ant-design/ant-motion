import '../common/lib';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import QueueAnim from 'rc-queue-anim';

import Home from '../home';
import Page from '../common/Page';

// import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';
// const history = useStandardScroll(() => hashHistory)();

class Index extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const key = this.props.location.pathname;
    const keys = this.props.params.pageName;
    const contentName = this.props.params.contentName;
    const _key = keys ? 'page' : 'index';
    const child = this.props.children;
    let children = child.props.children;
    switch (keys) {
      case 'language':
        switch (contentName) {
          case 'space':
            children = React.createElement(require('../language/space'));
            break;
          case 'transition':
            children = React.createElement(require('../language/transition'));
            break;
          case 'interact':
            children = React.createElement(require('../language/interact'));
            break;
          case 'aware':
            children = React.createElement(require('../language/aware'));
            break;
          default:
            children = React.createElement(require('../language'));
        }
        break;
      case 'cases':
        switch (contentName) {
          case 'list':
            break;
          default:
            children = React.createElement(require('../cases'));
        }
        break;
      case 'component':
        switch (contentName) {
          case 'tween-one':
            children = React.createElement(require('../component/tween-one/'));
            break;
          case 'queue-anim':
            children = React.createElement(require('../component/queue-anim/'));
            break;
          default:
            children = React.createElement(require('../component'));
        }
        break;
      default:
        children = null;
    }
    return (<div>
      <Header activeKey={keys} />
      <div className="content" style={{ minHeight: 600 }}>
        <QueueAnim type="bottom" duration={600} ease="easeInOutQuad">
          { React.cloneElement(child, { key: _key, href: key, _keys: keys }, children) }
        </QueueAnim>
      </div>
      <Footer />
    </div>);
  }
}

Index.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  params: React.PropTypes.object,
};


ReactDOM.render(<Router history={hashHistory}>
  <Route component={Index} ignoreScrollBehavior>
    <IndexRoute component={Home} />
    <Route path="/" component={Home}>
      <Route path="index" component={Home} />
    </Route>
    <Route path="/:pageName/" component={Page} />
    <Route path="/:pageName/:contentName" component={Page} />
  </Route>
</Router>, document.getElementById('react-content'));
