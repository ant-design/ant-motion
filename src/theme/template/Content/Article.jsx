import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { getChildren } from 'jsonml.js/lib/utils';
import * as utils from '../utils';
import DocumentTitle from 'react-document-title';

/*export function collect(nextProps, callback) {
  const componentsList = utils.collectDocs(nextProps.data.components);
  const pathname = nextProps.location.pathname;
  let moduleDocs;
  if (/(components\/)/i.test(pathname)) {
    moduleDocs = [
      ...componentsList,
    ];
  } else {
    moduleDocs = utils.collectDocs(
      nextProps.utils.get(nextProps.data, pathname.split('/').slice(0, 1))
    );
  }
  const demos = nextProps.utils.get(nextProps.data, [...pathname.split('/'), 'demo']);

  const promises = [Promise.all(componentsList), Promise.all(moduleDocs)];
  if (demos) {
    promises.push(Promise.all(
      Object.keys(demos).map((key) => demos[key]())
    ));
  }
  Promise.all(promises)
    .then((list) =>  callback(null, {
      ...nextProps,
      _key: nextProps.location.pathname,
      key: nextProps.location.pathname,
      components: list[0],
      moduleData: list[1],
      demos: list[2],
    }));
}*/

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
    console.log(this.props)
    const { meta, content, toc } = pageData;
    const { title, subtitle, chinese, english } = meta;
    console.log(toc)
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
  utils: PropTypes.object
};

Article.defaultProps = {};
export default Article;
