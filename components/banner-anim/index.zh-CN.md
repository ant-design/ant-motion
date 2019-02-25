---
order: 5
vertical: true
title: 
  zh-CN: Banner动画
  en-US: BannerAnim
---

通过简单的配置, 就能让你的 banner 动起来。 具体参数请参见 [API](/api/banner-anim)

## 何时使用

- 在首页里的首屏展示信息时，需要将 banner 里的元素做动效时。

> [查看更多 Demo](http://react-component.github.io/banner-anim/)


---

## 怎么使用
### 安装
```bash
$ npm install rc-banner-anim --save
```
### 使用
```jsx
import BannerAnim, { Element } from 'rc-banner-anim';
ReactDOM.render(<BannerAnim>
  <Element key="demo1">
    <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>
  </Element>
  <Element key="demo2">
    <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>
  </Element>
</BannerAnim>, mountNode);
```


## API

### BannerAnim

> ref 来控制跳转: `<BannerAnim ref={(c) => { this.banner = c; }}/>`

> 上一个: this.banner.prev();

> 下一个: this.banner.next();

> 跳转:  this.banner.slickGoTo(number); number 从 0 开始;

|参数        |类型             |默认     |详细             |
|----------|-----------------|--------------|-----------------------|
|   type   |  string / array | All animType | 提供: `across`, `vertical`, `acrossOverlay`, `verticalOverlay`, `gridBar`, `grid`; <br/>`grid` 和 `gridBar` 单个块状动画时间是 `duration`; <br/>自定义动画效果，[详细参考](http://react-component.github.io/banner-anim/examples/customAnimType.html) |
| duration |      number     |      450     | 动画过场时间  |
| delay    |      number     |       0      |   过场的延时  |
| ease     |      string     | `easeInOutQuad` | 缓动            |
| initShow |      number     |    0         |  开始显示          |
| arrow    |      boolean    |      `true`    |  默认箭头，如果 `Arrow` 在 children 里，此项无效 |
| thumb    |      boolean    |      `true`    |  默认缩略图（点），如果 `Thumb` 在 children 里，此项无效 |
| autoPlay |      boolean    |      `false`  | 自动播放 |
| autoPlaySpeed |  number    |    5000       | 自动播放的时间 |
| onChange |     func        |    -          |  幻灯片变换时调用，返回 onChange(`before` 或 `after`, 当前显示的位置) |
| prefixCls |    string      |   -           |  自定义样式 |
| children |  react.component|   -           | `Element`(必须), `Arrow`, `Thumb` |
| sync      |   boolean      |   false       | 传递到 Element. |  
| dragPlay  |   boolean      |   true        | 在 banner 上拖动播放下一个或上一个。默认开启 |
| component | string         |      `div`    | 组件标签  |

### Element 

> 子级元素为 `TweenOne` 时， animation 里的 type 设为 `from`，请用返向播放.

|参数        |类型             |默认     |详细             |
|----------|-----------------|--------------|-----------------------|
| key      |     string      |      -       |  必须                 |
| leaveChildHide | boolean |  false   | 子级出场时是否需要切换的动画，替换原来的 `hideProps`。 | 
| sync      |   boolean      |   false       | 子级动画进入与滑动动画是否同步。默认 false 为滑动完成后再做子级动画 |  
| prefixCls |     string      |   -           |  自定义样式 |
| followParallax | object   |  null        | 跟随鼠标上下或左右晃动效果 |
| component | string         |      `div`    | 组件标签  |
| componentProps | object | {} | 组件的 props |

#### followParallax is object
|参数        |类型             |默认     |详细             |
|----------|-----------------|--------------|-----------------------|
| delay    |   number        |  null        | 必须，在单个区块进入后延迟开启鼠标效果，比如子级是 tween-one 时，需要等 tween-one 的动画结束后再执行鼠标效果，不然两者会冲突 |
| data     | array           |  null        | 详细参数查看下面 [followParallax data](#followParallax-data), 详细 Demo 查看 [鼠标跟随例子](http://react-component.github.io/banner-anim/examples/followMouse.html) |
| ease | string        | `easeInOutQuad`         |  鼠标移动时, 元素缓动效果。[参数名称参考](http://easings.net/zh-cn)  |
| minMove | number     | 0.08        | 区域为 0 - 0.1, `easeInOutQuad(startMousePosition, minMove, 1, currentMousePosition)`; 在有缓动时，鼠标移动时，最小移动的值，如果为 0，鼠标移动时不会移动，移动结束后触发动画。 |

#### followParallax data

> data = [{ id, value, type, bgPosition }]

|参数        |类型             |默认     |详细             |
|----------|-------------|--------------|-----------------------|
| id       | string     |  -     | 子级 id.   |
| value    | number     |  -      | 晃动时的值，如果值为 20, 那左右晃动的值为：最左边 -20, 最右边 20。 | 
| type     | string    |  -     |  style 里的名称或 `x` ,`y`, `x` = `translateX`, `y` = `translateY`. |
| bgPosition | string  | - | 初始背景图片的坐标，只在 type 为 backgroundPosition 时生效，默认为 50%.  |


### Element.BgElement

|参数        |类型             |默认     |详细             |
|----------|-----------------|--------------|-----------------------|
| id      |     string      |      -       |  必须( 0.4.0 以后不再用 key, 直接用id，可控制子级 )   |
| className |     string      |   -           |  样式 |
| scrollParallax | object   |  null        | { y: 100 }, 向下滚动时, 元素出顶部的到达值。 |
| videoResize | boolean         |      `true`    | 如果子级元素为 video 时，自动响应窗口大小。  |
| component | React.Element/string          |      `div`    | 组件标签  |
| componentProps | object | {} | 组件的 props |

### Arrow or Thumb

|参数        |类型             |默认     |详细             |
|----------|-----------------|--------------|-----------------------|
| key      |     string      |      -       |  必须                 |
| prefixCls |     string      |   -           |  自定义样式 |
