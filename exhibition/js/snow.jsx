
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
import React from 'react';
import PropTypes from 'prop-types';

import './snow.css';
import './money.less';

TweenOne.plugins.push(BezierPlugin);

class Snow extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    amount: PropTypes.number,
    repeat: PropTypes.number,
    ease: PropTypes.string,
    startArea: PropTypes.object,
    endArea: PropTypes.object,
    startDelayRandom: PropTypes.number,
    basicToDuration: PropTypes.number,
    randomToDuration: PropTypes.number,
    rotateRandom: PropTypes.number,
    bezierSegmentation: PropTypes.number,
    onEnd: PropTypes.func,
  }
  static defaultProps = {
    prefixCls: 'snow',
    amount: 10,
    repeat: 0,
    ease: 'linear',
    startArea: {
      x: 0, y: -200, width: '100%', height: 50,
    },
    endArea: {
      x: -200, y: '100%', width: '120%', height: 100,
    },
    basicToDuration: 1200,
    randomToDuration: 800,
    startDelayRandom: 800,
    rotateRandom: 180,
    bezierSegmentation: 2,
    onEnd: () => { },
  };

  constructor(props) {
    super(props);
    this.state = {
      children: null,
    };
  }
  componentDidMount() {
    this.setChilrenToState();
  }

  onAnimEnd = () => {
    this.animEnd += 1;
    if (this.animEnd >= this.props.amount) {
      this.animEnd = 0;
      if (this.props.onEnd) {
        this.props.onEnd();
      }
    }
  }

  setChilrenToState() {
    const children = this.getChildrenToRender();
    this.setState({
      children,
    });
  }

  getChildrenToRender = () => {
    const {
      bezierSegmentation, basicToDuration, randomToDuration,
      amount, ease, startDelayRandom, repeat, rotateRandom,
    } = this.props;
    const children = React.Children.toArray(this.props.children);
    const rect = this.wrapperDom.getBoundingClientRect();
    const startArea = this.dataToNumber(this.props.startArea, rect);
    const endArea = this.dataToNumber(this.props.endArea, rect);
    return Array(amount).fill(1).map((k, i) => {
      const item = children[Math.floor(Math.random() * children.length)];
      const vars = Array(bezierSegmentation).fill(1).map((c, j) => {
        const hegiht = endArea.y - startArea.y - startArea.height;
        const y = (hegiht / bezierSegmentation) * (j + 1);
        const x = Math.random() * (Math.max(startArea.width, endArea.width)
          + Math.min(startArea.x, endArea.x));
        // console.log(hegiht, startArea, endArea, y);
        return {
          y,
          x,
        };
      });
      const delay = Math.random() * startDelayRandom;
      const animation = {
        bezier: {
          type: 'soft',
          autRotate: true,
          vars,
        },
        ease,
        repeat,
        repeatDelay: delay,
        delay,
        duration: basicToDuration + Math.random() * randomToDuration,
        onComplete: this.onAnimEnd,
      };
      const style = {
        transform: `translate(${Math.random() * (startArea.width) + startArea.x}px, ${
          Math.random() * (startArea.height) + startArea.y
        }px)`,
      };
      const child = rotateRandom ? (
        <TweenOne
          className="snowRotate"
          style={{ transform: `rotate(${Math.random() * rotateRandom}deg)` }}
          animation={{
            rotate: 0,
            duration: animation.duration * 4 / 5,
            delay: animation.delay,
            repeat: animation.repeat,
          }}
        >
          {item}
        </TweenOne>
      ) : item;
      return (
        <TweenOne
          animation={animation}
          style={style}
          key={`${item}-${i.toString()}`}
          className="snowChild"
        >
          {child}
        </TweenOne>
      );
    });
  }
  dataToNumber = (obj, rect) => {
    const toNumber = (v, full) => {
      if (typeof v === 'number') {
        return v;
      }
      const unit = v.replace(/[0-9|.]/g, '');
      switch (unit) {
        case '%':
          return parseFloat(v) * full / 100;
        case 'em':
          return parseFloat(v) * 16;
        default:
          return null;
      }
    };
    return {
      x: toNumber(obj.x, rect.width),
      y: toNumber(obj.y, rect.height),
      width: toNumber(obj.width, rect.width),
      height: toNumber(obj.height, rect.height),
    };
  }
  animEnd = 0;
  render() {
    const { prefixCls, ...props } = this.props;
    const { children } = this.state;
    [
      'amount',
      'repeat',
      'ease',
      'startArea',
      'endArea',
      'basicToDuration',
      'randomToDuration',
      'startDelayRandom',
      'bezierSegmentation',
      'rotateRandom',
      'onEnd',
    ].forEach(k => delete props[k]);
    const className = `${prefixCls}${props.className ? ` ${props.className}` : ''}`;
    return (
      <div
        {...props}
        ref={(c) => {
          this.wrapperDom = c;
        }}
        className={className}
      >
        {children}
      </div>
    );
  }
}

export default class SnowDemo extends React.Component {
  state = {
    show: true,
  }
  onEnd = () => {
    this.setState({
      show: false,
    });
  }
  render() {
    const children = Array(5).fill(1).map((c, i) => (
      <div key={i} className="addMoneyAnim" style={{ animationDelay: `${-Math.random() * 0.6}s` }} />
    ));
    return (
      <div className="snow-demo-wrapper" >
        <div className="snow-demo">
          {this.state.show && (
            <Snow onEnd={this.onEnd}>
              {children}
            </Snow>
          )}
        </div>
      </div>
    );
  }
}
