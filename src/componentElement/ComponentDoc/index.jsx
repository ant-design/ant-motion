import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as utils from '../util';
import { Link } from 'react-router';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import DemoLayout, { Item } from '../../componentElement/component/DemoLayout';
import _demosList from '../../../_site/data/demos-list';
const antd = {
  Button,
};
const demosList = {};
Object.keys(_demosList).forEach((key) => {
  const demoArr = _demosList[key].map(demo => {
    const _demo = demo;
    _demo.preview = demo.preview(React, ReactDOM, antd);
    return _demo;
  });
  demosList[key] = demoArr;
});

class ComponentDoc extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      expandAll: false,
    };
  }

  render() {
    const content = this.props.content;
    const { description, meta } = content;
    const demos = demosList[meta.fileName] || [];
    const demosToChild = demos.sort((a, b) =>
      parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10)
    ).map((demoData, i) => {
      const col = Math.round(24 / (demoData.meta.cols || content.meta.cols || 1));
      const _content = demoData.intro.map(utils.objectToComponent.bind(null, this.props.pathname));
      const Comp = demoData.preview;
      return (<Item col={col} title={demoData.meta.english} content={_content}
        code={demoData.highlightedCode}
        styleCode={demoData.highlightedStyle}
        _style={demoData.style}
        id={demoData.id}
        key={i}
      >
        {Comp}
      </Item>);
    });
    const childrenToRender =
      description.map(utils.objectToComponent.bind(null, this.props.pathname));

    const apiChildren = (content.api || []).map((_child, i) => {
      const child = _child;
      if (child.type === 'h2' && child.children === 'API') {
        child.children = 'API 说明';
      }
      return utils.objectToComponent(this.props.pathname, child, i);
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
