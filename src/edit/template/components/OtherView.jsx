import React, { PropTypes } from 'react';
import webData from './../template.config';

export default class OtherView extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    setUrlData: PropTypes.func,
    urlData: PropTypes.object,
  };

  static defaultProps = {
    className: 'other-view',
    setUrlData: () => {
    },
  };

  getChildrenToRender = () =>
    webData.other.data.map((item, i) => (<li key={i}>
      <p><img src={item.src} width="100%" /></p>
      <span>{item.label}</span>
    </li>));

  render() {
    const childrenToRender = this.getChildrenToRender();
    return (<div>
      <ul>
        {childrenToRender}
      </ul>
    </div>);
  }
}
