import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { getChildren } from 'jsonml.js/lib/utils';
import Promise from 'bluebird';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router';
import Affix from 'antd/lib/affix';
import nav from '../Layout/nav';

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
  }

  onScroll = () => {
    const scrollTop = currentScrollTop();
    const offsetTop = 60;
    const affixAnim = {
      top: scrollTop >= offsetTop ? scrollTop - offsetTop : 0,
    };
    this.setState({
      affixAnim
    });
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

  getMenuItems(moduleData, pathNames) {
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
    return moduleData.concat(splicingListArr).sort((a, b) => a.meta.order - b.meta.order).map((item, i) => {
      const meta = item.meta;
      const link = meta.filename.replace(/(\/index)|(.md)/g, '');
      const className = this.props.pathname === link ? 'active' : '';
      return (<TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from', delay: i*100, ease: 'easeOutCubic' }}
        key={meta.english || meta.chinese} className={className}
        component="li"
        disabled={meta.disabled}
      >
        {
          link.split('/')[1] === pathNames[1]?
          <a>{meta.chinese || meta.english}</a>:
          <Link to={link}>{meta.chinese || meta.english}</Link>}
      </TweenOne>)
    });
  }

  render() {
    const props = this.props;
    const className = props.className;
    const pathNames = props.pathname.split('/');
    const moduleData = this.getModuleData(props.pageData);
    this.list = moduleData && this.getMenuItems(moduleData[pathNames[0]], pathNames);
    const children = pathNames[0] === 'exhibition' ?
      React.cloneElement(props.children, { pageData: props.pageData }) : props.children;
    return <div className={className}>
      <TweenOneGroup
        enter={{ top: 30, type: 'from', opacity: 0 }}
        leave={{ top: -30, opacity: 0 }}
        className={`${className}-wrapper`}
      >
        {this.list && <Affix offsetTop={60} key="list" className="list-wrapper">
          <QueueAnim type={['bottom', 'top']} duration={450} ease="easeInOutQuad" ref="list" className="list">
            <ul key={pathNames[0]}>
              <TweenOne animation={{ opacity:0, type: 'from' }} component="li">
                <h2 key={`${pathNames[0]}-h2`}>{title[pathNames[0]]}</h2>
              </TweenOne>
              {this.list}
            </ul>
          </QueueAnim>
        </Affix>}
        <section key="content">
          <QueueAnim
            type={['bottom', 'top']}
            duration={450}
            ease="easeInOutQuad"
            className={`${className}-content`}
            style={{ minHeight: this.state.minHeight }}
          >
            <div key={props.pathname}>{children}</div>
          </QueueAnim>
        </section>
      </TweenOneGroup>
    </div>
  }
}
Page.propTypes = {
  className: PropTypes.string,
  pathname: PropTypes.string,
};

Page.defaultProps = {
  className: 'page'
};
export default Page;
