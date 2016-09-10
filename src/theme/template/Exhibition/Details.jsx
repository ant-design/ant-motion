import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import { getChildren } from 'jsonml.js/lib/utils';
import DocumentTitle from 'react-document-title';

export default class Details extends React.Component {
  shouldComponentUpdate() {
    return this.state.replay;
  }

  static contextTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'exhibition-details',
  };

  constructor() {
    super(...arguments);
    this.state = {
      replay: false
    }
  }

  onClick = () => {
    this.setState({
      replay: true,
    }, () => {
      this.setState({
        replay: false,
      });
    });
  };

  render() {
    const props = this.props;
    const { pageData, className } = props;
    const { meta, content, description,
      style, preview, highlightedCode, highlightedStyle } = pageData;
    const { title, subtitle, chinese, english } = meta;
    return (<DocumentTitle title={`${subtitle || chinese || ''} ${title || english} - Ant Motion`}>
      <div className="page">
        <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }} className="page-wrapper">
          <article className={`markdown ${className}`}>
            <div className={`${className}-demo`}>{!this.state.replay && preview(React,ReactDOM)}</div>
            <div className={`${className}-replay-button`}>
              <a onClick={this.onClick} />
            </div>
            <h1>
              {title || english}
              {(!subtitle && !chinese) ? null :
              <i>{subtitle || chinese}</i>}
            </h1>
            {props.utils.toReactComponent(description)}
            {!!content.length && props.utils.toReactComponent(['section'].concat(content))}
            <h2>代码片段</h2>
            {!!style && <style dangerouslySetInnerHTML={{ __html: style }} />}
            <h3>jsx</h3>
            {!!highlightedCode.length && props.utils.toReactComponent(highlightedCode)}
            {highlightedStyle && <h3>css</h3>}
            {highlightedStyle && <pre className="css">
            <code dangerouslySetInnerHTML={{ __html: highlightedStyle }} />
          </pre>}
          </article>
        </TweenOne>
      </div>
    </DocumentTitle>)
  }
}
