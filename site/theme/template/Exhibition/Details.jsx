import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { FormattedMessage, injectIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';

class Details extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    pageData: PropTypes.object,
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
    const { ...props } = this.props;
    const { params, intl } = props;
    const { locale } = intl;
    const pageData = this.props.localizedPageData[params.children.replace('-cn', '')];
    const className = this.props.className;
    const {
      meta, content, highlightedStyle,
      style, preview, highlightedCode,
    } = pageData;
    const {
      title, subtitle,
    } = meta;
    return (
      <DocumentTitle title={`${subtitle || title[locale] || ''} - Ant Motion`}>
        <div className="page-wrapper">
          <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }} className="page">
            <article className={`markdown ${className}`}>
              <div className={`${className}-demo`}>
                {!this.state.replay && preview(React, ReactDOM)}
              </div>
              <div className="replay-button">
                <i onClick={this.onClick} />
              </div>
              <h1>
                {subtitle || title[locale]}
              </h1>
              {props.utils.toReactComponent(['section'].concat(meta.content[locale]))}
              {!!content[locale].length && props.utils.toReactComponent(['section'].concat(content[locale]))}
              <h2><FormattedMessage id="app.details.code" /></h2>
              {!!style && <style dangerouslySetInnerHTML={{ __html: style }} />}
              <h3>jsx</h3>
              {!!highlightedCode.length && props.utils.toReactComponent(highlightedCode)}
              {highlightedStyle && <h3>css</h3>}
              {highlightedStyle && (
                <pre className="css">
                  <code dangerouslySetInnerHTML={{ __html: highlightedStyle }} />
                </pre>
              )}
            </article>
          </TweenOne>
        </div>
      </DocumentTitle>
    );
  }
}

export default injectIntl(Details);
