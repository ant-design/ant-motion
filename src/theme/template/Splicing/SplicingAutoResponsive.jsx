import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AutoResponsive from 'autoresponsive-react';
import Icon from 'antd/lib/icon';
import { TweenOneGroup } from 'rc-tween-one';
const noop = () => {
};
let keyNum = 0;
class AutoResponsiveDemo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      containerWidth: null,
      imgLoad: {},
      optIndex: this.props.optIndex,
    };
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      optIndex: nextProps.optIndex,
    });
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

  getAutoResProps() {
    return {
      itemMargin: 20,
      containerWidth: this.state.containerWidth || document.body.clientWidth * 0.92 - 80,
      itemClassName: 'item',
      transitionDuration: '.3',
    };
  }

  onClick(i) {
    let optIndex = this.state.optIndex;
    if (this.props.checkbox) {
      optIndex.push({ vars: i, key: keyNum });
      keyNum++;
    } else {
      const inArray = optIndex.map(item => {
        if (item.vars === i) {
          return item;
        }
      }).filter(item => item)[0];
      optIndex = [];
      if (!inArray) {
        optIndex.push({ vars: i, key: keyNum });
        keyNum++;
      }
    }
    this.setState({ optIndex }, () => {
      this.props.onClick(this.state.optIndex);
    });
  }


  getImgChild = (item, i) => {
    const imgLoad = this.state.imgLoad;
    let isLoad = i in imgLoad;
    if (!isLoad) {
      const img = new Image();
      img.src = item.src;
      if (img.complete) {
        isLoad = true;
      } else {
        img.onload = img.onerror = () => {
          imgLoad[i] = 1;
          this.setState({ imgLoad });
        };
      }
    }
    const onClick = this.onClick.bind(this, i);
    const isOptIndex = this.state.optIndex.map(item => {
      if (item.vars === i) {
        return true;
      }
    }).filter(item => item)[0];
    return (<div
      key={i}
      className="item"
      style={{ width: item.width, height: item.height }}
      disabled={item.disabled}
    >
      {item.disabled ? <span className="disabled-test">敬请期待</span> : null}
      <TweenOneGroup
        component="a"
        style={{ width: item.width, height: item.height }}
        onClick={onClick}
        enter={{ scale: 0, type: 'from', opacity: 0, ease: 'easeOutBack', duration: 300 }}
        leave={{ scale: 0, opacity: 0, ease: 'easeInBack', duration: 300 }}
      >
        {isLoad ? <img src={item.src} width="100%"/>: <Icon type="loading" key="load"/>}
        <div className="item-text" key="text">{item.text}</div>
        {isOptIndex ? <Icon className="check" type="check-circle" key="check" /> : null}
      </TweenOneGroup>
    </div>);
  };

  render() {
    return (<AutoResponsive ref="container" {...this.getAutoResProps()} {...this.props}>
      {this.props.imgArr.map(this.getImgChild)}
    </AutoResponsive>);
  }
}
AutoResponsiveDemo.propTypes = {
  className: PropTypes.string,
  imgArr: PropTypes.array,
  onClick: PropTypes.func,
  checkbox: PropTypes.bool,
  optIndex: PropTypes.array,
};
AutoResponsiveDemo.defaultProps = {
  checkbox: false,
  optIndex: [],
  onClick: noop,
};
export default AutoResponsiveDemo;
