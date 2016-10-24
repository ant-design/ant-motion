import React from 'react';
import ReactDom from 'react-dom';

class CodeDemo extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    pageData: React.PropTypes.object,
    utils: React.PropTypes.any,
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
    };
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
    return (<div className={this.props.className}>
      <div className={`${this.props.className}-top`}>
        <i />
        <i />
        <i />
      </div>
      <div className={`${this.props.className}-left`}>
        {this.state.code}
        <div className={`${this.props.className}-left-bar`}>
          <div className={`${this.props.className}-left-bar-logo`}>
            <img height="15" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" />
            <img height="8" src="https://zos.alipayobjects.com/rmsportal/glnFNVQMvQinmUr.svg" />
          </div>
        </div>
      </div>
      <div className={`${this.props.className}-right`}>
        {this.state.replay ? null : this.state.component}
        <div className="replay-button">
          <i onClick={this.onClick} />
        </div>
      </div>
    </div>);
  }
}

export default CodeDemo;

