import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import TweenOne from 'rc-tween-one';
import './code.less';
import highlight from 'highlight.js/lib/highlight.js';
highlight.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
import 'highlight.js/styles/tomorrow-night.css';

class CodeController extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: false,
    };
    [
      'onClick',
      'getCurrentDataForm',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  getCurrentDataForm(_str) {
    return _str.replace(/(^|\s)"template":([^\n]*)(\s)/g, '')
      .replace(/(^|\s)"dateNow":([^\n]*)(\s)/g, '');
  }

  render() {
    const currentData = this.getCurrentDataForm(this.props.currentData);
    const dataStr = `
动效与文字参数, 替换掉 props 里的数据:

${highlight.highlightAuto(currentData).value}

${this.props.childId}代码:

${this.props.code || ''}
`;
    return (<TweenOne
      animation={{ right: this.state.show ? 600 : 0 }}
      className={this.props.className}
    >
      <div className={`${this.props.className}-icon`} onClick={this.onClick}>
        code
        <Icon type="caret-left" className={this.state.show ? '' : 'right'} />
      </div>
      <div className={`${this.props.className}-pack highlight`}>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: dataStr }}></code>
        </pre>
      </div>
    </TweenOne>);
  }
}
CodeController.propTypes = {
  className: PropTypes.string,
  code: PropTypes.string,
  currentData: PropTypes.string,
  childId: PropTypes.string,
};

CodeController.defaultProps = {
  className: 'tool-code',
};
export default CodeController;
