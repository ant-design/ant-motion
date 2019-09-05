import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import DocumentTitle from 'react-document-title';
import GitHubButton from 'react-github-button';
import { Alert } from 'antd';
import DemoLayout, { Item } from './DemoLayout';

class ComponentDoc extends React.PureComponent {
  componentDidMount() {
    const props = this.props;
    const { location } = props;
    this.hash = location.hash;
    if (window.addEventListener) {
      window.addEventListener('scroll', this.onScroll);
    } else {
      window.attachEvent('onscroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('scroll', this.onScroll);
    } else {
      window.detachEvent('onscroll', this.onScroll);
    }
  }

  onScroll = () => {
    const tops = this.demoIds.map((item) => {
      const dom = document.getElementById(item);
      let top = dom.getBoundingClientRect().top;
      if (top < 0) {
        top = -top;
      }
      return top;
    });
    const t = Math.min.apply(null, tops);
    const id = this.demoIds[tops.indexOf(t)];
    const link = `#${id}`;
    if (this.hash !== link) {
      /* eslint-disable no-restricted-globals */
      history.pushState(null, window.title, `#${id}`);
      /* eslint-enable no-restricted-globals */
      // cWindow.location.hash = `#${id}`;
      this.hash = link;
    }
  };

  render() {
    const { ...props } = this.props;
    const { pageData, demos } = props;
    const { locale } = props.intl;
    const isZhCN = locale === 'zh-CN';
    if (!pageData) {
      return (
        <div>
          <h1>你要找的页面不存在！！！</h1>
          <a href="/">返回首页</a>
        </div>
      );
    }
    const demosToChild = Object.keys(demos).map((key) => demos[key])
      .filter((item) => !item.meta.hidden)
      .sort((a, b) => a.meta.order - b.meta.order)
      .map((item, i) => {
        const content = props.utils.toReactComponent(['div'].concat(item.content[locale] || item.content));
        const comp = item.preview;
        return (
          <Item
            vertical={item.meta.vertical}
            title={item.meta.title[locale] || item.meta.title}
            content={content}
            code={props.utils.toReactComponent(item.highlightedCode)}
            styleCode={item.highlightedStyle
              ? props.utils.toReactComponent(item.highlightedStyle) : null}
            mouseEnter={item.meta.mouseEnter}
            cStyle={item.style || null}
            key={i.toString()}
            id={item.meta.id}
          >
            {comp(React, ReactDOM)}
          </Item>
        );
      });
    const { meta, description } = pageData;
    const {
      title, subtitle,
    } = meta;
    this.demoIds = demosToChild.map((item) => item.props.id);

    const isNotTranslated = locale === 'en-US' && typeof title === 'object';
    return (
      <DocumentTitle title={` ${subtitle || title[locale] || title} - Ant Motion`}>
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
            <GitHubButton
              key="github-btn"
              type="stargazers"
              namespace="react-component"
              repo={this.props.params.children.replace('-cn', '')}
            />
          </h1>
          {description ? props.utils.toReactComponent(description) : null}
          <DemoLayout vertical={meta.vertical}>
            {demosToChild}
          </DemoLayout>
        </article>
      </DocumentTitle>
    );
  }
}

ComponentDoc.propTypes = {
  params: PropTypes.any,
};

ComponentDoc.defaultProps = {};
export default ComponentDoc;
