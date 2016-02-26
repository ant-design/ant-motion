import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import TweenOne from 'rc-tween-one';

class VideoExplain extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      playBtnXY: '',
      play: false,
    };
    [
      'onWindowResized',
      'onClick',
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
    const dom = ReactDom.findDOMNode(this);
    const rect = dom.getBoundingClientRect();
    this.setState({
      playBtnXY: `translate(${rect.width / 2} ${rect.height / 2})`,
    });
  }

  onClick() {
    const dom = ReactDom.findDOMNode(this);
    const video = dom.children[0];
    const play = !this.state.play;
    let leftBar;
    let rightBar;
    let alpha;
    const ease = 'easeOutBack';
    const duration = 300;
    if (play) {
      leftBar = {
        x: -10,
        y: -15,
        r: 0,
        height: 30,
        duration,
        ease,
      };
      rightBar = {
        x: 6,
        y: -15,
        r: 0,
        height: 30,
        duration,
        ease,
      };
      alpha = {
        opacity: 0,
      };
      video.play();
    } else {
      leftBar = {
        x: -8,
        y: -14,
        r: -45,
        height: 20,
        duration,
        delay: 200,
        ease,
      };
      rightBar = {
        x: 8,
        y: -3,
        r: 45,
        height: 23,
        duration,
        delay: 200,
        ease,
      };
      alpha = {
        opacity: 1,
      };
      video.pause();
    }
    this.setState({
      leftBar,
      rightBar,
      alpha,
      play,
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <video preload loop style={{ width: '100%' }}>
          <source src={this.props.src} type={this.props.videoType} />
        </video>
        <TweenOne animation={this.state.alpha}>
          <svg width="100%" height="100%"
            style={{ position: 'absolute', top: 0, left: 0, cursor: 'pointer' }}
            onClick={this.onClick}
          >
            <g>
              <rect width="100%" height="100%" fill="rgba(0,0,0,0.35)" />
              <g transform={this.state.playBtnXY}>
                <circle r="30" fill="rgba(255,255,255,1)" />
                <TweenOne component="rect" width="4" fill="#999"
                  style={{ height: 20, transform: 'translate(-8px,-14px) rotate(-45deg)' }}
                  animation={this.state.leftBar}
                />
                <TweenOne component="rect" width="4" fill="#999"
                  style={{ height: 23, transform: 'translate(8px,-3px) rotate(45deg)' }}
                  animation={this.state.rightBar}
                />
              </g>
            </g>
          </svg>
        </TweenOne>
      </div>
    );
  }
}

VideoExplain.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  src: PropTypes.string,
  videoType: PropTypes.string,
  autoPlay: PropTypes.bool,
};

VideoExplain.defaultProps = {
  className: 'content-img',
  videoType: 'video/mp4',
};

export default VideoExplain;
