import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { TweenOneGroup } from 'rc-tween-one';
import classnames from 'classnames';
import Cookie from 'universal-cookie';
import { Link } from 'react-router';
import { Tag } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Page from '../Content/Page';
import CheckableTagGroup from '../LandingPage/CheckableTagGroup';
import { enquireScreen, getModuleData, reSort } from '../utils';
import { classify } from '../LandingPage/data';

import '../../static/style';

const { CheckableTag } = Tag;
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class Index extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    pageData: PropTypes.any,
  }
  constructor(props) {
    super(props);
    this.cookies = new Cookie();
    this.cookiesName = 'ANTMOTION_grid';
    const gridType = this.cookies.get(this.cookiesName) || 'big';
    this.state = {
      isMobile,
      gridType,
      classify: 'all',
    };
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
        cItem.style.transform = '';
      });
    }
  }

  onGridClick = () => {
    const gridType = this.state.gridType === 'big' ? 'min' : 'big';
    this.setState({
      gridType,
    });
    this.cookies.set(this.cookiesName, gridType);
  }

  onTagChange = (e) => {
    this.setState({
      classify: e,
    });
  }

  getTowNavItems = (metaArray) => {
    const { location } = this.props;
    const path = location.pathname;
    return metaArray.map((meta) => {
      const link = meta.filename.replace(/(\/index)|(.md)/g, '');
      const className = link.indexOf(path) >= 0 || path.indexOf(link) >= 0 ? 'active' : '';
      const linkToChildren = (<Link to={className ? '' : link}>
        {meta.chinese}
      </Link>);
      return (
        <li
          key={meta.english || meta.chinese || meta.id}
          className={className}
          disabled={meta.disabled}
        >
          {linkToChildren}
        </li>
      );
    });
  }

  getNavChildren = (navToRender, key, addClassName) => (
    navToRender && (
      <div className="page-nav-wrapper" key="nav">
        <TweenOneGroup
          appear={false}
          key="nav"
          className={classnames('page-nav', { [`${key}-nav`]: addClassName })}
        >
          <ul key={key}>
            {navToRender}
          </ul>
        </TweenOneGroup>
      </div>)
  )

  getLandingPageNav = () => {
    // const classifyUrl = parseFloat(getURLData('classify')) || 'all';
    const classifyToRrender = Object.keys(classify).map(key => (
      <CheckableTag
        key={classify[key].toString()}
        value={classify[key].toString()}
        defaultValue={this.state.classify}
      >
        {key}
      </CheckableTag>
    ));
    return ([
      <li className="landing-classify-name" key="classify">分类:</li>,
      <CheckableTagGroup
        key="class"
        className="landing-classify"
        component="li"
        onChange={this.onTagChange}
      >
        {classifyToRrender}
      </CheckableTagGroup>,
      <li className="landing-grid" key="grid">
        <div onClick={this.onGridClick} className={classnames({ big: this.state.gridType !== 'big' })}>
          <i />
          <i />
          <i />
        </div>
      </li>,
    ]);
  }

  render() {
    const { location, pageData } = this.props;
    const path = location.pathname;
    const pathKey = path && path.split('/')[0];
    const key = !pathKey ? 'index' : 'page';
    const onlyPages = ['exhibition', 'landingpage'];
    const navShowArray = ['components', 'landingpage'];
    const navShowSort = navShowArray.indexOf(pathKey);
    let navToRender;
    const moduleData = getModuleData(pageData);
    switch (navShowSort) {
      case 0: {
        const meunMetaArray = reSort(moduleData[pathKey]).map(item => item.meta);
        navToRender = this.getNavChildren(!this.state.isMobile ?
          this.getTowNavItems(meunMetaArray) : null, 'component');
        break;
      }
      case 1: {
        navToRender = this.getNavChildren(this.getLandingPageNav(), 'landingpage', true);
        break;
      }
      default:
        break;
    }
    const children = !pathKey || onlyPages.indexOf(pathKey) >= 0 ?
      React.cloneElement(this.props.children, {
        key: pathKey ? path : key,
        gridType: this.state.gridType,
        classify: this.state.classify,
      }) :
      (<Page
        key={key}
        pathname={location.pathname}
        pageData={pageData}
        moduleData={moduleData}
        hash={location.hash}
        isMobile={this.state.isMobile}
        prefixCls={classnames({ 'padding-top': !!navToRender })}
      >
        {this.props.children}
      </Page>);
    return (<div id="react-root" className={classnames({ home: !pathKey })}>
      <Header activeKey={pathKey} isMobile={this.state.isMobile} />
      <TweenOneGroup
        enter={{ height: 0, type: 'from', ease: 'easeInOutCubic' }}
        leave={{ height: 0, ease: 'easeInOutCubic' }}
        component=""
      >
        {navToRender}
      </TweenOneGroup>
      <TweenOneGroup
        className="content-wrapper"
        onEnd={this.onChange}
        enter={{ type: 'from', opacity: 0, ease: 'easeOutQuart' }}
        leave={{ opacity: 0, ease: 'easeInOutQuart' }}
        ref={(c) => { this.content = c; }}
      >
        {children}
      </TweenOneGroup>
      <Footer />
    </div>);
  }
}

export default Index;

