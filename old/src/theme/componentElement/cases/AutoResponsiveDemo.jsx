import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AutoResponsive from 'autoresponsive-react';
import { load } from '../util';
import './autoresponsive.less';


class AutoResponsiveDemo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      containerWidth: null,
      data: null,
    };
    this.getImageData();
    [
      'onWindowResized',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
  }

  onWindowResized() {
    this.setState({
      containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth,
    });
  }

  getImageData() {
    load({
      data: this.props.imgArr,
      onComplete: () => {
        this.setState({
          data: this.props.imgArr,
        });
      },
    });
  }


  getAutoResProps() {
    return {
      itemMargin: 20,
      containerWidth: this.state.containerWidth || document.body.clientWidth * 0.92 - 300,
      itemClassName: 'item',
      transitionDuration: '.3',
    };
  }

  getImgChild(item, i) {
    return (<a className="item"
      style={{ width: item.width + 20, height: item.height + 20 }}
      key={i}
      href={item.href}
      target="_blank"
    >
      <img src={item.src} width={item.width} height={item.height} />
    </a>);
  }

  render() {
    if (this.state.data) {
      return (<AutoResponsive ref="container" {...this.getAutoResProps()} {...this.props}>
        {this.state.data.map(this.getImgChild)}
      </AutoResponsive>);
    }
    return (<div className="load">
      加载中...
    </div>);
  }
}
AutoResponsiveDemo.propTypes = {
  className: PropTypes.string,
  imgArr: PropTypes.array,
};

export default AutoResponsiveDemo;
