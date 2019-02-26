import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { enquireScreen } from 'enquire-js';

class CodeDemo extends React.PureComponent {
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
    const queueAnimDemo = props.pageData['queue-anim'];
    this.state = {
      code: props.utils
        .toReactComponent(queueAnimDemo.simple.highlightedCode),
      component: queueAnimDemo.simple.preview(React, ReactDom),
      replay: false,
      isMobile: false,
      openCode: false,
    };
  }

  componentDidMount() {
    enquireScreen((bool) => {
      const isMobile = bool;
      this.setState({ isMobile });
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
    return (
      <div className={this.props.className}>
        <div className={`${this.props.className}-top`}>
          <i />
          <i />
          <i />
        </div>
        <div className={`${this.props.className}-left ${this.state.openCode ? 'code-open' : ''}`}>
          {this.state.code}
          <div className={`${this.props.className}-left-bar`}>
            <div className={`${this.props.className}-left-bar-logo`}>
              <img alt="img" height="15" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" />
              <img alt="img" height="8" src="https://zos.alipayobjects.com/rmsportal/glnFNVQMvQinmUr.svg" />
            </div>
          </div>
          {this.state.isMobile && (
          <div className={`${this.props.className}-close`} onClick={this.codeCloseClick}>
            <Icon type="close" />
          </div>
          )}
        </div>
        <div className={`${this.props.className}-right`}>
          {this.state.replay ? null : this.state.component}
          <div className="replay-button">
            <i onClick={this.onClick} />
          </div>
        </div>
        {
        this.state.isMobile && (
        <div className={`${this.props.className}-icon`} onClick={this.codeClick}>
          <Icon type="code-o" />
        </div>
        )
      }
      </div>
    );
  }
}

export default CodeDemo;
