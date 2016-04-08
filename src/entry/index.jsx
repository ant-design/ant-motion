import '../common/lib';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Header from '../componentElement/Header';
import Footer from '../componentElement/Footer';
import QueueAnim from 'rc-queue-anim';

import Article from '../componentElement/Article';
import ComponentDoc from '../componentElement/ComponentDoc';

import Home from '../home';
import Page from '../componentElement/Page/index';

import language from '../../_site/data/language';
import component from '../../_site/data/component';
import cases from '../../_site/data/cases';


class Index extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const key = this.props.location.pathname;
    const keys = this.props.params.pageName;
    const contentName = this.props.params.contentName;
    const query = this.props.location.query.scrollTo;
    const _key = keys ? 'page' : 'index';
    const child = this.props.children;
    let children = child.props.children;
    let desc;
    switch (keys) {
      case 'language':
        desc = language[`src/${keys}/${contentName || 'time'}.md`];
        children = <Article content={desc} pathname={key} />;
        break;
      case 'cases':
        desc = cases[`src/${keys}/${contentName || 'help'}.md`];
        children = <Article content={desc} pathname={key} />;
        break;
      case 'component':
        desc = component[`src/${keys}/${contentName ? `${contentName}/index` : 'introduce'}.md`];
        if (contentName) {
          children = <ComponentDoc content={desc} pathname={key} contentName={contentName}/>;
        } else {
          children = <Article content={desc} pathname={key} />;
        }
        break;
      default:
        children = null;
    }

    return (<div>
      <Header activeKey={keys} />
      <section className="content" style={{ minHeight: 600 }}>
        <QueueAnim type="bottom" duration={600} ease="easeInOutQuad">
          {
            React.cloneElement(child, {
              key: _key, href: key, _keys: keys, query,
            }, children)
          }
        </QueueAnim>
      </section>
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
