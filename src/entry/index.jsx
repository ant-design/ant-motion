import '../common/lib';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import QueueAnim from 'rc-queue-anim';

import Home from '../home';
import Language from '../language';
import Page from '../common/Page';
import Cases from '../cases';

class Index extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const key = this.props.location.pathname;
    const keys = this.props.params.pageName;
    const _key = keys ? 'page' : 'index';
    const child = this.props.children;
    let children = child.props.children;
    if (!child.props.children) {
      switch (keys) {
        case 'language':
          children = <Language />;
          break;
        case 'cases':
          children = <Cases />;
          break;
        default:
          children = null;
      }
    }
    return (<div>
      <Header activeKey={keys} />
      <div className="content" style={{ minHeight: 600 }}>
        <QueueAnim type="bottom" duration={600}>
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
    <Route path="/:pageName" component={Page}>
      <Route path="abc" component={Language} />
    </Route>
  </Route>
</Router>, document.getElementById('react-content'));
