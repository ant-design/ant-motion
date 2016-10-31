import React, { PropTypes } from 'react';
import { TweenOneGroup } from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router';
import Affix from 'antd/lib/affix';
import nav from '../Layout/nav';
import { scrollClick } from '../utils';

const title = {};
nav.forEach((item) => {
  title[item.key] = item.name;
});

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      affixAnim: {},
      isHash: false,
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    this.hash = null;
    this.state.isHash = false;
    const props = this.props;
    const pathNames = props.pathname.split('/');
    const isComponent = pathNames[0] === 'components';
    if (isComponent) {
      if (window.addEventListener) {
        window.addEventListener('scroll', this.onScroll);
      } else {
        window.attachEvent('onscroll', this.onScroll);
      }
    } else {
      this.componentWillUnmount();
    }
  }

  componentWillUnmount() {
    this.hash = null;
    if (window.addEventListener) {
      window.removeEventListener('scroll', this.onScroll);
    } else {
      window.detachEvent('onscroll', this.onScroll);
    }
  }

  onScroll = () => {
    if (this.hash !== window.location.hash) {
      this.hash = window.location.hash;
      this.setState({
        isHash: true,
      });
    }
  }

  getModuleData = (pageData) => {
    const moduleData = {};
    Object.keys(pageData).forEach((key) => {
      const children = Object.keys(pageData[key]).map(cKey =>
        pageData[key][cKey].index || pageData[key][cKey]
      );
      moduleData[key] = children;
    });
    return moduleData;
  };

  getMenuItems(moduleData, pathNames, isComponent, isNav) {
    if (!moduleData) {
      return null;
    }
    const splicingListArr = [];
    if (pathNames[0] === 'cases') {
      // { meta: { filename: 'cases/full', english: 'Full', chinese: '完整模板选择', order: 2 } }
      splicingListArr.push(
        { meta: { filename: 'cases/splicing', english: 'Splicing', chinese: '自由搭配模板', order: 1 } }
      );
    }
    const children = moduleData.concat(splicingListArr).filter(item => !item.meta.hidden)
      .sort((a, b) => a.meta.order - b.meta.order);
    return children.map((item, i) => {
      const meta = item.meta;
      let link = meta.filename.replace(/(\/index)|(.md)/g, '');
      const path = Array.isArray(pathNames) ? pathNames.join('/') : pathNames.replace('#', '');
      const hash = this.state.isHash && this.hash.replace('#', '');
      const className = hash === meta.id || path === link ||
      (!hash && ((!path && i === 0) || path === meta.id)) ? 'active' : '';
      // api 页面，链接把 components 转成 api
      link = this.props.pathname.match('api') ? link.replace('components', 'api') : link;
      let linkToChildren = link.split('/')[1] === pathNames[1] ?
        (<a>
          {isNav ? meta.chinese : <span>{meta.chinese || meta.english}</span>}
        </a>) :
        (<Link to={link}>
          {isNav ? meta.chinese : <span>{meta.chinese || meta.english}</span>}
        </Link>);
      linkToChildren = isComponent ?
        <a href={`#${meta.id}`} onClick={this.scrollClick}>
          {meta.title}
        </a> : linkToChildren;
      return (<li
        key={meta.english || meta.chinese || meta.id}
        className={className}
        disabled={meta.disabled}
        style={isNav ? { width: `${100 / children.length}%` } : null}
      >
        {linkToChildren}
      </li>);
    });
  }

  scrollClick = (e) => {
    e.preventDefault();
    scrollClick(e);
  };

  render() {
    const props = this.props;
    // eslint
    const className = this.props.className;
    const pathNames = props.pathname.split('/');
    const hash = props.hash;
    const isComponent = pathNames[0] === 'components';
    let moduleData = this.getModuleData(props.pageData);
    // Ａpi页面, 地址转成 components;
    pathNames[0] = pathNames[0] === 'api' ? 'components' : pathNames[0];
    const navToRender = isComponent ?
      this.getMenuItems(moduleData[pathNames[0]], pathNames, false, true) : null;
    moduleData = isComponent ?
      this.getModuleData(props.pageData[pathNames[0]][pathNames[1]]) :
      moduleData;

    const listToRender = moduleData && this.getMenuItems(isComponent ?
        moduleData.demo : moduleData[pathNames[0]], isComponent ? hash : pathNames, isComponent);
    const pageData = props.pathname.match('api') ?
      props.pageData.components[pathNames[1]].index : props.pageData;
    const children = props.pathname.match('api') ?
      React.cloneElement(props.children, { pageData }) : props.children;
    const listKey = pathNames[0] === 'components' && !props.pathname.match('api') ?
      props.pathname : pathNames[0];
    return (<div className={className}>
      <TweenOneGroup
        enter={{ height: 0, type: 'from', ease: 'easeInOutCubic' }}
        leave={{ height: 0, ease: 'easeInOutCubic' }}
        component=""
      >
        {navToRender && <div key="nav" className={`${className}-nav`}>
          <ul>
            {navToRender}
          </ul>
        </div>}
      </TweenOneGroup>
      <TweenOneGroup
        enter={{ top: 30, type: 'from', opacity: 0 }}
        leave={{ top: -30, opacity: 0 }}
        className={`${className}-wrapper`}
      >
        {listToRender &&
          (<Affix offsetTop={60} key="list" className="list-wrapper">
            <QueueAnim
              type={['bottom', 'top']}
              duration={450}
              ease="easeInOutQuad"
              className="list"
            >
              <h2 key={`${props.pathname.split('/')[0]}-title`}>
                {isComponent ? '范例' : title[pathNames[0]]}
              </h2>
              <QueueAnim
                component="ul"
                key={listKey}
                type="bottom"
                duration={300}
                interval={50}
                ease="easeInOutQuad"
                leaveReverse
              >
                {listToRender}
              </QueueAnim>
            </QueueAnim>
          </Affix>)}
        <section key="content">
          <TweenOneGroup
            enter={{ y: 30, type: 'from', opacity: 0 }}
            leave={{ y: -30, opacity: 0 }}
            className={`${className}-content`}
            style={{ minHeight: this.state.minHeight }}
          >
            <div key={props.pathname}>{children}</div>
          </TweenOneGroup>
        </section>
      </TweenOneGroup>
    </div>);
  }
}
Page.propTypes = {
  className: PropTypes.string,
  pathname: PropTypes.string,
};

Page.defaultProps = {
  className: 'page',
};
export default Page;
