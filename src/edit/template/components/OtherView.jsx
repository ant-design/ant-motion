import React, { PropTypes } from 'react';
import Checkbox from 'antd/lib/checkbox';
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

  constructor(props) {
    super(props);
    const checkbox = {};
    (props.urlData.o || []).forEach((key) => {
      checkbox[key] = true;
    });
    this.state = {
      checkbox,
    };
  }

  onClick = (i) => {
    const checkbox = this.state.checkbox;
    if (checkbox[i]) {
      delete checkbox[i];
    } else {
      checkbox[i] = true;
    }
    this.props.setUrlData({ o: Object.keys(checkbox) });
    this.setState({
      checkbox,
    });
  }

  getChildrenToRender = () =>
    webData.other.data.map((item, i) => {
      const isVideo = item.src.match('.mp4');
      const toChildren = isVideo ?
        <video src={item.src} width="100%" loop autoPlay/> :
        <img src={item.src} width="100%" />;

      return (
        <li key={i} onClick={() => { this.onClick(item.value); }}>
          <p>{toChildren}</p>
          <div>
            <span>{item.label}</span>
            <Checkbox checked={this.state.checkbox[item.value]} />
          </div>
        </li>
      );
    });

  render() {
    const childrenToRender = this.getChildrenToRender();
    return (<div className={this.props.className}>
      <ul>
        {childrenToRender}
      </ul>
    </div>);
  }
}
