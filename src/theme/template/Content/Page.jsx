import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { getChildren } from 'jsonml.js/lib/utils';
import Promise from 'bluebird';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router';

class Page extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {};
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
        animation={{ x: '+=30', opacity: 0, type: 'from', delay: i*100, ease: 'easeOutCubic' }}
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
    const list = this.getMenuItems(moduleData[pathNames[0]], pathNames);
    return <div className={className}>
      <div className={`${className}-wrapper`}>
        <aside>
          <QueueAnim type={['right', 'left']} duration={450} ease="easeInOutQuad">
            <ul key={pathNames[0]}>
              {list}
            </ul>
          </QueueAnim>
        </aside>
        <QueueAnim
          type={['right', 'left']}
          duration={450}
          ease="easeInOutQuad"
          className={`${className}-content`}
          component="section"
          style={{ minHeight: this.state.minHeight }}
        >
          <div key={props.pathname}>{props.children}</div>
        </QueueAnim>
      </div>
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
