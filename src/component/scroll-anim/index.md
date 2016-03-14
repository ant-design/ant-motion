# ScrollAnim

- category: Components
- chinese: 页面滚动动画
- order: 2

---

通过简单的配置，对页面里的元素添加随滚动条滚动的动画。

## 何时使用

- 在页面里，滚动到每个小区块时需要播放动画时，增加页面的灵动。
- 随滚动条增加视差感时。

## 怎么使用
### 安装
```
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
ReactDOM.render(<ScrollOverPack>
  <QueueAnim key='queueAnim' hideProps={{ child: null }}>
    <div key='a'>依次进入</div>
    <div key='b'>依次进入</div>
    <div key='b'>依次进入</div>
  </QueueAnim>
  <TweenOne key='tweenOne' vars={{ x:100 }} hideProps={{ reverse: true }}>单元素动画</TweenOne>
  <Animate key='rc-animate' transitionName="fade"
    transitionAppear hideProps={{ child: null }}>
    rc-animate示例
  </Animate>
</ScrollOverPack>, mountNode);
```

#### Parallax

```jsx
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
React.render(<ScrollParallax vars={{x:100}}>Parallax示例</ScrollPallax>, mountNode);
```

#### Link Element
```jsx
import { Link, Element } from 'rc-scroll-anim';
React.render(<div>
  <div className="nav">
    <Link className="nav-list" location="page0">nav0</Link>
    <Link className="nav-list" location="page1">nav1</Link>
  </div>
  <Element className="pack-page" scrollName="page0">示例</Element>
  <Element className="pack-page" scrollName="page1">示例</Element>
</div>, mountNode);
```

#### scrollScreen

```jsx 
import { scrollScreen } from 'rc-scroll-anim';
scrollScreen.init();
scrollScreen.unMount();
```

> Link 例子等更多例子 <a href="http://react-component.github.io/scroll-anim/" target="_blank">查看更多 demo</a>

## API
### OverPack 说明
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
|  playScale |  number  |  `0.5` | 要在屏幕哪个区域开始播放， 0.5 为屏幕中间 |
| always  | boolean | true | 重复播放，如为 false 将只进入一遍，不再触发出场效果 |
| scrollName | string | null | 需要定位的名称，parallax的 location 或 link 的 location, 都需要以此元素做定位 |
| replay  |  boolean | false | 每次显示当前时是否都要动画, `false` 为只下往上滚时才有动画 |
| component | string | div | 组件标签 |

### Parallax 说明
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| animation | object / array | null | 组件动画数据 |
| location | string | null | 定位到父级元素，以父级元素的位置为准，`Element` 的 `scrollName` 值， 必需是唯一的 |
| always | boolean | true | 同上，重复播放 |
| scrollName | string | null | 需要定位的名称，parallax的 location 或 link 的 location, 都需要以此元素做定位 |
| component | string | div | 同上 |

#### animation 为 object 时
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| playScale | array | `[0, 1]` | 播放的区域段，第一个为开始的窗口百分比，第二个为结束的窗口百分比，当第一个数为0时，将从窗口底部开始播放;<br /> timeline 时, 将默认加上前面的播放比例, 如: <br />`[{ playScale: [0, 0.2] }, { playScale: [0, 0.8] }]`, 后面的0.8值相当于1, 在屏幕顶部结束 |
| ease    | string  | `easeInQutQuad` | 动画缓动参数 |
| onUpdate | function | - | 更新时回调, 返回 ease 的百分比 |
| onStart | function | - | 开始时回调 `playScale[0]`  |
| onComplete | function | - | 到达回调 `playScale[1]` |

### Link 说明

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| location | string | null | 必需; 指定元素到达顶部; `Element` `Parallax` `OverPack`的 scrollName 值, 元素必需是唯一 |
| duration | number | 450 | 滚动动画的时间 |
| ease |  string | `easeInQutQuad` | 动画缓动参数 |
| active | string | `active` | 选中时的样式 |
| showHeightActive | sting / number / array | 0 |如设定了值，滚动到距顶部还有指定值的时添加 `active` <br />`link` 标签被附于 `active` 值; 在出场时是还有指定值时 <br/>`link` 标签移除 `active` 值; 如果为Array时，第一个为进场，第二个为出场 |
| toShowHeight | boolean | false | 点击时是否滚动到 `showHeightActive` 的值上 |
| onFocus | function | - | 选中时的回调, 返回参数 { target, to } |
| onBlur | function | - |失去焦点时回调, 返回参数 { target, to } |
| component |string | div | 同上 |

### Element 说明

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| scrollName | string         | null    | 需要定位的名称，`parallax` 的 location 或 `link` 的 location, 都需要以此元素做定位 |
| component | string         |  div  | 同上            |

### scrollScreen 说明
#### .init(vars)
- 功能: 滚动一屏窗口

#### vars 
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| duration  | number         | 450     | 滚动一段的时间   |
| ease      | string         | `easeInOutQuad` | 动画缓动 |
| docHeight | number         | null    | 如果设置了 body 或 html 的 height: 100% 时, 页面高度无法获取, 需要自已定义; 为 null 时用的是html的高度 |
| loop      | boolean        | false   | 前后相接循环  |
| scrollInterval | number    | 1000    | 滚动事件间隔时间 |

#### .unMount()
- 功能: 清除一屏滚动效果

<style>
.code-box-demo .queue-anim-leaving{
  position: relative !important;
}
.queue-anim-demo{
  float: left;
  margin: 0 5px 0 0;
}
</style>
