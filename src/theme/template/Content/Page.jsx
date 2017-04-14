import React, { PropTypes } from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router';
import { Affix } from 'antd';
import nav from '../Layout/nav';
import { scrollClick, enquireScreen } from '../utils';

const title = {};
nav.forEach((item) => {
  title[item.key] = item.name;
});

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.isMode = false;
    enquireScreen((bool) => {
      this.isMode = bool;
      if (this.enter) {
        this.setState({
          isMode: this.isMode,
        });
      }
    });
    this.state = {
      affixAnim: {},
      isHash: false,
      isMode: this.isMode,
      open: false,
      zIndex: 998,
      barAnim: [],
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
    this.enter = true;
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
    if (!pageData) {
      return null;
    }
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
        (<a href={`#${meta.id}`} onClick={this.cScrollClick}>
          {meta.title}
        </a>) : linkToChildren;
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

  getTransitionEnd = () => {
    const transEndEventNames = {
      transition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
    };
    return Object.keys(transEndEventNames).map((name) => {
      if (typeof document.body.style[name] === 'string') {
        return transEndEventNames[name];
      }
      return null;
    }).filter(item => item)[0];
  }

  setZIndex = () => {
    this.setState({
      zIndex: 998,
    });
  }

  getListChildren = (cPathNames, cModuleData, isComponent) => {
    const props = this.props;
    const hash = props.hash;
    const pathNames = cPathNames;
    // Ａpi页面, 地址转成 components;
    const isApi = pathNames[0] === 'api';
    pathNames[0] = pathNames[0] === 'api' ? 'components' : pathNames[0];
    const componentBool = isComponent && !this.state.isMode;

    const moduleData = componentBool ?
      this.getModuleData(props.pageData[pathNames[0]][pathNames[1]]) :
      cModuleData;

    const listToRender = moduleData && this.getMenuItems(componentBool ?
          moduleData.demo : moduleData[pathNames[0]],
        componentBool ? hash : pathNames, componentBool);

    const listKey = pathNames[0] === 'components' && !props.pathname.match('api') ?
      props.pathname : pathNames[0];
    return (!this.state.isMode ? (listToRender && (<Affix offsetTop={60} key="list" className="list-wrapper">
      <QueueAnim
        type={['bottom', 'top']}
        duration={450}
        ease="easeInOutQuad"
        className="list"
      >
        <h2 key={`${props.pathname.split('/')[0]}-title`}>
          {isComponent ? '范例' : title[pathNames[0]]}
        </h2>
        <ul key={listKey}>
          {listToRender}
        </ul>
      </QueueAnim>
      </Affix>)) :
      (<div
        className={`list-wrapper${this.state.open ? ' open' : ''}`}
        style={{ zIndex: this.state.zIndex }}
        id="J-List"
      >
        <div className="icon-list" onClick={this.openClick}>
          <div className="bar-wrapper">
            <TweenOne component="em" animation={this.state.barAnim[0]} />
            <TweenOne component="em" animation={this.state.barAnim[1]} />
            <TweenOne component="em" animation={this.state.barAnim[2]} />
          </div>
        </div>
        <div className="list">
          <h2 key={`${props.pathname.split('/')[0]}-title`}>
            {isApi ? 'API' : title[pathNames[0]]}
          </h2>
          <ul>
            {listToRender}
          </ul>
        </div>
      </div>));
  }

  cScrollClick = (e) => {
    e.preventDefault();
    scrollClick(e);
  };

  openClick = () => {
    const zIndex = 1002;
    const list = document.getElementById('J-List');
    const transitionEnd = this.getTransitionEnd();
    if (this.state.open) {
      list.addEventListener(transitionEnd, this.setZIndex);
    } else {
      list.removeEventListener(transitionEnd, this.setZIndex);
    }
    const obj = this.state.open ? {
      barAnim: [
          { rotate: 0, y: 0, duration: 300 },
          { opacity: 1, duration: 300 },
          { rotate: 0, y: 0, duration: 300 },
      ],
    } : {
      barAnim: [
          { rotate: 45, y: 5, duration: 300 },
          { opacity: 0, duration: 300 },
          { rotate: -45, y: -5, duration: 300 },
      ],
    };
    this.setState({
      ...obj,
      open: !this.state.open,
      zIndex,
    });
  }

  render() {
    const props = this.props;
    // eslint
    const className = this.props.className;
    const pathNames = props.pathname.split('/');
    const isComponent = pathNames[0] === 'components';
    const moduleData = this.getModuleData(props.pageData);

    const navToRender = isComponent && !this.state.isMode ?
      this.getMenuItems(moduleData[pathNames[0]], pathNames, false, true) : null;
    const listToRender = this.getListChildren(pathNames, moduleData, isComponent);
    const pageData = props.pathname.match('api') ?
      props.pageData.components[pathNames[1]].index : props.pageData;
    const children = props.pathname.match('api') ?
      React.cloneElement(props.children, { pageData }) : props.children;

    return (<div className={className}>
      {!this.state.isMode && <TweenOneGroup
        enter={{ height: 0, type: 'from', ease: 'easeInOutCubic' }}
        leave={{ height: 0, ease: 'easeInOutCubic' }}
        component=""
      >
        {navToRender && <div key="nav" className={`${className}-nav`}>
          <ul>
            {navToRender}
          </ul>
        </div>}
      </TweenOneGroup>}
      <TweenOneGroup component="" enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
        {this.state.open && <div key="bg" className="list-bg" onClick={this.openClick} />}
      </TweenOneGroup>
      <TweenOneGroup
        enter={{
          y: 30,
          type: 'from',
          opacity: 0,
          onComplete: (e) => {
            const { target } = { ...e };
            target.style.cssText = '';
          },
        }}
        leave={{ y: -30, opacity: 0 }}
        className={`${className}-wrapper`}
      >
        {listToRender}
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
