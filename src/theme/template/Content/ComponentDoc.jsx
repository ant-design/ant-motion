import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import DocumentTitle from 'react-document-title';
import DemoLayout, { Item } from './DemoLayout';

class ComponentDoc extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const props = this.props;
    const { pageData } = props;
    const demosToChild = Object.keys(pageData.demo).map(key => pageData.demo[key])
      .filter(item => !item.meta.hidden)
      .sort((a, b) => a.meta.order - b.meta.order)
      .map((item, i) => {
        const content = props.utils.toReactComponent(['div'].concat(item.content));
        const comp = item.preview;
        return (<Item
          vertical={item.meta.vertical} title={item.meta.title} content={content}
          code={props.utils.toReactComponent(item.highlightedCode)}
          styleCode={item.highlightedStyle ?
            props.utils.toReactComponent(item.highlightedStyle) : null
          }
          mouseEnter={item.meta.mouseEnter}
          cStyle={item.style || null}
          key={i}
          id={item.meta.id}
        >
          {comp(React, ReactDOM)}
        </Item>);
      });
    const { meta, description } = pageData.index;
    const { title, subtitle, chinese, english } = meta;
    return (<DocumentTitle title={`${subtitle || chinese || ''} ${title || english} - Ant Motion`}>
      <article className="markdown">
        <h1>{title || english}
          <i>{subtitle || chinese}</i>
          <iframe
            key="github-btn"
            src={`https://ghbtns.com/github-btn.html?user=react-component&repo=${
            this.props.params.contentName}&type=star&count=true`}
            frameBorder="0" scrolling="0" width="98px" height="20px"
          />
        </h1>
        {description ? props.utils.toReactComponent(description) : null}
        <DemoLayout vertical={meta.vertical}>
          {demosToChild}
        </DemoLayout>
      </article>
    </DocumentTitle>);
  }
}

ComponentDoc.propTypes = {
  params: PropTypes.any,
};

ComponentDoc.defaultProps = {};
export default ComponentDoc;
