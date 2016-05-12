import React, { PropTypes } from 'react';
import * as utils from '../util';
import { Link } from 'react-router';
import Icon from 'antd/lib/icon';
import DemoLayout, { Item } from '../../componentElement/component/DemoLayout';
import demosList from '../../../_site/data/demos-list';

class ComponentDoc extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      expandAll: false,
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const content = this.props.content;
    const { description, meta } = content;
    const demos = (demosList[meta.fileName] || []).filter((demoData) => !demoData.meta.hidden);
    const demosToChild = demos.sort((a, b) =>
      parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)
    ).filter(demoData => !demoData.meta.disabled).map((demoData, i) => {
      const col = Math.round(24 / (demoData.meta.cols || content.meta.cols || 1));
      const _content = utils.jsonmlToComponent(this.props.pathname, ['div'].concat(demoData.intro));
      const Comp = demoData.preview;
      return (<Item col={col} title={demoData.meta.title} content={_content}
        code={demoData.highlightedCode}
        styleCode={demoData.highlightedStyle}
        mouseEnter={demoData.meta.mouseEnter}
        _style={demoData.style || null}
        id={demoData.id}
        key={i}
      >
        {Comp}
      </Item>);
    });
    const childrenToRender =
      description.map(utils.jsonmlToComponent.bind(null, this.props.pathname));

    const apiChildren = (content.api || []).map((_child, i) => {
      const child = _child;
      if (child.type === 'h2' && child.children === 'API') {
        child.children = 'API 说明';
      }
      return utils.jsonmlToComponent(this.props.pathname, child, i);
    });
    return (
      <div className={this.props.className}>

        <h1>{content.meta.english}
          <i>{content.meta.chinese}</i>
          <iframe key="github-btn"
            src={`https://ghbtns.com/github-btn.html?user=react-component&repo=${this.props.contentName}&type=star&count=true`}
            frameBorder="0" scrolling="0" width="98px" height="20px"
          />
        </h1>
        <i className="dotted-line" />

        {childrenToRender}
        <h2 id="demo示例">示例 <Icon type="appstore"
          className={`demo-icon ${this.state.enpandAll ? 'demo-icon-active' : ''}`}
          title="展开全部代码"
        />
          <Link to={{
            pathname: this.props.pathname,
            query: {
              scrollTo: 'demo示例',
            },
          }}
          > #
          </Link>
        </h2>
        <DemoLayout>
          { demosToChild }
        </DemoLayout>
        { apiChildren }
      </div>
    );
  }

}
ComponentDoc.propTypes = {
  className: PropTypes.string,
  content: PropTypes.any,
  pathname: PropTypes.string,
  contentName: PropTypes.string,
};

ComponentDoc.defaultProps = {
  className: 'markdown',
};
export default ComponentDoc;
