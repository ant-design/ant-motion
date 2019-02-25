---
order: 4
vertical: true
title: 
  zh-CN: 页面滚动动画
  en-US: ScrollAnim
---

通过简单的配置，对页面里的元素添加随滚动条滚动的动画。具体参数请参见 [API](/api/scroll-anim)

## 何时使用

- 在页面里，滚动到每个小区块时需要播放动画时，增加页面的灵动。
- 随滚动条增加视差感时。

<style>
.queue-anim-demo{
  float: left;
  margin: 0 5px 0 0!important;
}
.code-box-shape{
  position: relative !important;
}
</style>

[更多 Demo](http://react-component.github.io/scroll-anim/) 

---


## 怎么使用
### 安装
```bash
$ npm install rc-scroll-anim --save
```
### 本组件提供
- **Element:** 基本滚动事件的元素，没有动画；
- **OverPack:** 滚动到区块播放动画
- **Parallax:** 随滚动播放动画
- **Link:** 锚点定位
- **scrollScreen:** 启动整屏滚动，提供init()与unMount()方法

### 使用

#### Element
```jsx
import { Element } from 'rc-scroll-anim';
React.render(<div>
  <Element className="pack-page">
    <div>demo</div>
  </Element>
</div>, mountNode);
```

#### OverPack

```jsx
import ScrollAnim from 'rc-scroll-anim';
const ScrollOverPack = ScrollAnim.OverPack;
ReactDOM.render((<ScrollOverPack hideProps={{ tweenOne: { reverse: true }}}>
  <QueueAnim key='queueAnim'>
    <div key='a'>依次进入</div>
    <div key='b'>依次进入</div>
    <div key='b'>依次进入</div>
  </QueueAnim>
  <TweenOne key='tweenOne' vars={{ x:100 }} >单元素动画</TweenOne>
  <Animate key='rc-animate' transitionName="fade"
    transitionAppear>
    rc-animate 示例
  </Animate>
</ScrollOverPack>), mountNode);
```

#### Parallax

```jsx
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
React.render((<ScrollParallax vars={{x:100}}>Parallax 示例</ScrollParallax>), mountNode);
```

#### Link 
```jsx
import { Link } from 'rc-scroll-anim';
React.render(<div>
  <div className="nav">
    <Link className="nav-list" to="page0">nav0</Link>
    <Link className="nav-list" to="page1">nav1</Link>
  </div>
  <div className="pack-page" id="page0">page0</div>
  <div className="pack-page" id="page1">page1</div>
</div>, mountNode);
```

#### scrollScreen

```jsx 
import { scrollScreen } from 'rc-scroll-anim';
scrollScreen.init();
scrollScreen.unMount();
```

> Link 等更多例子 [查看更多 demo](http://react-component.github.io/scroll-anim/)

## API

## Element 说明

> `Element` 或 `OverPack` 高度没有达到 playScale 的播放点时将不会被渲染，建议在最后一屏时设置最小高度。

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| component | React.Element/string |  div  | 组件标签            |
| targetId  | string   |  null | 自定义滚动事件的目标， [demo](http://react-component.github.io/scroll-anim/examples/target.html) |
| playScale |  number / array  |  `0.5` | 到达窗口指定区域开始播放， 0.5 将转换成 \[0.5, 0.5\]（[`bottom-enter`, `top-leave`]）`bottom-enter` 是进入窗口的百分比, 0.5 为窗口从低部往上计算的 50%, `top-leave` 是离开窗口的百分比, 0.5 为窗口顶部往上计算的 50%,  `top-leave` 必须大于等于 `bottom-enter`。 <br /> 注：元素高度必须能达到播放的高度，不是子级高度，必需为当前元素高度。|
| replay  |  boolean | false | 每次显示当前时是否都触发事件, `false` 为只上往下滚时才触发事件 |
| onChange | func    | null  | 变更回调; callback({ mode, id }); mode 为 `enter` 或 `leave` 两种状态 |
| onScroll | func     | null | 滚动回调; callback({ domEvent, scrollTop, offsetTop, showHeight, id}); |
| location | string   | null  | 定位到父级元素, 必须为 id； |
| componentProps | object | - | 如果 `component` 为组件类型，组件的 props; |

### OverPack 说明

> `OverPack` 继承 `Element`, `component`, `componentProps`,`playScale`, `replay`, `onChange`, `onScroll` 参考 `Element`

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| always  | boolean | true | 重复播放，如为 false 将只进入一遍，不再触发出场效果 |
| appear  |  boolean  | true  |  默认拥有出场动画，`false` 为出场不做动画直接显示。|

## Parallax 说明
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| animation | object / array | null | 组件动画数据 |
| location | string | null | 定位到父级元素，以父级元素的位置为准，元素的 id 值， 必需是唯一的 |
| always | boolean | true | 同上，重复播放 |
| targetId | string | null | 参考 `Element` 的 `targetId` |
| component | React.Element/string | div | 同上 |
| componentProps | object | - | 同上 |

#### animation 为 object 时
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| playScale | array | `[0, 1]` | 播放的区域段，第一个为开始的窗口百分比，第二个为结束的窗口百分比，当第一个数为0时，将从窗口底部开始播放;<br /> timeline 时, 将默认加上前面的播放比例, 如: <br />`[{ playScale: [0, 0.2] }, { playScale: [0, 0.8] }]`, 后面的0.8值相当于1, 在屏幕顶部结束 |
| ease    | string  | `easeInQutQuad` | 动画缓动参数 |
| onUpdate | function | - | 更新时回调, 返回 ease 的百分比 |
| onStart | function | - | 上往下滚动开始时回调 `playScale[0]`  |
| onComplete | function | - | 上往下滚动到达回调 `playScale[1]` |
| onStartBack | function | - | 从下往上滚动底部开始时回调 `playScale[1]`  |
| onCompleteBack | function | - | 从下往上滚动到达顶部回调 `playScale[0]` |

## Link 说明

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| to | string | null | 必需; 指定元素到达顶部, id 值 |
| toHash | boolean  | false  | 默认将 `to` 里的值添加到 url 链接; |
| duration | number | 450 | 滚动动画的时间 |
| ease |  string | `easeInQutQuad` | 动画缓动参数 |
| active | string | `active` | 选中时的样式 |
| showHeightActive | sting / number / array | `50%` | 滚动到距顶部还有`50%`的时, `link` 标签被选中同时附于 `active` 值; <br/> 在出场时是还有 `50%` 时 `link` 标签移除 `active` 值; 如果为Array时，第一个为进场，第二个为出场 |
| toShowHeight | boolean | false | 点击时是否滚动到 `showHeightActive` 的值上 |
| offsetTop    | number  | 0     | 到达元素距顶部位置 |
| targetId | string | null | 参考 `Element` 的 `targetId` |
| onFocus | function | - | 选中时的回调, 返回参数 { target, to } |
| onBlur | function | - |失去焦点时回调, 返回参数 { target, to } |
| component |string | div | 同上 |
| componentProps | object | - | 同上 |

## scrollScreen 说明

> scrollScreen.init(vars);

> scrollScreen.unMount();


#### init
- 功能: 滚动一屏窗口

#### vars 
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| duration  | number         | 450     | 滚动一段的时间   |
| ease      | string         | `easeInOutQuad` | 动画缓动 |
| docHeight | number         | null    | 自定义页面高度 |
| loop      | boolean        | false   | 前后相接循环  |
| scrollInterval | number    | 1000    | 滚动事件间隔时间 |

#### unMount
- 功能: 清除一屏滚动效果

