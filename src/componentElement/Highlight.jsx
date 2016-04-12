import React, { PropTypes } from 'react';
import highlight from 'highlight.js/lib/highlight.js';
highlight.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
highlight.registerLanguage('css', require('highlight.js/lib/languages/css'));
highlight.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

class Highlight extends React.Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const nodes = this.refs.code;
    if (nodes) {
      highlight.highlightBlock(nodes);
    }
  }

  render() {
    let childToRender = (<pre>
      <code className={this.props.className} ref="code">{this.props.children}</code>
    </pre>);
    if (this.props.innerHTML) {
      childToRender = (<div
        dangerouslySetInnerHTML={{ __html: this.props.children }}
        className={this.props.className}
      ></div>);
    }
    return childToRender;
  }
}
Highlight.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  innerHTML: PropTypes.bool,
};
Highlight.defaultProps = {
  className: 'javascript',
};
export default Highlight;
