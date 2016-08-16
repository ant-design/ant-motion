import React, { PropTypes } from 'react';
import './OverLay.less';

const OverLay = (props) => {
  const { height, width, top, left } = props;
  return (<div
    className="motion-overlay"
    style={{ height, width, top, left }}
  >
    <p>双击开始编辑{props.children}</p>
  </div>);
};
OverLay.propTypes = {
  children: PropTypes.any,
  height: PropTypes.number,
  width: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
};

export default OverLay;
