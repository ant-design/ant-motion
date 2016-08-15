---
order: 0
title: 默认
cols: 1
---

最简单的进场例子。

````jsx
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
class Demo extends React.Component {
  render(){
    return (
      <BannerAnim prefixCls="banner-user"  type="grid">
        <Element 
          prefixCls="banner-user-elem"
          key="0"
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
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>Ant Motion Demo</TweenOne>
          <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>Image source from the network Demo, please upload pictures to replace.Image source </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="1" 
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
      </BannerAnim>);
  }
}
ReactDOM.render(
  <Demo />
, mountNode);
````

````css
.banner-user{
  height: 400px;
}
.banner-user-elem{
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.banner-user-elem .banner-user-title{
  font-size: 22px;
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
````
