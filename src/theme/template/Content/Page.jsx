import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { getChildren } from 'jsonml.js/lib/utils';
import Promise from 'bluebird';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router';
import Affix from 'antd/lib/affix';
import nav from '../Layout/nav';
import { currentScrollTop, scrollClick } from '../utils';

const title = {};
nav.forEach(item => {
  title[item.key] = item.name;
});
class Page extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      affixAnim: {},
    };
    this.tickerId = `scrollTo${Date.now()}`;
  }

  getModuleData = (pageData) => {
    const moduleData = {};
    Object.keys(pageData).forEach(key => {
      const children = Object.keys(pageData[key]).map(_key =>
        pageData[key][_key].index || pageData[key][_key]
      );
      moduleData[key] = children;
    });
    return moduleData;
  };

  getMenuItems(moduleData, pathNames, isComponent, isNav) {
    if (!moduleData) {
      return;
    }
    const splicingListArr = [];
    if (pathNames[0] === 'cases') {
      // { meta: { filename: 'cases/full', english: 'Full', chinese: '完整模板选择', order: 2 } }
      splicingListArr.push(
        { meta: { filename: 'cases/splicing', english: 'Splicing', chinese: '自由搭配模板', order: 1 } }
      )
    }
    const children = moduleData.concat(splicingListArr).filter(item => !item.meta.hidden)
      .sort((a, b) => a.meta.order - b.meta.order);
    return children.map((item, i) => {
      const meta = item.meta;
      const link = meta.filename.replace(/(\/index)|(.md)/g, '');
      const path = Array.isArray(pathNames) ? pathNames.join('/') : pathNames.replace('#', '');
      const className = path === link || path === meta.id || (!path && i === 0) ? 'active' : '';

      let linkToChildren = link.split('/')[1] === pathNames[1] ?
        (<a>
          {isNav ? meta.english : null}
          {<span>{meta.chinese || meta.english}</span>}
        </a>) :
        (<Link to={link}>
          {isNav ? meta.english : null}
          {<span>{meta.chinese || meta.english}</span>}
        </Link>);
      linkToChildren = isComponent ?
        <a href={`#${meta.id}`} onClick={(e) => scrollClick(this.tickerId, e)}>
          {meta.title}
        </a> : linkToChildren;
      return (<li
        key={meta.english || meta.chinese || meta.id}
        className={className}
        disabled={meta.disabled}
        style={isNav ? { width: `${100 / children.length}%`} : null}
      >
        {linkToChildren}
      </li>)
    });
  }

  render() {
    const props = this.props;
    const className = props.className;
    const pathNames = props.pathname.split('/');
    const hash = props.hash;
    const isComponent = pathNames[0] === 'components';
    let moduleData = this.getModuleData(props.pageData);
    const navToRender = isComponent ? this.getMenuItems(moduleData[pathNames[0]], pathNames, false, true) : null;
    moduleData = isComponent ?
      this.getModuleData(props.pageData[pathNames[0]][pathNames[1]]) :
      moduleData;

    const listToRender = moduleData && this.getMenuItems(isComponent ?
        moduleData.demo : moduleData[pathNames[0]], isComponent ? hash : pathNames, isComponent);
    const children = pathNames[0] === 'exhibition' ?
      React.cloneElement(props.children, { pageData: props.pageData }) : props.children;
    const listKey = pathNames[0] === 'components' ? props.pathname : pathNames[0];
    return <div className={className}>
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
        {listToRender && <Affix offsetTop={60} key="list" className="list-wrapper">
          <QueueAnim type={['bottom', 'top']} duration={450} ease="easeInOutQuad" ref="list" className="list">
            <h2 key={`${pathNames[0]}-title`}>{title[pathNames[0]]}</h2>
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
        </Affix>}
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
    </div>
  }
}
Page.propTypes = {
  className: PropTypes.string,
  pathname: PropTypes.string,
  hash: PropTypes.string,
};

Page.defaultProps = {
  className: 'page'
};
export default Page;
