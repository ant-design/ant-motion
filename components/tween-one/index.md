---
category: Components
chinese: 单元素动画
order: 0
english: TweenOne
---

这是个对单个元素标签做动效的组件，可以执行所有样式动画，包括 transform3d，模糊等效果，还可以完成贝塞尔曲线动画，具体参数请参见 [API](/api/tween-one)

## 何时使用

- 在单个元素需要过渡到另外一点时使用

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
var TweenOne = require('rc-tween-one');
var React = require('react');
var TweenOneGroup = TweenOne.TweenOneGroup;
React.render(<TweenOneGroup>
  <div key="0">demo</div>
</TweenOneGroup>, container);
```


## API

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| animation | object / array | null | 需要执行动画的参数 |
| paused |	boolean | 	false | 暂停动画 |
| reverse | boolean | false | 倒放动画 |
| reverseDelay | number       | 0       | 开始倒放时的延时 |
| moment  | number |  null | 设置当前时间上的时间，设置完后设回 null |
| onChange | function | null | 全局变动回调 |
| attr       | string         | `style` | `style` or `attr`, `attr` 为替换标签上的属性(attribute). SvgMorphPlugin 必须为 `attr`.  |
| resetStyleBool | boolean | false | 更新 animation 数据时，是否重置初始样式。  |
| updateReStart | boolean | true | 每次更新 animation 数据时，是否重新开始动画。 |
| component | React.Element/String  | `div` | 需要替换的标签 |

### animation

> 基本动画参数请查看[动画术语](/language/animate-term);

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| type    |  string    |  `to`   | 播放类型，`to` 为正常播放， `from` 反向播放 |
| duration | number    | 450    | 动画时间 |
| delay   | number   |  0   |  动画延时  |
| repeat  | number   | 0    | 重复次数，-1 为无限重复播放 |
| repeatDelay | number | 0 | 每次重复播放开始时延时 |
| appearTo   | number         | null    | 添加到时间轴的某个时间段 |
| yoyo   | boolean | false | 重复时执行返回动画 |
| ease   | string ／ func | `easeInOutQuad` | 缓动参数. [参数名称参考](http://easings.net/zh-cn); function: TweenOne.easing.path(path, param) 详细如下 |

> `animation` 等于 `array` 时为时间轴动画

### TweenOne.easing.path

```jsx

const path = 'M0,100 C30,60 0,20 50,50 C70,70 60,0 100,0';
const ease = Tween.easing.path(path);

```
#### path
SVG 路径 path 里的 d 的值;
#### param
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| rect    | number     | 100    | 绘制缓动路径的正方形大小。 |
| lengthPixel | number | 1500   | 整条路径分为1500个像素点来取点 |

## SvgDrawPlugin

SVGDraw = string or number;

svg 线性动画

``` jsx
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
TweenOne.plugins.push(SvgDrawPlugin);
<TweenOne animation={{ SVGDraw: 0 }} />
```
`{ SVGDraw: 30 }` or `{ SVGDraw: 'start end' }` 值可以为 `%`；

## SvgMorphPlugin

svg 路径形变动画，如 `{ d: 'M0 0L100 100', attr: 'attr' }`

> 注: SvgMorphPlugin 必须设定 `attr: 'attr'`

``` jsx
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
TweenOne.plugins.push(SvgMorphPlugin);
<TweenOne animation={{ d: 'M0 0L100 100', attr: 'attr' }} />
```

## PathPlugin

``` jsx
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
TweenOne.plugins.push(PathPlugin);
<TweenOne animation={{ path: 'M0,100 C30,60 0,20 50,50 C70,70 60,0 100,0' }} />
或
<TweenOne animation={{ path: { x: path, y: path, rotate: path } }} />
```

path: string or object;

string:  默认带 x, y, rotate;

object: 可自定义所需的 x, y, rotate.



## BezierPlugin

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
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| type   | string | `soft` | 类型 `thru` `soft` `quadratic` `cubic` |
| autoRotate | boolean | false | 跟随旋转 |
| vars   | array  | null  |  贝赛尔点的位置，如 `{ x:100, y:100}` |

>贝赛尔曲线 API 参照 [gsap BezierPlugin](http://greensock.com/docs/#/HTML5/GSAP/Plugins/BezierPlugin/)

## TweenOneGroup API

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| appear  | boolean    | true    | 元素是否有刚开始的进场动画 |
| enter   | object / array / func | { x: 30, opacity: 0, type: 'from' } | 进场的 tween-one 数据，如果是数组是 tween-one 的 timeline。 func 参照 queue-anim, callbac({ key, index }) |
| leave   | object / array / func | { x: 30, opacity: 0 } | 出场时的数据，同上 |
| onEnd   | func       | -       | 每个动画结束后回调 |
| animatingClassName | array | `['tween-one-entering', 'tween-one-leaving']` | 进出场的样式，如果是组件形式，需把 className 带到你的组件里 |
| resetStyleBool | boolean | true | 每次动画时是否强制重置样式 |
| component | React.Element/String | div | 需要替换的标签 |

