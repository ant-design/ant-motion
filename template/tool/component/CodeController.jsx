import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import TweenOne from 'rc-tween-one';
import './code.less';
import Highlight from '../../../src/componentElement/Highlight';
import '../../../src/common/tomorrow.less';

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
    return (<TweenOne
      animation={{ right: this.state.show ? 500 : 0 }}
      className={this.props.className}
    >
      <div className={`${this.props.className}-icon`} onClick={this.onClick}>
        code
        <Icon type="caret-left" className={this.state.show ? '' : 'right'} />
      </div>
      <div className={`${this.props.className}-pack`}>
        <Highlight className="js" key="code">
          {`动效与文字参数, 替换掉 props 里的数据: \n${currentData} \n\n${this.props.childId}代码:
          \n${this.props.code || ''}\n`}
        </Highlight>
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
