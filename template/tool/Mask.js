import React, { PropTypes } from 'react';
import './Mask.less';

class Mask extends React.Component {
  render() {
    return <div className="motion-mask" {...this.props}>{this.props.children}</div>;
  }
}

export default Mask;
