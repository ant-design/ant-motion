---
category: Components
chinese: 单元素动画
order: 0
english: TweenOne
---



这是个对单个元素标签做动效的组件，可以执行所有样式动画，包括3d，模糊等效果，还可以完成贝塞尔曲线动画。

## 何时使用

- 在单个元素需要过渡到另外一点时使用

## 怎么使用
### 安装
```js
$ npm install rc-tween-one --save
```
### 使用
```jsx
import TweenOne from 'rc-tween-one';
ReactDOM.render(<TweenOne animation={{ x:100 }} />, mountNode);
```

## API

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| animation | object / array | null | 需要执行动画的参数 |
| paused |	boolean | 	false | 暂停动画 |
| reverse | boolean | false | 倒放动画 |
| moment  | number |  null | 设置当前时间上的时间，设置完后设回 null |
| onChange | function | null | 全局变动回调 |
| component | string  | `div` | 需要替换的标签 |

### animation

> `transform` 需要设定初始值，必需在 `style` 里设定

|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| type    |  string    |  `to`   | 播放类型，`to` 为正常播放， `from` 反向播放 |
| duration | number    | 450    | 动画时间 |
| delay   | number   |  0   |  动画延时  |
| repeat  | number   | 0    | 重复次数，-1 为无限重复播放 |
| repeatDelay | number | 0 | 每次重复揪放开始时延时 |
| yoyo   | boolean | false | 重复时执行返回动画 |
| ease   | string | `easeInOutQuad` | 缓动参数 |
| bezier | object | null | 贝赛尔曲线动画  |

> `animation` 等于 `array` 时为时间轴动画
 
#### bezier 
|   参数   |    类型    |   默认  |  说明   |
|---------|------------|---------|--------|
| type   | string | `soft` | 类型 `thru` `soft` `quadratic` `cubic` |
| autoRotate | boolean | false | 跟随旋转 |
| vars   | array  | null  |  贝赛尔点的位置，如 `{ x:100, y:100}` |

>贝赛尔曲线 API 参照 <a href="http://greensock.com/docs/#/HTML5/GSAP/Plugins/BezierPlugin/" target="_blank">gsap BezierPlugin</a>

