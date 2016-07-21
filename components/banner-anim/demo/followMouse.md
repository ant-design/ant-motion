---
order: 5
title: 随鼠标摆动
cols: 1
hidden: true
---

跟随鼠标左右摆动。

````jsx
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const { Element } = BannerAnim;
class Demo extends React.Component {
  render() {
    return (
      <BannerAnim>
        <Element key="aaa"
          prefixCls="banner-user-elem"
          bg="https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg"
          followParallax={{
            ease: 'easeInOutCirc',
            minMove: 0.1,
            delay: 1000,
            data: [
              { key: 'bgElem', scale: 0.03, bgPosition: '50%', type: ['backgroundPositionX']},
              { key: 'title', scale: 0.05, type: 'x' },
              { key: 'content', scale: -0.03, type: 'x' },
            ],
          }}
        >
          <TweenOne key='title' className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>Ant Motion Demo</TweenOne>
          <TweenOne key='content' className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Image source from the network Demo, please upload pictures to replace.Image source </TweenOne>
        </Element>
        <Element key="bbb"
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
