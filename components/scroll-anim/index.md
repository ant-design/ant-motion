---
category: Components
chinese: 页面滚动动画
order: 3
english: ScrollAnim
vertical: true
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
- OverPack 滚动到点直接播放动画
- Parallax 随滚动播放动画
- Link 锚点定位
- Element 不需要动画，但需要锚点定位到此，请用这个
- scrollScreen 启动整屏滚动，提供init()与unMount()方法

### 使用

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
    rc-animate示例
  </Animate>
</ScrollOverPack>), mountNode);
```

#### Parallax

```jsx
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
React.render((<ScrollParallax vars={{x:100}}>Parallax示例</ScrollParallax>), mountNode);
```

#### Link Element
```jsx
import { Link, Element } from 'rc-scroll-anim';
React.render(<div>
  <div className="nav">
    <Link className="nav-list" to="page0">nav0</Link>
    <Link className="nav-list" to="page1">nav1</Link>
  </div>
  <Element className="pack-page" id="page0">示例</Element>
  <Element className="pack-page" id="page1">示例</Element>
</div>, mountNode);
```

#### scrollScreen

```jsx 
import { scrollScreen } from 'rc-scroll-anim';
scrollScreen.init();
scrollScreen.unMount();
```

> Link 例子等更多例子 [查看更多 demo](http://react-component.github.io/scroll-anim/)

## API

## Element 说明

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| id | string         | null    | 定位需要的 id，`parallax` 的 `location` 或 `link` 的 `to`, 都需要以此元素做定位 |
| component | string         |  div  | 组件标签            |
| playScale |  number / array  |  `0.5` | 要在屏幕哪个区域开始播放， 0.5 为屏幕中间, 如果为 array 时 replay 为 true, [bottom-enter, top-leave] enter为进入是的播放点， topLeave 为出屏的比例(当前显示屏的上面一屏)的百分点。topLeave 必须大于等于 bottomEnter。 |
| onChange | func    | null  | 变更回调; callback({ mode, scrollName }); mode 为 `enter` 或 `leave` 两种状态 |
| location | string   | null  | 定位到父级元素, 必须为 id； |


### OverPack 说明

> `OverPack` 继承 `Element`, `component`,`playScale`, `onChange` 参考 `Element`

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| always  | boolean | true | 重复播放，如为 false 将只进入一遍，不再触发出场效果 |
| replay  |  boolean | false | 每次显示当前时是否都要动画, `false` 为只上往下滚时才有动画 |
| hideProps | object | null  | v0.3.0 将 children 里的 hideProps 迁到这里，将 children 里通过切换 children 来做动画的做为默认(原来的：{ children: null })。</br>如果是 `rc-tween-one` 通过倒放来切换动画(Group为前一种方法), 需要在此设置： { userKey: { reverse: true }} userKey 为你在标签上的 key。 |

## Parallax 说明
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| animation | object / array | null | 组件动画数据 |
| location | string | null | 定位到父级元素，以父级元素的位置为准，`Element` 的 `scrollName` 值， 必需是唯一的 |
| always | boolean | true | 同上，重复播放 |
| component | string | div | 同上 |

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
| to | string | null | 必需; 指定元素到达顶部; `Element` `Parallax` `OverPack`的 id 值 |
| toHash | boolean  | true  | 默认将 `to` 里的值添加到 url 链接; |
| duration | number | 450 | 滚动动画的时间 |
| ease |  string | `easeInQutQuad` | 动画缓动参数 |
| active | string | `active` | 选中时的样式 |
| showHeightActive | sting / number / array | `50%` | 滚动到距顶部还有`50%`的时, `link` 标签被选中同时附于 `active` 值; <br/> 在出场时是还有 `50%` 时 `link` 标签移除 `active` 值; 如果为Array时，第一个为进场，第二个为出场 |
| toShowHeight | boolean | false | 点击时是否滚动到 `showHeightActive` 的值上 |
| offsetTop    | number  | 0     | 到达元素距顶部位置 |
| onFocus | function | - | 选中时的回调, 返回参数 { target, to } |
| onBlur | function | - |失去焦点时回调, 返回参数 { target, to } |
| onAsynchronousAddEvent | func | -  | 异步添加 `scroll` 事件接口, callback(func); [详细参考](http://react-component.github.io/scroll-anim/examples/linkAsynchronous.html)
| component |string | div | 同上 |

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
| docHeight | number         | null    | 如果设置了 body 或 html 的 height: 100% 时, 页面高度无法获取, 需要自已定义; 为 null 时用的是html的高度 |
| loop      | boolean        | false   | 前后相接循环  |
| scrollInterval | number    | 1000    | 滚动事件间隔时间 |

#### unMount
- 功能: 清除一屏滚动效果

