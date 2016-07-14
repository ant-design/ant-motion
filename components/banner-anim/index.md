---
category: Components
order: 4
chinese: Banner动画
english: BannerAnim
---

通过简单的配置, 就能让你的 banner 动起来。

---

## 何时使用

- 在首页里的首屏展示信息时，需要将 banner 里的元素做动效时。


## 怎么使用
### 安装
```
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
> [查看更多 demo](http://react-component.github.io/banner-anim/)

## API

### BannerAnim

|参数        |类型             |默认     |详细             |
|----------|-----------------|--------------|-----------------------|
|   type   |  string / array | All animType | 提供: `across`, `vertical`, `acrossOverlay`, `verticalOverlay`, `gridBar`, `grid`; `grid` 和 `gridBar` 单个块状动画时间是 `duration`; 可自行添加动画效果，如 `const animType = BannerAnim.animType; animType.xxx=function(elem, type, direction, animData, elemOffset){return react.Component}` elem: react.Component 当前进出场的元素, type: `enter` 或 `leave`, direction: `next` 或 `prev`, animData: 回调之类的，带上就行了, elemOffset: 当前元素是宽高  |
| duration |      number     |      450     | 动画过场时间  |
| ease     |      string     | `easeInOutQuad` | 缓动            |
| initShow |      number     |    0         |  开始显示          |
| arrow    |      boolean    |      `true`    |  默认箭头，如果 `Arrow` 在 children 里，此项无效 |
| thumb    |      boolean    |      `true`    |  默认缩略图（点），如果 `Thumb` 在 children 里，此项无效 |
| autoPlay |      boolean    |      `false`  | 自动播放 |
| autoPlaySpeed |  number    |    5000       | 自动播放的时间 |
| onChange |     func        |    -          |  幻灯片变换时调用，返回 onChange(`before` 或 `after`, 当前显示的位置) |
| bgParallaxAll |  object    |   null        |  同 `Element` 里的 `bgParallax`, 这个设置后所有的子级都跟滚动条做视差 |
| prefixCls |    string      |   -           |  自定义样式 |
| children |  react.component|   -           | `Element`(必须), `Arrow`, `Thumb` |

### Element 

> 子级元素为 `TweenOne` 时， animation 里的 type 设为 `from`，请用返向播放.

|参数        |类型             |默认     |详细             |
|----------|-----------------|--------------|-----------------------|
| key      |     string      |      -       |  必须                 |
| prefixCls |     string      |   -           |  自定义样式 |
| bg      |     string      |    null      |  图片或视频的地址          |
| bgType  |      string     |    `img`     |  设置 bg 的属性是视频或图片，如果是视频，格式: `video/mp4`    |
| bgParallax |  object      |   null       |  如: { y: [0, 300] }, 数组里的第一个参数为滚动条在顶部时 bg 的位置，第二个为当前 banner 到顶部并看不见了的时候的位置 |
| bgPrefixCls | string      |   -          | bg 的自定义样式 |
| followParallax | object   |  null        | 跟随鼠标上下或左右晃动效果 |

#### followParallax is object
|参数        |类型             |默认     |详细             |
|----------|-----------------|--------------|-----------------------|
| delay    |   number        |  null        | 必须，在单个区块进入后延迟开启鼠标效果，比如子级是 tween-one 时，需要等 tween-one 的动画结束后再执行鼠标效果，不然两者会冲突 |
| data     | array           |  null        | 数组里的内容: { key: string, scale: number, type: array or string, bgPosition: string }; key: 子级的 key, 注：banner bg 的 key 是 `bgElem`, scale: 晃动时的值，banner 的宽或高的一半的比例，如 banner 的宽是 400， scale 为 0.2, 为 400 / 2 * 0.2 那区域值为 -40 -- 40, type: style 里的样式 或 `x` `y`, bgPosition: 初始背景图片的坐标，只在 type 为 backgroundPosition 时生效，默认为 50%, 详细查看 鼠标跟随例子 |
| ease | string        | null         | 如果是 `true`, 缓动效果是 `easeInOutQuad`, 鼠标移动时, 元素是否加入缓动效果。  |
| minMove | number     | null        | 区域为 0 - 1, easeInOutQuad(startMousePosition, minMove, 1, currentMousePosition); 在有缓动时，鼠标移动时，最小移动的值，如果为 0，鼠标移动时不会移动，移动结束后触发动画， 最大值为 1。 |


### Arrow or Thumb

|参数        |类型             |默认     |详细             |
|----------|-----------------|--------------|-----------------------|
| key      |     string      |      -       |  必须                 |
| prefixCls |     string      |   -           |  自定义样式 |
