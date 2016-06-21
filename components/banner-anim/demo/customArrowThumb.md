---
order: 2
title: 自定义左右箭头与缩略图
---

可定制自已所示的箭头。

````jsx
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
const { Element, Arrow, Thumb } = BannerAnim;
class Demo extends React.Component {
  constructor() {
    super(...arguments);
    this.imgArray = [
      'https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg',
      'https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg',
    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
      'onMouseEnter',
      'onMouseLeave',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(type, int) {
    if (type === 'before') {
      this.setState({
        intShow: int,
      });
    }
  }

  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= this.imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = this.imgArray.length - 1;
    }

    return [prevInt, nextInt];
  }

  prevEnter() {
    this.setState({
      prevEnter: true,
    });
  }

  prevLeave() {
    this.setState({
      prevEnter: false,
    });
  }

  nextEnter() {
    this.setState({
      nextEnter: true,
    });
  }

  nextLeave() {
    this.setState({
      nextEnter: false,
    });
  }
  
  onMouseEnter() {
    this.setState({
      thumbEnter: true,
    });
  }

  onMouseLeave() {
    this.setState({
      thumbEnter: false,
    });
  }

  render() {
    const intArray = this.getNextPrevNumber();
    const thumbChildren = this.imgArray.map((img, i) =>
          <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
        );
    return (
      <BannerAnim onChange={this.onChange} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <Element key="aaa"
          prefixCls="banner-user-elem"
          img={this.imgArray[0]}
        >
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>Ant Motion Demo</TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Image source from the network Demo, please upload pictures to replace.Image source </TweenOne>
        </Element>
        <Element key="bbb"
          prefixCls="banner-user-elem"
          img={this.imgArray[1]}
        >
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>Ant Motion Demo</TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Image source from the network Demo, please upload pictures to replace.Image source </TweenOne>
        </Element>
        <Arrow arrowType="prev" key="prev" prefixCls="user-arrow" component={TweenOne}
          onMouseEnter={this.prevEnter}
          onMouseLeave={this.prevLeave}
          animation={{ left: this.state.prevEnter ? 0 : -120 }}
        >
          <div className="arrow"></div>
          <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }} appear={false} className="img-wrapper" component="ul">
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})`}} key={intArray[0]} />
          </TweenOneGroup>
        </Arrow>
        <Arrow arrowType="next" key="next" prefixCls="user-arrow" component={TweenOne}
          onMouseEnter={this.nextEnter}
          onMouseLeave={this.nextLeave}
          animation={{ right: this.state.nextEnter ? 0 : -120 }}
        >
          <div className="arrow"></div>
          <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }} appear={false} className="img-wrapper" component="ul">
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})`}} key={intArray[1]} />
          </TweenOneGroup>
        </Arrow>
        <Thumb prefixCls="user-thumb" key="thumb" component={TweenOne}
          animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
        >
          {thumbChildren}
        </Thumb>
      </BannerAnim>
    );
  }
}
ReactDOM.render(
  <Demo />
, mountNode);
````

````css
#components-components-demo-customArrowThumb .user-arrow {
  top: 50%;
  margin-top: -40px;
}
#components-components-demo-customArrowThumb .user-arrow .img-wrapper {
  width: 120px;
  height: 80px;
  float: left;
  position: relative;
}
#components-components-demo-customArrowThumb .user-arrow .img-wrapper li {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
}
#components-components-demo-customArrowThumb .user-arrow .arrow {
  width: 20px;
  height: 80px;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
}
#components-components-demo-customArrowThumb .user-arrow .arrow:before,
#components-components-demo-customArrowThumb .user-arrow .arrow:after {
  width: 2px;
  height: 15px;
  background: #fff;
  display: block;
  content: ' ';
  position: absolute;
}
#components-components-demo-customArrowThumb .user-arrow.next {
  right: -120px;
}
#components-components-demo-customArrowThumb .user-arrow.next .arrow {
  float: left;
}
#components-components-demo-customArrowThumb .user-arrow.next .arrow:before {
  -webkit-transform: rotate(-40deg);
          transform: rotate(-40deg);
  top: 28px;
  left: 10px;
}
#components-components-demo-customArrowThumb .user-arrow.next .arrow:after {
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
  bottom: 27px;
  left: 10px;
}
#components-components-demo-customArrowThumb .user-arrow.prev {
  left: -120px;
}
#components-components-demo-customArrowThumb .user-arrow.prev .arrow {
  float: right;
}
#components-components-demo-customArrowThumb .user-arrow.prev .arrow:before {
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
  top: 28px;
  left: 8px;
}
#components-components-demo-customArrowThumb .user-arrow.prev .arrow:after {
  -webkit-transform: rotate(-40deg);
          transform: rotate(-40deg);
  bottom: 27px;
  left: 8px;
}
#components-components-demo-customArrowThumb .user-thumb {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.15);
  height: 70px;
}
#components-components-demo-customArrowThumb .user-thumb > span {
  width: 80px;
  height: 60px;
  margin: 5px 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  -webkit-transition: background .3s;
          transition: background .3s;
  background: transparent;
}
#components-components-demo-customArrowThumb .user-thumb > span.active {
  background: rgba(255, 255, 255, 0.45);
}
#components-components-demo-customArrowThumb .user-thumb > span i {
  display: block;
  width: 70px;
  height: 50px;
  margin: 5px;
  background-size: cover;
  background-position: center;
}
````
