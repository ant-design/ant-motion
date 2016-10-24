import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import DocumentTitle from 'react-document-title';
import ticker from 'rc-tween-one/lib/ticker';
import easingTypes from 'tween-functions';
import { currentScrollTop } from '../utils';

export default class Details extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    pageData: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'exhibition-details',
  };

  constructor(props) {
    super(props);
    this.state = {
      replay: false,
    };
  }

  componentDidMount() {
    const scrollTop = currentScrollTop();
    if (scrollTop) {
      const tickerId = `scrollToTop-${Date.now()}`;
      const startFrame = ticker.frame;
      ticker.wake(tickerId, () => {
        const moment = (ticker.frame - startFrame) * ticker.perFrame;
        const ratio = easingTypes.easeInOutCubic(moment, scrollTop, 0, 450);
        window.scrollTo(window.scrollX, ratio);
        if (moment >= 450) {
          ticker.clear(tickerId);
        }
      });
    }
  }

  shouldComponentUpdate() {
    return this.state.replay;
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
    // const { pageData, className } = props;
    const pageData = this.props.pageData;
    const className = this.props.className;
    const { meta, content, description,
      style, preview, highlightedCode, highlightedStyle } = pageData;
    const { title, subtitle, chinese, english } = meta;
    return (<DocumentTitle title={`${subtitle || chinese || ''} ${title || english} - Ant Motion`}>
      <div className="page">
        <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }} className="page-wrapper">
          <article className={`markdown ${className}`}>
            <div className={`${className}-demo`}>
              {!this.state.replay && preview(React, ReactDOM)}
            </div>
            <div className="replay-button">
              <i onClick={this.onClick} />
            </div>
            <h1>
              {title || english}
              {(!subtitle && !chinese) ? null : (<i>{subtitle || chinese}</i>)}
            </h1>
            {props.utils.toReactComponent(description)}
            {!!content.length && props.utils.toReactComponent(['section'].concat(content))}
            <h2>代码片段</h2>
            {!!style && <style dangerouslySetInnerHTML={{ __html: style }} />}
            <h3>jsx</h3>
            {!!highlightedCode.length && props.utils.toReactComponent(highlightedCode)}
            {highlightedStyle && <h3>css</h3>}
            {highlightedStyle && (<pre className="css">
              <code dangerouslySetInnerHTML={{ __html: highlightedStyle }} />
            </pre>)}
          </article>
        </TweenOne>
      </div>
    </DocumentTitle>);
  }
}
