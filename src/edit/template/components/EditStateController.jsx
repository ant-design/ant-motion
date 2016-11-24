import React, { PropTypes } from 'react';

export default class EditStateController extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    enterDom: PropTypes.object,
    selectDom: PropTypes.object,
  };

  static defaultProps = {
    className: 'edit-state',
  };

  render() {
    const enterDom = this.props.enterDom;
    const enterRect = enterDom && enterDom.getBoundingClientRect();
    const selectDom = this.props.selectDom;
    const selectRect = selectDom && selectDom.getBoundingClientRect();
    return (<div className={this.props.className}>
      {enterRect &&
        (<div
          className="enter-box"
          style={{
            width: enterRect.width,
            height: enterRect.height,
            left: enterRect.left,
            top: enterRect.top,
          }}
        >{enterDom.id}</div>)}
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
    </div>);
  }
}
