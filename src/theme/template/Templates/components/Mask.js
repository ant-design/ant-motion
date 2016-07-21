import React, { PropTypes } from 'react';
import './Mask.less';
const $ = window.$;
class Mask extends React.Component {
  getChildrenToRender = () => {
    const { top, height } = this.props;
    const docHeight = $(document).height();
    if (top) {
      return [
        <div
          key="1"
          style={{
            height: top,
            top: 0,
            left: 0,
          }}
        ></div>,
        <div
          key="2"
          style={{
            height: docHeight - top - height,
            top: top + height,
          }}
        ></div>,
      ];
    }
    return (<div
      style={{ height: docHeight - height, top: height }}
    ></div>);
  };

  render() {
    const children = this.getChildrenToRender();
    const props = { ...this.props };
    delete props.top;
    delete props.height;
    return <div className="motion-mask" {...props}>{children}</div>;
  }
}
Mask.propTypes = {
  top: PropTypes.number,
  height: PropTypes.number,
};

export default Mask;
