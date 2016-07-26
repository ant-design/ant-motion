import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { getChildren } from 'jsonml.js/lib/utils';
import * as utils from '../utils';
import DocumentTitle from 'react-document-title';

class Article extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  constructor() {
    super(...arguments);
  }

  render() {
    const props = this.props;
    const pageData = props.pageData;
    const { meta, content, toc } = pageData;
    const { title, subtitle, chinese, english } = meta;

    return (<DocumentTitle title={`${title || chinese || english} - Ant Motion`}>
      <article className="markdown">
        <h1>
          {title || english}
          {
            (!subtitle && !chinese) ? null :
            <span className="subtitle">{subtitle || chinese}</span>
            }
        </h1>
        {
          !toc || toc.length <=1 ? null :
          <section className="toc">{props.utils.toReactComponent(toc)}</section>
          }
        {
          !content ? null :
            props.utils.toReactComponent(['section', { className: 'markdown' }]
              .concat(getChildren(content)))
          }

      </article>
    </DocumentTitle>);
  }
}
Article.propTypes = {
  className: PropTypes.string,
  pageData: PropTypes.object,
  utils: PropTypes.object,
};

Article.defaultProps = {};
export default Article;

