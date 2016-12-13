import React, { PropTypes } from 'react';

export default class EditStateController extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    enterRect: PropTypes.object,
    selectRect: PropTypes.object,
    height: PropTypes.number,
  };

  static defaultProps = {
    className: 'edit-state',
  };

  render() {
    const enterRect = this.props.enterRect;
    const selectRect = this.props.selectRect;
    return (<div className={`${this.props.className}-wrapper`}>
      <div
        style={{ height: this.props.height }}
        className={this.props.className}
      >
        {enterRect &&
          (<div
            className="enter-box"
            style={{
              width: enterRect.width,
              height: enterRect.height,
              left: enterRect.left,
              top: enterRect.top,
            }}
          >
            {this.props.children}
          </div>)}
        { selectRect &&
          (<div
            className="layout"
            style={{
              width: selectRect.width,
              height: selectRect.height,
              left: selectRect.left,
              top: selectRect.top,
            }}
          />)
          }
      </div>
    </div>);
  }
}
