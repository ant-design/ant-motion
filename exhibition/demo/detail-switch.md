---
order: 2
title: 
  zh-CN: 详细说明切换
  en-US: Detail Switch
content: 
  zh-CN: 页面里的详细说明间的走马灯切换效果。
  en-US: The effect of street light switching between the detailed instructions on the page.
image: https://zos.alipayobjects.com/rmsportal/cvLbMZkjkNvqbVF.png
---

## zh-CN

图片动画效果参考于 [dribbble](https://dribbble.com/shots/2595631-Wine-catalog-browsing-animation-design)；

## en-US

Picture animation effect ref [dribbble](https://dribbble.com/shots/2595631-Wine-catalog-browsing-animation-design)；

```jsx
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';

const Element = BannerAnim.Element;

const textData = {
  content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
  ' the motorcycle referred to in the mainland, ' +
  'Hong Kong and Southeast Asia known as motorcycles [2], ' +
  'is a driven by the engine, ' +
  'operated by a hand or two directions three-wheeled vehicles, is a means of transport. ' +
  'In some military or police applications, will add a side compartment and a secondary wheel, ' +
  'become a special three-wheeled motorcycle, mobility Zheyi common plug-in auxiliary wheels.',
  title: 'Motorcycle',
};

let dataArray = [
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png',
    map: 'https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png',
    color: '#FFF43D',
    background: '#F6B429',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png',
    map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
    color: '#FF4058',
    background: '#FC1E4F',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png',
    map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
    color: '#9FDA7F',
    background: '#64D487',
  },
];
dataArray = dataArray.map(item => ({ ...item, ...textData }));

class DetailSwitchDemo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'details-switch-demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0, -300], opacity: [1, 0] },
      ],
    };
    this.oneEnter = false;
  }

  onChange = () => {
    if (!this.oneEnter) {
      this.setState({ delay: 300 });
      this.oneEnter = true;
    }
  }

  onLeft = () => {
    let showInt = this.state.showInt;
    showInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.prev();
    this.bannerText.prev();
  };

  onRight = () => {
    let showInt = this.state.showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    showInt += 1;
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.next();
    this.bannerText.next();
  };

  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };

  render() {
    const imgChildren = dataArray.map((item, i) => (
      <Element 
        key={i} 
        style={{ 
          background: item.color,
          height: '100%',
        }} 
        leaveChildHide
       >
        <QueueAnim
          animConfig={this.state.imgAnim}
          duration={this.getDuration}
          delay={[!i ? this.state.delay : 300, 0]}
          ease={['easeOutCubic', 'easeInQuad']}
          key="img-wrapper"
        >
          <div className={`${this.props.className}-map map${i}`} key="map">
            <img src={item.map} width="100%" />
          </div>
          <div className={`${this.props.className}-pic pic${i}`} key="pic">
            <img src={item.pic} width="100%" />
          </div>
        </QueueAnim>
      </Element>));
    const textChildren = dataArray.map((item, i) => {
      const { title, content, background } = item;
      return (<Element key={i}>
        <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
          <h1 key="h1">{title}</h1>
          <em key="em" style={{ background }} />
          <p key="p">{content}</p>
        </QueueAnim>
      </Element>);
    });
    return (<div
      className={`${this.props.className}-wrapper`}
      style={{ background: dataArray[this.state.showInt].background }}
    >
      <div className={this.props.className}>
        <BannerAnim
          prefixCls={`${this.props.className}-img-wrapper`}
          sync
          type="across"
          duration={1000}
          ease="easeInOutExpo"
          arrow={false}
          thumb={false}
          ref={(c) => { this.bannerImg = c; }}
          onChange={this.onChange}
          dragPlay={false}
        >
          {imgChildren}
        </BannerAnim>
        <BannerAnim
          prefixCls={`${this.props.className}-text-wrapper`}
          sync
          type="across"
          duration={1000}
          arrow={false}
          thumb={false}
          ease="easeInOutExpo"
          ref={(c) => { this.bannerText = c; }}
          dragPlay={false}
        >
          {textChildren}
        </BannerAnim>
        <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
          {this.state.showInt && <Icon type="left" key="left" onClick={this.onLeft} />}
          {this.state.showInt < dataArray.length - 1 && <Icon type="right" key="right" onClick={this.onRight} />}
        </TweenOneGroup>
      </div>
    </div>);
  }
}

ReactDOM.render(
  <DetailSwitchDemo />
, mountNode);
```

```css
.details-switch-demo-wrapper {
  position: relative;
  overflow: hidden;
  height: 450px;
  transition: background 1s;
}

.details-switch-demo {
  margin: 40px auto;
  width: 600px;
  height: 370px;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}

.details-switch-demo-img-wrapper,
.details-switch-demo-text-wrapper {
  width: 50%;
  display: inline-block;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.details-switch-demo-pic,
.details-switch-demo-map {
  position: absolute;
}

.details-switch-demo-pic {
  width: 220px;
  top: 100px;
  left: 40px;
}

.details-switch-demo-map {
  width: 250px;
  top: 60px;
  left: 30px;
}
.details-switch-demo-map.map2{
  width: 200px;
  left: 50px;
}

.details-switch-demo-text-wrapper .banner-anim-elem {
  padding: 40px;
}

.details-switch-demo-text-wrapper h1 {
  font-size: 18px;
  margin: 5px auto;
}

.details-switch-demo-text-wrapper em {
  height: 2px;
  width: 60px;
  border-radius: 2px;
  display: block;
}

.details-switch-demo-text-wrapper p {
  font-size: 12px;
  margin-top: 10px;
}

.details-switch-demo-wrapper .anticon{
  position: absolute;
  font-size: 24px;
  top: 50%;
  margin-top: -12px;
  cursor: pointer;
}

.details-switch-demo-wrapper .anticon-left{
  left: 5px;
  z-index: 999;
}

.details-switch-demo-wrapper .anticon-right{
  right: 5px;
}
@media screen and (max-width: 414px) {
  .details-switch-demo {
    transform: scale(.6) translateX(12px);
    transform-origin: left center;
  }
}
@media screen and (max-width: 375px) {
  .details-switch-demo {
    transform: scale(.55) translateX(7px);
  }
}
@media screen and (max-width: 320px) {
  .details-switch-demo {
    transform: scale(.46) translateX(12px);
  }
}
```
