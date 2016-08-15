---
order: 5
title: 随鼠标摆动
cols: 1
---

跟随鼠标左右摆动。

````jsx
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const { Element } = BannerAnim;
const BgElement = Element.BgElement;
class Demo extends React.Component {
  render() {
    return (
      <BannerAnim prefixCls="banner-user">
        <Element key="aaa"
          prefixCls="banner-user-elem"
          followParallax={{
            delay: 1000,
            data: [
              { key: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
              { key: 'title', value: 50, type: 'x' },
              { key: 'content', value: -30, type: 'x' },
            ],
          }}
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne key='title' className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>Ant Motion Demo</TweenOne>
          <TweenOne key='content' className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Image source from the network Demo, please upload pictures to replace.Image source </TweenOne>
        </Element>
        <Element key="bbb"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
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
