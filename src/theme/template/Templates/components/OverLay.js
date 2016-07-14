import React, { PropTypes } from 'react';
import './OverLay.less';

class OverLay extends React.Component {
  render() {
    const { height, width, top, left } = this.props;
    return (<div className="motion-overlay"
      style={{ height, width, top, left }}
    >
      <p>双击开始编辑{this.props.children}</p>
    </div>);
  }
}
OverLay.propTypes = {
  children: PropTypes.any,
  height: PropTypes.number,
  width: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
};

export default OverLay;
