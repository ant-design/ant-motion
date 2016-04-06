import React from 'react';
import Popover from 'antd/lib/popover';
function noop() {
}
class MotionPopover extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
    };
    [
      'visibleChange',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  visibleChange(e) {
    const currentChange = this.props.onVisibleChange || noop;
    currentChange(e);
    this.setState({
      visible: e,
    })
  }

  render() {
    return (
      <Popover {...this.props} onVisibleChange={this.visibleChange}>
        {React.cloneElement(this.props.children, { className: this.state.visible ? 'active' : '' })}
      </Popover>
    );
  }
}

export default MotionPopover;
