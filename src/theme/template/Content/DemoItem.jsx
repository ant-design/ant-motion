import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import Modal from 'antd/lib/modal';


class Item extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      paused: true,
    };
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


  render() {
    let children = this.props.children;
    if (typeof children === 'object') {
      const childProps = { ...this.props.children.props };
      if (this.props.mouseEnter) {
        childProps.paused = this.state.paused;
      }
      children = React.cloneElement(this.props.children, childProps);
    }
    return (<li
      className={`${this.props.className}-wrapper ${this.props.vertical ? 'vertical' : ''}`.trim()}
      id={this.props.id}
    >
      <h2>{this.props.title}</h2>
      <div className={`${this.props.className}-content`}>{this.props.content}</div>
      <div className={this.props.className}>
        <div className={`${this.props.className}-demo`}
          onMouseEnter={this.props.mouseEnter ? this.mouseEnter : null}
          onMouseLeave={this.props.mouseEnter ? this.mouseLeave : null}
        >
          {children}
          {!!this.props._style ?
          <style dangerouslySetInnerHTML={{ __html: this.props._style }} /> : null}
        </div>
        <div className={`${this.props.className}-code`}>
          {this.props.code}
          <pre className={`${this.props.styleCode ? 'css' : ''}`}>
            {this.props.styleCode ?
              <code dangerouslySetInnerHTML={{ __html: this.props.styleCode }} />
              : null}
          </pre>
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
  _style: PropTypes.string,
  mouseEnter: PropTypes.bool,
  id: PropTypes.string,
};

Item.defaultProps = {
  className: 'code-box',
};
export default Item;
