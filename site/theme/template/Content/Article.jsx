import React from 'react';
import { getChildren } from 'jsonml.js/lib/utils';
import DocumentTitle from 'react-document-title';
import { Alert } from 'antd';
import * as utils from '../utils';

class Article extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { locale } = props.intl;
    const pageData = props.pageData;
    if (!pageData) {
      return (
        <div>
          <h1>你要找的页面不存在！！！</h1>
          <a href="/">返回首页</a>
        </div>
      );
    }
    const {
      meta, content, toc, api,
    } = pageData;
    const {
      title, subtitle,
    } = meta;
    const tocItem = props.utils.toReactComponent(toc);
    const tocChildren = utils.toArrayChildren(tocItem.props.children).map((item) => {
      const itemChildren = utils.toArrayChildren(item.props.children).map((cItem) => React.cloneElement(cItem, {
        onClick: utils.scrollClick,
      }));
      return React.cloneElement(item, item.props, itemChildren);
    });
    const isNotTranslated = locale === 'en-US' && typeof title === 'object';
    const isZhCN = locale === 'zh-CN';
    return (
      <DocumentTitle title={`${subtitle || title[locale] || title} - Ant Motion`}>
        <article className="markdown">
          {isNotTranslated && (
          <Alert
            type="warning"
            message={(
              <span>
                  This article has not been translated yet. Wan&apos;t to help us out?
                {' '}
                <a href="https://github.com/ant-design/ant-motion/issues/204">
                    See this issue on GitHub.
                </a>
              </span>
              )}
            style={{ marginBottom: 24 }}
          />
          )}
          <h1>
            {isZhCN ? subtitle || title['en-US'] || title : subtitle || title[locale] || title}
            {isZhCN && <i>{title['zh-CN'] || ''}</i>}
          </h1>
          {!toc || toc.length <= 1 ? null
            : (
              <section className="toc">
                {React.cloneElement(tocItem, tocItem.props, tocChildren)}
              </section>
            )}
          {!content ? null
            : props.utils.toReactComponent(['section', { className: 'markdown' }]
              .concat(getChildren(content)))}
          {api ? props.utils.toReactComponent(['section', {
            className: 'markdown api-container',
          }].concat(getChildren(api))) : null}
        </article>
      </DocumentTitle>
    );
  }
}
Article.propTypes = {};

Article.defaultProps = {};
export default Article;
