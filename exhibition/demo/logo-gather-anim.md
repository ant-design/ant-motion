---
order: 5
title:
  zh-CN: Logo 聚集与散开
  en-US: Logo Gather
content: 
  zh-CN: 以圆点散开与聚集来展示 logo 的一个小动画。
  en-US: Show a little logo animation by scattering and gathering dots.
image: https://zos.alipayobjects.com/rmsportal/YsRZqQwpiAVgWrX.png
---
## zh-CN
首页 logo 动画的实现代码, 提供三个logo的样式， 还可自已添加 logo，如果需定制个性化的东西，请在 LogoGather 里修改。

图片默认尺寸为 300 * 300;

图片取点像素为控制点的个数，以图片宽度除以像素点来决定点的个数, 默认为 20, 每行每列为15个取点。

## en-US

The implementation code of the home logo animation.

The default size of the image is 300 * 300;

The width of the image is divided by the number of pixels to determine the number of points, default 20。


```jsx
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import InputNumber from 'antd/lib/input-number';
import Radio from 'antd/lib/radio';
import Icon from 'antd/lib/icon';
import { enquireScreen } from 'enquire-js';
import PropTypes from 'prop-types';

const RadioGroup = Radio.Group;

class LogoGather extends React.Component {
  static propTypes = {
    image: PropTypes.string,
    w: PropTypes.number,
    h: PropTypes.number,
    pixSize: PropTypes.number,
    pointSizeMin: PropTypes.number,
  };

  static defaultProps = {
    image: 'https://zos.alipayobjects.com/rmsportal/gsRUrUdxeGNDVfO.svg',
    w: 300,
    h: 300,
    pixSize: 20,
    pointSizeMin: 10,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.interval = null;
    this.gather = true;
    this.intervalTime = 9000;
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this);
    this.createPointData();
  }

  componentWillUnmount() {
    ticker.clear(this.interval);
    this.interval = null;
  }

  onMouseEnter = () => {
    // !this.gather && this.updateTweenData();
    if (!this.gather) {
      this.updateTweenData();
    }
    this.componentWillUnmount();
  };

  onMouseLeave = () => {
    // this.gather && this.updateTweenData();
    if (this.gather) {
      this.updateTweenData();
    }
    this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
  };

  setDataToDom(data, w, h) {
    this.pointArray = [];
    const number = this.props.pixSize;
    for (let i = 0; i < w; i += number) {
      for (let j = 0; j < h; j += number) {
        if (data[((i + j * w) * 4) + 3] > 150) {
          this.pointArray.push({ x: i, y: j });
        }
      }
    }
    const children = [];
    this.pointArray.forEach((item, i) => {
      const r = Math.random() * this.props.pointSizeMin + this.props.pointSizeMin;
      const b = Math.random() * 0.4 + 0.1;
      children.push((
        <TweenOne className="point-wrapper" key={i} style={{ left: item.x, top: item.y }}>
          <TweenOne
            className="point"
            style={{
              width: r,
              height: r,
              opacity: b,
              backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`,
            }}
            animation={{
              y: (Math.random() * 2 - 1) * 10 || 5,
              x: (Math.random() * 2 - 1) * 5 || 2.5,
              delay: Math.random() * 1000,
              repeat: -1,
              duration: 3000,
              yoyo: true,
              ease: 'easeInOutQuad',
            }}
          />
        </TweenOne>
      ));
    });
    this.setState({
      children,
      boxAnim: { opacity: 0, type: 'from', duration: 800 },
    }, () => {
      this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
    });
  }

  createPointData = () => {
    const { w, h } = this.props;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    canvas.width = this.props.w;
    canvas.height = h;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;
      this.setDataToDom(data, w, h);
      this.dom.removeChild(canvas);
    };
    img.crossOrigin = 'anonymous';
    img.src = this.props.image;
  };

  gatherData = () => {
    const children = this.state.children.map(item =>
      React.cloneElement(item, {
        animation: {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          delay: Math.random() * 500,
          duration: 800,
          ease: 'easeInOutQuint',
        },
      }));
    this.setState({ children });
  };

  disperseData = () => {
    const rect = this.dom.getBoundingClientRect();
    const sideRect = this.sideBox.getBoundingClientRect();
    const sideTop = sideRect.top - rect.top;
    const sideLeft = sideRect.left - rect.left;
    const children = this.state.children.map(item =>
      React.cloneElement(item, {
        animation: {
          x: Math.random() * rect.width - sideLeft - item.props.style.left,
          y: Math.random() * rect.height - sideTop - item.props.style.top,
          opacity: Math.random() * 0.4 + 0.1,
          scale: Math.random() * 2.4 + 0.1,
          duration: Math.random() * 500 + 500,
          ease: 'easeInOutQuint',
        },
      }));

    this.setState({
      children,
    });
  };

  updateTweenData = () => {
    this.dom = ReactDOM.findDOMNode(this);
    this.sideBox = ReactDOM.findDOMNode(this.sideBoxComp);
    ((this.gather && this.disperseData) || this.gatherData)();
    this.gather = !this.gather;
  };

  render() {
    return (
      <div className="logo-gather-demo-wrapper">
        <canvas id="canvas" />
        <TweenOne
          animation={this.state.boxAnim}
          className="right-side blur"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          ref={(c) => {
            this.sideBoxComp = c;
          }}
        >
          {this.state.children}
        </TweenOne>
      </div>
    );
  }
}
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.defaultImage = {
      a: 'https://zos.alipayobjects.com/rmsportal/gsRUrUdxeGNDVfO.svg',
      b: 'https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg',
      c: 'https://zos.alipayobjects.com/rmsportal/NbWTEbiswBhrRBU.svg',
    };
    this.state = {
      image: this.defaultImage.a,
      pixSize: 20,
      pointSize: 10,
      isMobile: false,
      show: false,
    };
  }

  componentDidMount() {
    enquireScreen((isMobile) => {
      this.setState({ isMobile });
    });
  }

  onChangeImage = (e) => {
    const dom = e.target;
    this.image = dom.value;
  }

  onChangePix = (num) => {
    this.pixSize = num;
  }

  onClick = () => {
    if (this.image || this.pixSize || this.pointSize) {
      this.setState({
        image: this.image || this.state.image,
        pixSize: typeof this.pixSize === 'number' ? this.pixSize : this.state.pixSize,
        pointSize: typeof this.pointSize === 'number' ? this.pointSize : this.state.pointSize,
        update: true,
      }, () => {
        this.setState({
          update: false,
        });
      });
    }
  }

  onChangeRadio = (e) => {
    const target = e.target;
    const value = target.value;
    this.image = this.defaultImage[value];
    this.setState({
      value,
    });
  }

  onChangePoint = (num) => {
    this.pointSize = num;
  }

  phoneClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        {!this.state.update && (
          <LogoGather
            image={this.state.image}
            pixSize={this.state.pixSize}
            pointSizeMin={this.state.pointSize}
          />
        )}
        <div className={`logo-gather-demo-edit-wrapper ${this.state.show ? 'open' : ''}`}>
          {this.state.isMobile && (
            <div className="edit-button" onClick={this.phoneClick}>
              <Icon type="down" />
            </div>
          )}
          <ul>
            <li>Image:</li>
            <li >
              <RadioGroup onChange={this.onChangeRadio} defaultValue="a">
                <Radio value="a">
                  <img
                    src={this.defaultImage.a}
                    height="30"
                  />
                </Radio>
                <Radio value="b">
                  <img
                    src={this.defaultImage.b}
                    height="30"
                  />
                </Radio>
                <Radio value="c">
                  <img
                    src={this.defaultImage.c}
                    height="30"
                  />
                </Radio>
                <Radio key="d" value="d" className={`${this.state.isMobile ? 'none' : ''}`}>
                  Other
                  <TweenOneGroup
                    style={{ display: 'inline-block', height: 0 }}
                    enter={{ width: 0, opacity: 0, type: 'from' }}
                    leave={{ width: 0, opacity: 0 }}
                  >
                    {this.state.value === 'd' ? (
                      <div key="d">
                        <Input
                          placeholder="Input image url"
                          style={{ width: 120, marginLeft: 5 }}
                          onChange={this.onChangeImage}
                        />
                      </div>
                    ) : null}
                  </TweenOneGroup>
                </Radio>
              </RadioGroup>
            </li>
            <li className={`${this.state.isMobile ? 'phone-float-none' : ''}`}>取点像素(pixel)：</li>
            <li>
              <InputNumber
                defaultValue={this.state.pixSize}
                min={15}
                style={{ width: 60 }}
                onChange={this.onChangePix}
              />
            </li>
            <li className={`${this.state.isMobile ? 'phone-float-none' : ''}`}>宽加随机(width)：</li>
            <li>
              <InputNumber
                defaultValue={this.state.pointSize}
                style={{ width: 60 }}
                onChange={this.onChangePoint}
              />
            </li>
            <li className={`${this.state.isMobile ? 'phone-float-none' : ''}`}>
              <Button type="primary" onClick={this.onClick}>Update</Button>
            </li>
          </ul>
          <div style={{ lineHeight: '32px' }}>
            注：图片尺寸为正方形的PNG或SVG，请确保图片开启跨域；像数点的数值越大则点越少，为流畅最小值为15.
            <br />
            Note: The picture size is square PNG or SVG, please make sure the image is open across domains;
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <Edit />
, mountNode);
```
```css
.logo-gather-demo-edit-wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #f1f1f1;
  padding: 0 5%;
  line-height: 45px;
}

.logo-gather-demo-edit-wrapper ul {
  display: block;
  width: 100%;
  overflow: hidden;
}

.logo-gather-demo-edit-wrapper ul li:first-child {
  margin-left: 0;
}

.logo-gather-demo-edit-wrapper ul li {
  float: left;
  vertical-align: middle;
  margin: 0 5px;
}

.logo-gather-demo-wrapper {
  position: relative;
  background: #019BF0;
  overflow: hidden;
  height: 500px;
}

.logo-gather-demo-wrapper .point-wrapper {
  position: absolute;
}

.logo-gather-demo-wrapper .point {
  border-radius: 100%;
}

.logo-gather-demo-wrapper .right-side {
  width: 300px;
  height: 360px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.logo-gather-demo-wrapper .right-side * {
  pointer-events: none;
}

@media screen and (max-width: 414px) {
  .exhibition-details-demo {
    overflow: hidden;
  }

  .logo-gather-demo-edit-wrapper {
    transform: translateY(100%);
    transition: transform .45s ease-in-out;
  }

  .logo-gather-demo-edit-wrapper.open{
    transform: translateY(0);
  }

  .logo-gather-demo-edit-wrapper .anticon-down{
    transition: transform .45s ease-in-out;
  }

  .logo-gather-demo-edit-wrapper.open .anticon-down{
    transform: rotate(180deg);
  }

  .logo-gather-demo-edit-wrapper > div {
    width: 90%;
    line-height: 24px !important;
    margin-bottom: 5px;
  }

  .exhibition-details-demo .edit-button{
    position: absolute;
    top: -20px;
    width: 30px;
    height: 20px;
    border-radius: 30px 30px 0 0;
    background: #f1f1f1;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.15);
  }

  .logo-gather-demo-edit-wrapper ul {
    margin: 5px auto;
  }

  .phone-float-none {
    clear: both;
    margin-left: 0 !important;
  }

  .none {
    display: none;
  }

}
```
