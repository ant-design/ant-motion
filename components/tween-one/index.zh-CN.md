---
order: 0
title: 
  zh-CN: 单元素动画
  en-US: TweenOne

---

这是个对单个元素标签做动效的组件，可以执行所有样式和标签上的属性动画，包括 transform3d，模糊等效果，还可以完成贝塞尔曲线动画，具体参数请参见 [API](/api/tween-one)

## 何时使用

- 元素在样式发生变化时。
- 元素在某个时间段完成不同的时间轴动画时。
- 数字发生变化时。
- SVG 线性生长或形变时。
- 元素需要在指定的路径引导上动画时。

---

## 怎么使用

### 安装

```bash
$ npm install rc-tween-one --save
```
### 使用

```jsx
import TweenOne from 'rc-tween-one';
ReactDOM.render(<TweenOne animation={{ x:100 }} />, mountNode);
```

### TweenOneGroup
```js
import TweenOne from 'rc-tween-one';
var TweenOneGroup = TweenOne.TweenOneGroup;
React.render(<TweenOneGroup>
  <div key="0">demo</div>
</TweenOneGroup>, container);
```


## API

| 参数           | 类型                 | 默认    | 说明                                                                                   |
| -------------- | -------------------- | ------- | -------------------------------------------------------------------------------------- |
| animation      | object / array       | null    | 需要执行动画的参数                                                                     |
| paused         | boolean              | false   | 暂停动画                                                                               |
| reverse        | boolean              | false   | 倒放动画                                                                               |
| reverseDelay   | number               | 0       | 开始倒放时的延时                                                                       |
| repeat         | number               | 0       | 所有 animation 里的动画 (时间轴) 循环                                                  |
| yoyo           | boolean              | false   | animation 里的动画在第一次重复时执行返回动画, 如抽屉开关。                             |
| onChange       | function             | null    | 全局变动回调                                                                           |
| moment         | number               | null    | 设置当前时间上的时间，设置完后设回 null                                                |
| attr           | string               | `style` | `style` or `attr`, `attr` 为替换标签上的属性(attribute). SvgMorphPlugin 必须为 `attr`. |
| resetStyle     | boolean              | false   | 更新 animation 数据时，是否重置初始样式。                                              |
| component      | React.Element/String | `div`   | 需要替换的标签                                                                         |
| componentProps | object               | null    | component 如果是组件，component 组件的 props 写在此处.                                 |

### animation

> 基本动画参数请查看[动画术语](/language/animate-term);

**不能同时使用 reverse 和 repeat:-1。**

| 参数        | 类型               | 默认            | 说明                                             |
| ----------- | ------------------ | --------------- | ---------------------------------------------- |
| type        | string             | `to`            | 播放类型，`to` 为正常播放， `from` 反向播放, `set` 相同于 duration 等于 0, 直接到值. |
| duration    | number             | 450             | 动画时间|
| delay       | number             | 0               | 动画延时|
| repeat      | number             | 0               | 重复次数，-1 为无限重复播放|
| repeatDelay | number             | 0               | 每次重复播放开始时延时 |
| appearTo    | number             | null            | 添加到时间轴的某个时间段|
| yoyo        | boolean            | false           | 重复时执行返回动画，如抽屉开关。|
| ease        | string ／ function | `easeInOutQuad` | 缓动参数. [参数名称参考](http://easings.net/zh-cn); <br/>function: TweenOne.easing.path(path, param) 详细如下 |
| onStart     | function           | null            | 动画开始时回调, callback(e), e: { index, target }|
| onUpdate    | function           | null            | 动画更新时回调, callback(e), e: { index, target, ratio }|
| onComplete  | function           | null            | 动画结束时回调, callback(e), e: { index, target }|
| onRepeat    | function           | null            | 每次动画重复时回调, callback(e), e: { index, target }|

- 插件参数参考下面插件的写法。 如 bezier, SVGDraw, path, Children 等。 

> `animation` 等于 `array` 时为时间轴动画，ref: `animation={[{ x: 10 }, { y: 10 }]}`;


### TweenOne.easing.path

```jsx

const path = 'M0,100 C30,60 0,20 50,50 C70,70 60,0 100,0';
const ease = TweenOne.easing.path(path);

```
#### path
SVG 路径 path 里的 d 的值;
#### param
| 参数        | 类型   | 默认 | 说明                           |
| ----------- | ------ | ---- | ------------------------------ |
| rect        | number | 100  | 绘制缓动路径的正方形大小。     |
| lengthPixel | number | 1500 | 整条路径分为1500个像素点来取点 |

## 相关插件

### SvgDrawPlugin

SVGDraw = string or number;

svg 线性动画

``` jsx
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
TweenOne.plugins.push(SvgDrawPlugin);
<svg>
  <TweenOne animation={{ SVGDraw: 0 }} component="path"/>
</svg>
```
`{ SVGDraw: 30 }` or `{ SVGDraw: 'start end' }` 值可以为 `%`；

### SvgMorphPlugin

svg 路径形变动画，如 `{ d: 'M0 0L100 100' }`

> 注: SvgMorphPlugin 必须设定 `attr: 'attr'`

``` jsx
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
TweenOne.plugins.push(SvgMorphPlugin);
<svg>
  <TweenOne animation={{ d: 'M0 0L100 100' }} attr="attr" component="path"/>
</svg>
```

### PathPlugin

``` jsx
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
TweenOne.plugins.push(PathPlugin);
const path = 'M0,100 C30,60 0,20 50,50 C70,70 60,0 100,0';
  <TweenOne 
    animation={{ path }}   
    component="path" 
  />
  或
  <TweenOne 
    animation={{ path: { x: path, y: path, rotate: path } }} 
    component="path" 
  />
```

path: string or object;

string:  默认带 x, y, rotate;

object: 可自定义所需的 x, y, rotate.

### BezierPlugin

```jsx
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);
<TweenOne animation={{
  bezier: { 
    type: 'soft', 
    autoRotate: true,
    vars: [
      { x: 150, y: 150 },
      { x: 300, y: 0 },
      { x: 450, y: 150 },
      { x: 600, y: 0 },
    ],
  }}}
/>
```
| 参数       | 类型    | 默认   | 说明                                   |
| ---------- | ------- | ------ | -------------------------------------- |
| type       | string  | `soft` | 类型 `thru` `soft` `quadratic` `cubic` |
| autoRotate | boolean | false  | 跟随旋转                               |
| vars       | array   | null   | 贝赛尔点的位置，如 `{ x:100, y:100}`   |

>贝赛尔曲线 API 参照 [gsap BezierPlugin](http://greensock.com/docs/#/HTML5/GSAP/Plugins/BezierPlugin/)

### ChildrenPlugin

```jsx
import ChildrenPlugin from 'rc-tween-one/lib/plugin/ChildrenPlugin';
TweenOne.plugins.push(ChildrenPlugin);
<TweenOne animation={{
  Children: { value: 10000, floatLength: 2, formatMoney: true }
}} />
```
| 参数        | 类型                            | 默认  | 说明                                         |
| ----------- | ------------------------------- | ----- | -------------------------------------------- |
| value       | number                          | null  | children 要变化的值。                        |
| floatLength | number                          | null  | 浮点（小数点后）的所取长度                   |
| formatMoney | boolean / { thousand, decimal } | false | 将数值格式化为钱符，可自定义钱符中间的标点。 |

#### formatMoney = { thousand, decimal }
| 参数     | 类型   | 默认 | 说明         |
| -------- | ------ | ---- | ------------ |
| thousand | string | `,`  | 百位的符号   |
| decimal  | string | `.`  | 小数点的符号 |

## TweenOneGroup API

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| appear  | boolean    | true    | 元素是否有刚开始的进场动画 |
| enter   | object / array / func | { x: 30, opacity: 0, type: 'from' } | 进场的 tween-one 数据，如果是数组是 tween-one 的 timeline。 func 参照 queue-anim, callbac({ key, index }) |
| leave   | object / array / func | { x: 30, opacity: 0 } | 出场时的数据，同上 |
| onEnd   | func       | -       | 每个动画结束后回调 |
| animatingClassName | array | `['tween-one-entering', 'tween-one-leaving']` | 进出场的样式，如果是组件形式，需把 className 带到你的组件里 |
| resetStyle  | boolean  | true   | TweenOne 的 `resetStyle`, 切换动画时重置初始样式。   |
| exclusive | boolean | false | 是否允许在切换时立即执行新的动画。 `enter => leave`：立即执行离开动画 |
| component | React.Element/String | div | 需要替换的标签 |
