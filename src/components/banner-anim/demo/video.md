---
order: 3
title: video背景
---

用 video 作为背景时。

````jsx
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
const { Element } = BannerAnim;
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
