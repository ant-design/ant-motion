import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import { Icon } from 'antd';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      codeOpen: false,
      codeHeight: 0,
      styleHeight: 0,
    };
  }

  componentDidMount() {
    this.setDomHeight();
  }

  setDomHeight = () => {
    const codeDom = ReactDOM.findDOMNode(this.code);
    const styleDom = ReactDOM.findDOMNode(this.style);
    this.setState({
      codeHeight: codeDom.offsetHeight,
      styleHeight: styleDom && styleDom.offsetHeight,
    });
  }

  mouseEnter = () => {
    this.setState({
      paused: false,
    });
  }

  mouseLeave = () => {
    this.setState({
      paused: true,
    });
  }

  codeSwitch = () => {
    this.setState({
      codeOpen: !this.state.codeOpen,
    });
  }

  render() {
    let children = this.props.children;
    if (typeof children === 'object') {
      const childProps = { ...this.props.children.props };
      if (this.props.mouseEnter) {
        childProps.paused = this.state.paused;
      }
      children = React.cloneElement(this.props.children, childProps);
    }
    const animate = this.state.codeHeight && this.state.codeOpen ? {
      height: this.state.codeHeight,
    } : this.state.codeHeight && { height: 220 } || {};
    const styleAnimate = this.state.styleHeight && this.state.codeOpen ? {
      height: this.state.styleHeight,
    } : this.state.styleHeight && { height: 220 } || {};
    const iconAnimate = this.state.codeHeight && this.state.codeOpen ? {
      rotate: 180, y: -2,
    } : this.state.codeHeight && { rotate: 0, y: 0 } || {};
    return (<li
      className={`${this.props.className}-wrapper ${this.props.vertical ? 'vertical' : ''}`.trim()}
      id={this.props.id}
    >
      <h2>{this.props.title}</h2>
      <div className={`${this.props.className}-content`}>{this.props.content}</div>
      <div className={this.props.className}>
        <div
          className={`${this.props.className}-demo`}
          onMouseEnter={this.props.mouseEnter ? this.mouseEnter : null}
          onMouseLeave={this.props.mouseEnter ? this.mouseLeave : null}
        >
          {children}
          {this.props.cStyle ?
            <style dangerouslySetInnerHTML={{ __html: this.props.cStyle }} /> : null}
        </div>
        <div className={`${this.props.className}-code`}>
          <TweenOne
            className={`${this.props.className}-code-only`}
            style={{ height: this.state.codeHeight ? 220 : null }}
            ref={(c) => { this.code = c; }}
            animation={animate}
          >
            {this.props.code}
          </TweenOne>
          {this.props.styleCode ?
            (<TweenOne
              className={`${this.props.className}-code-only`}
              style={{ height: this.state.codeHeight ? 220 : null }}
              ref={(c) => { this.style = c; }}
              animation={styleAnimate}
            >
              <pre className="css">
                <code dangerouslySetInnerHTML={{ __html: this.props.styleCode }} />
              </pre>
            </TweenOne>)
            : null}
        </div>
        <div className={`${this.props.className}-bar`} onClick={this.codeSwitch}>
          <TweenOne animation={iconAnimate}>
            <Icon type="down" />
          </TweenOne>
        </div>
      </div>
    </li>);
  }
}

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.any,
  content: PropTypes.any,
  vertical: PropTypes.bool,
  styleCode: PropTypes.string,
  cStyle: PropTypes.string,
  mouseEnter: PropTypes.bool,
  id: PropTypes.string,
  code: PropTypes.any,
};

Item.defaultProps = {
  className: 'code-box',
};
export default Item;
