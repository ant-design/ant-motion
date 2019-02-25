---
order: 0
title: 
  zh-CN: 简单的例子
  en-US: Simple
cols: 1
---

## zh-CN
最简单的进场例子。

## en-US
The simplest example.

````jsx
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
class Demo extends React.Component {
  render(){
    return (
      <BannerAnim prefixCls="banner-user">
        <Element 
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#364D79',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="1" 
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      </BannerAnim>);
  }
}
ReactDOM.render(
  <Demo />
, mountNode);
````
```css
/* 通用样式, 下例 demo 单独使用都需要这块样式 */
.banner-user{
  height: 220px;
}
.banner-user-elem{
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.banner-user-elem .banner-user-title{
  font-size: 32px;
  top: 40%;
}
.banner-user-elem .banner-user-text{
  top: 40%;
}
.banner-anim-elem .bg{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
```