import React, { PropTypes } from 'react';
import './OverLay.less';

class OverLay extends React.Component {
  render() {
    const {height, width, top, left, onClick} = this.props;
    return <div className="motion-overlay" onClick={onClick} style={{
      opacity: 0.5,
      height,
      width,
      top,
      left,
    }}></div>;
  }
}

export default OverLay;
