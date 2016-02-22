import React, { PropTypes } from 'react';
import './home.less';
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

class Home extends React.Component {
  constructor() {
    super(...arguments);
    this.clientHeight = window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    this.state = {
      height: this.clientHeight - 135 - 64,
      style: null,
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
    this.onWindowResized();
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
  }

  onWindowResized() {
    this.clientHeight = window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    let height = this.clientHeight - 135 - 64;
    const _h = this.clientHeight - 64 < 650 ? 650 : this.clientHeight - 64;
    height = height < 650 ? _h : height;
    const style = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      right: 0,
    };
    const heightPer = height / 1080;
    style.width = 1920 * heightPer;
    this.setState({
      height,
      style,
    });
  }

  render() {
    return (<div style={{ height: this.state.height, overflow: 'hidden' }}>
      <div style={ this.state.style }>
        <TweenOne component="video" animation={{ opacity: 1, delay: 300, duration: 1000 }}
          autoPlay width="100%" style={{ opacity: 0 }}
        >
          <source src="https://os.alipayobjects.com/rmsportal/vmZjVCXfxETfcgb.mp4 " type="video/mp4" />
          <img src="https://t.alipayobjects.com/images/T18V8mXfhdXXXXXXXX.jpg" width="100%" />
        </TweenOne>
      </div>
      <QueueAnim className="banner-text" type="bottom" duration={500}>
        <h1 key="h1">Ant Motion</h1>
        <span key="span">高效的动效设计解决方案</span>
        <Link to="" key="link">开始使用</Link>
      </QueueAnim>
    </div>);
  }
}
Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: 'home',
};
export default Home;
