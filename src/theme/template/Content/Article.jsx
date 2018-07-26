import React from 'react';
import { getChildren } from 'jsonml.js/lib/utils';
import DocumentTitle from 'react-document-title';
import * as utils from '../utils';

class Article extends React.PureComponent {
  render() {
    const props = this.props;
    const pageData = props.pageData;
    const {
      meta, content, toc, api,
    } = pageData;
    const {
      title, subtitle, chinese, english,
    } = meta;
    const tocItem = props.utils.toReactComponent(toc);
    const tocChildren = utils.toArrayChildren(tocItem.props.children).map((item) => {
      const itemChildren = utils.toArrayChildren(item.props.children).map(cItem =>
        React.cloneElement(cItem, {
          onClick: utils.scrollClick,
        }));
      return React.cloneElement(item, item.props, itemChildren);
    });
    return (<DocumentTitle title={`${title || chinese || english} - Ant Motion`}>
      <article className="markdown">
        <h1>
          {title || english}
          {(!subtitle && !chinese) ? null : <i>{subtitle || chinese}</i>}
        </h1>
        {!toc || toc.length <= 1 ? null :
          (<section className="toc">
            {React.cloneElement(tocItem, tocItem.props, tocChildren)}
          </section>)}
        {!content ? null :
          props.utils.toReactComponent(['section', { className: 'markdown' }]
            .concat(getChildren(content)))}
        {api ? props.utils.toReactComponent(['section', {
            className: 'markdown api-container',
          }].concat(getChildren(api))) : null}
      </article>
    </DocumentTitle>);
  }
}
Article.propTypes = {};

Article.defaultProps = {};
export default Article;

