import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { enquireScreen } from '../utils';

class CodeDemo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    pageData: PropTypes.object,
    utils: PropTypes.any,
  };

  static defaultProps = {
    className: 'code',
  };

  constructor(props) {
    super(props);
    this.components = this.props.pageData.components;
    this.state = {
      code: this.props.utils
        .toReactComponent(this.components['queue-anim'].demo.simple.highlightedCode),
      component: this.components['queue-anim'].demo.simple.preview(React, ReactDom),
      replay: false,
      isMode: false,
      openCode: false,
    };
  }

  componentDidMount() {
    enquireScreen((bool) => {
      const isMode = bool;
      this.setState({ isMode });
    });
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

  codeClick = () => {
    this.setState({
      openCode: true,
    });
  };

  codeCloseClick = () => {
    this.setState({
      openCode: false,
    });
  };

  render() {
    return (<div className={this.props.className}>
      <div className={`${this.props.className}-top`}>
        <i />
        <i />
        <i />
      </div>
      <div className={`${this.props.className}-left ${this.state.openCode ? 'code-open' : ''}`}>
        {this.state.code}
        <div className={`${this.props.className}-left-bar`}>
          <div className={`${this.props.className}-left-bar-logo`}>
            <img height="15" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" />
            <img height="8" src="https://zos.alipayobjects.com/rmsportal/glnFNVQMvQinmUr.svg" />
          </div>
        </div>
        {this.state.isMode && (<div className={`${this.props.className}-close`} onClick={this.codeCloseClick}>
          <Icon type="close" />
        </div>)}
      </div>
      <div className={`${this.props.className}-right`}>
        {this.state.replay ? null : this.state.component}
        <div className="replay-button">
          <i onClick={this.onClick} />
        </div>
      </div>
      {
        this.state.isMode && (<div className={`${this.props.className}-icon`} onClick={this.codeClick}>
          <Icon type="code-o" />
        </div>)
      }
    </div>);
  }
}

export default CodeDemo;

