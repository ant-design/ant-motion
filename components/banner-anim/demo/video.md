---
order: 3
title: 
  zh-CN: Video 背景
  en-US: Video Bg
hidden: true
---

## zh-CN

用 video 作为背景时。

## en-US

When using video as the background.

````jsx
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
class Demo extends React.Component {
  render() {
    return (
      <BannerAnim>
        <Element key="aaa"
          prefixCls="banner-user-elem"
          bgType="video/mp4"
          bg="https://os.alipayobjects.com/rmsportal/CoDFvoxaQpTnLOM.mp4"
        >
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>Ant Motion Demo</TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Image source from the network Demo, please upload pictures to replace.Image source </TweenOne>
        </Element>
        <Element key="bbb"
          prefixCls="banner-user-elem"
          bg="https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg"
        >
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>Ant Motion Demo</TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Image source from the network Demo, please upload pictures to replace.Image source </TweenOne>
        </Element>
        <Element key="ccc"
          prefixCls="banner-user-elem"
          bg="https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg"
        >
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>Ant Motion Demo</TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Image source from the network Demo, please upload pictures to replace.Image source </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}
ReactDOM.render(
  <Demo />
, mountNode);
````
