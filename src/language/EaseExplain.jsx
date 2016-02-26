import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';

class EaseExplain extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      animation: this.props.animation,
      circleStyle: this.props.circleStyle,
      paused: true,
    };
    [
      'mouseOver',
      'mouseOut',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  mouseOver() {
    const paused = false;
    this.setState({
      paused,
    });
  }

  mouseOut() {
    const paused = true;
    this.setState({
      paused,
    });
  }

  render() {
    const lineWidth = 40 * (((this.props.leftHide && 1) || 0) + ((this.props.rightHide && 1) || 0));
    return (<div className={this.props.className}
      onMouseEnter={this.mouseOver}
      onMouseLeave={this.mouseOut}
    >
      <h3>{this.props.title}</h3>
      <div className="demo-wrapper">
        {this.props.leftHide ? null : <div className="circle-dashed" style={{ left: 0 }}></div>}
        <TweenOne className="circle"
          animation={this.state.animation}
          style={this.state.circleStyle}
          paused={this.state.paused}
        />
        <div className="east">
          <i className="line" style={{
            width: 330 + lineWidth, left: 60 - ((this.props.leftHide && 40) || 0),
          }}
          />
          <i className="arrow" style={{ right: 60 - ((this.props.rightHide && 40) || 0) }} />
        </div>
        {this.props.rightHide ? null : <div className="circle-dashed"></div>}
      </div>
      <p className="text-center">
        {this.props.children}
      </p>
    </div>);
  }
}
EaseExplain.propTypes = {
  className: PropTypes.string,
  leftHide: PropTypes.bool,
  rightHide: PropTypes.bool,
  title: PropTypes.string,
  circleStyle: PropTypes.object,
  animation: PropTypes.object,
  children: PropTypes.any,
};

EaseExplain.defaultProps = {
  className: 'content-wrapper',
};
export default EaseExplain;
