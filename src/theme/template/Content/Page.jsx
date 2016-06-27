import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { getChildren } from 'jsonml.js/lib/utils';
import Promise from 'bluebird';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router';
import { markdown } from 'bisheng/lib/utils/data';
const moduleData = {};
Object.keys(markdown).forEach(key => {
  const children = Object.keys(markdown[key]).map(_key =>
    markdown[key][_key].index || markdown[key][_key]
  );
  moduleData[key] = children;
});

class Page extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  getMenuItems(moduleData, pathNames) {
    console.log(moduleData, pathNames)
    return moduleData.sort((a, b) => a.meta.order - b.meta.order).map((item, i) => {
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
    const className = `page`;
    const props = this.props;
    const pathNames = props.pathname.split('/');
    const list = this.getMenuItems(moduleData[pathNames[0]], pathNames);
    return <div className={`${className} ${this.props.className}`.trim()}>
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

Page.defaultProps = {};
export default Page;
