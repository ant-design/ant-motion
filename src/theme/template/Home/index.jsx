import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import '../../static/style.js';
class Home extends React.Component {
  constructor() {
    super(...arguments);
    this.clientHeight = window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    this.state = {
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
    let height = this.clientHeight - 199;
    const _h = this.clientHeight - 64 < 680 ? 680 : this.clientHeight - 64;
    height = height < 680 ? _h : height;
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
      style,
    });
  }

  render() {
    return (<div style={{ height: 'calc(100% - 199px)' }}  className={`banner ${this.props.className}`.trim()}>
      <div style={this.state.style}>
        <TweenOne component="video" animation={{ opacity: 1, delay: 300, duration: 1000 }}
          autoPlay width="100%" style={{ opacity: 0 }}
        >
          <source src="https://os.alipayobjects.com/rmsportal/vmZjVCXfxETfcgb.mp4 " type="video/mp4" />
          <img src="https://t.alipayobjects.com/images/T18V8mXfhdXXXXXXXX.jpg" width="100%" />
        </TweenOne>
      </div>
      <QueueAnim className="banner-text" type="bottom" duration={500} delay={800}>
        <h1 key="h1">Ant Motion</h1>
        <span key="span">设计者的动效翻译器</span>
        <Link to="/cases/" key="link">开始使用</Link>
      </QueueAnim>
    </div>);
  }
}

export default Home;
