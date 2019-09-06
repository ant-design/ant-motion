---
order: 7
title:
  zh-CN: 卡片旋转
  en-US: Carousel
content: 
  zh-CN: Carousel 3d 卡片的旋转效果。
  en-US: Rotation effect of carousel 3D card.
image: https://gw.alipayobjects.com/zos/rmsportal/HOmyKwEoPKktzFyEsKOG.jpg
---

## zh-CN

支付宝客户端里的小钱袋产品的心愿卡片菜单，手机上的一种卡片的收纳方式。

> 模糊比较耗性能，手机上不建议开启。

## en-US

A way of displaying a card on the wireless side.

> mobile is not recommended to open blur.

```jsx
import PropTypes from 'prop-types';

// const currentDpr = window.devicePixelRatio;
// const defaultDpr = 2; // sketch 里用的是 iphone 6 尺寸;
const dpr = 0.5;// currentDpr / defaultDpr;

class Carousel3d extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func,
    tilt: PropTypes.string,
    duration: PropTypes.string,
    ease: PropTypes.string,
    blurIncrease: PropTypes.number,
    opacityDecline: PropTypes.number,
    opacityBasics: PropTypes.number,
    moveRange: PropTypes.number,
    childMaxLength: PropTypes.number,
    perspective: PropTypes.number,
    z: PropTypes.number,
    current: PropTypes.number,
  }
  static defaultProps = {
    onChange: () => { },
    tilt: '5rem',
    duration: '.45s',
    ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    blurIncrease: 8,
    opacityDecline: 0.1,
    opacityBasics: 0.5,
    moveRange: 2,
    childMaxLength: 6,
    perspective: 2800,
    z: 800,
    current: 0,
  };
  constructor(props) {
    super(props);
    this.setLengthAndAngle(props);
    this.state = {
      rotate: -props.current * this.angle,
      current: props.current,
      transition: 'none',
    };
  }
  componentDidMount() {
    this.w = document.body.clientWidth;
    window.addEventListener('mouseup', this.onTouchEnd);
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { current, children } = this.props;
      if (
        (current !== this.state.current && current !== prevProps.current)
        || (React.Children.toArray(children).length !== React.Children
          .toArray(prevProps.children).length)
      ) {
        this.setLengthAndAngle(this.props);
        // eslint-disable-next-line
        this.setState({
          current: this.props.current,
          rotate: -this.props.current * this.angle,
          transition: `transform ${this.props.duration} ${this.props.ease}`,
        });
      }
    }
  }

  onTouchStart = (e) => {
    if (e.touches && e.touches.length > 1 || this.length <= 1) {
      return;
    }
    this.startX = e.pageX || e.touches[0].pageX;
    this.startRotate = Math.round(this.state.rotate / this.angle) * this.angle; // 偏移修复;
  }
  onTouchMove = (e) => {
    if (e.touches && e.touches.length > 1 || this.length <= 1 || !this.startX) {
      return;
    }
    const x = e.pageX || e.touches[0].pageX;
    const differ = (x - this.startX) * this.props.moveRange; // 幅度加大；
    const rotate = this.startRotate + differ / this.w * this.angle;
    const r = (Math.abs(Math.ceil(this.state.rotate / 360)) * 360 - rotate) % 360;
    const current = Math.round(r / this.angle) % this.length;
    this.setState({
      rotate,
      current,
      transition: 'none',
    }, () => {
      this.props.onChange({
        current,
        rotate,
        eventType: 'move',
      });
    });
  }
  onTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches.length > 1 || this.length <= 1 || !this.startX) {
      return;
    }
    const x = e.pageX || e.changedTouches[0].pageX;
    const differ = x - this.startX;
    const { current, rotate } = this.state;
    const n = differ > 0 ? 1 : -1;
    const newRotate = this.startRotate + n * this.angle *
      Math.round(Math.abs((rotate - this.startRotate) / this.angle));
    this.setState({
      rotate: newRotate,
      transition: `transform ${this.props.duration} ${this.props.ease}`,
    }, () => {
      this.startX = null;
      this.props.onChange({
        current,
        rotate: newRotate,
        eventType: 'end',
      });
    });
  }
  setLengthAndAngle = (props) => {
    this.length = React.Children.toArray(props.children).length;
    this.length = this.length > props.childMaxLength ? props.childMaxLength : this.length;
    this.angle = 360 / this.length;
  }
  getAnimStyle = (n, length) => {
    const { opacityBasics, opacityDecline, blurIncrease } = this.props;
    const center = length / 2;
    const i = n > center ? center * 2 - n : n;
    let opacity = 1 - ((i - 1) * opacityDecline + opacityBasics * (n ? 1 : 0));
    opacity = opacity < 0.1 ? 0.1 : opacity;
    const d = {
      opacity,
    };
    if (blurIncrease) {
      d.filter = `blur(${i * blurIncrease}px)`;
    }
    return d;
  }
  getChildrenToRender = (children) => {
    const { childMaxLength, z } = this.props;
    const newChildren = React.Children.toArray(children);
    const length = newChildren.length;
    const zDpr = z * dpr;
    return newChildren.map((item, i) => {
      if (i >= childMaxLength) {
        return null;
      }
      const transform = `rotateY(${this.angle * i}deg) translateZ(${zDpr}px) rotateY(-${this.angle * i}deg) `;
      const animStyle = this.getAnimStyle(
        Math.abs(this.state.current - i),
        length > childMaxLength ? childMaxLength : length
      );
      const style = {
        transform,
        // opacity: animStyle.opacity, 留坑，preserve-3d 不可以与 opacity 同时使用，排查了一下午
      };
      return (
        <div
          className="itemWrapper"
          key={item.key}
          style={style}
        >
          <div
            className="rotateLayer"
            style={{
              transform: `rotateY(${-this.state.rotate}deg)`,
              transition: this.state.transition,
            }}
          >
            <div
              className="bgAndBlurLayer"
              style={{ ...animStyle }}
            >
              {/* transform 与 filter 的距阵冲突，图层分离 */}
              <div className="contentLayer" style={{ opacity: this.state.current === i ? 1 : 0 }}>
                {item}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    const { onChange, ...props } = this.props;
    const {
      children, tilt, style, z, perspective,
    } = props;
    const zDpr = z * dpr;
    const perspectiveDpr = perspective * dpr;
    const childrenToRender = this.getChildrenToRender(children, perspective);
    [
      'tilt',
      'duration',
      'ease',
      'blurIncrease',
      'opacityDecline',
      'opacityBasics',
      'moveRange',
      'childMaxLength',
      'perspective',
      'z',
      'current',
    ].forEach(k => delete props[k]);
    return (
      <div
        {...props}
        onTouchStart={this.onTouchStart}
        onMouseDown={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onMouseMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        onMouseUp={this.onTouchEnd}
      >
        <div className="carousel-wrapper">
          <div
            className="carousel"
            style={{
              ...style,
              perspective: perspectiveDpr,
              transform: `translateY(-${tilt}) scale(${(perspectiveDpr - zDpr) / perspectiveDpr})`,
            }}
          >
            <div
              className="carouselContent"
              style={{
                transform: `translateY(${tilt}) rotateY(${this.state.rotate}deg)`,
                transition: this.state.transition,
              }}
            >
              {childrenToRender}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const imgWrapper = [
  'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
  'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png',
  'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png',
  'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png',
  'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png',
  'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png',
  /* 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png',
  'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png', */
];
// 使用 Carousel3d 的代码
function Carousel() {
  const children = imgWrapper.map((src, i) => (
    <div
      key={i.toString()}
      className="img-wrapper"
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  ));
  return (
    <div className="carousel-demo-wrapper">
      <Carousel3d className="carousel-demo" childMaxLength={6}>
        {children}
      </Carousel3d>
    </div>);
}


ReactDOM.render(
  <Carousel />
, mountNode);
```

```css
.carousel-demo-wrapper {
  position: relative;
  background: #3949C0;
  overflow: hidden;
  height: 500px;
}

.carousel-demo {
  width: 100%;
  height: 100%;
}

.carousel-wrapper {
  position: absolute;
  width: 250px;
  height: 300px;
  margin: auto;
  left: 0;
  right: 0;
  top: 120px;
  padding-top: 350px;
  margin-top: -350px;
}

.carousel {
  position: relative;
  width: 100%;
  margin: auto;
  height: 100%;
}

.carouselContent {
  transform-style: preserve-3d;
  width: 100%;
}

.itemWrapper {
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  width: 100%;
}

.itemWrapper .rotateLayer .bgAndBlurLayer {
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: filter .45s;
  margin: auto;
}

.itemWrapper .rotateLayer .bgAndBlurLayer .contentLayer {
  transition: opacity .65s;
}

.img-wrapper {
  height: 300px;
  background-size: cover;
  background-position: center;
}
```