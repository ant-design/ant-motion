---
order: 3
title: 
  zh-CN: 文字动画
  en-US: TextyAnim
---

一个针对文字标题的进行进出场动画的组件，提供非富的动画效果，也可以随自已的需求来配置完成不同的效果，具体参数请参见 [API](/api/texty);

## 何时使用

- 在进出场的动画元素里，针对标题或正文文字进行间隔性动画时使用。
- 每个词语的不同时间进场的动画。

---
## 怎么使用

### 安装

```bash
$ npm install rc-texty --save
```
### 使用

```jsx
import Texty from 'rc-texty';
ReactDOM.render(<Texty>text</Texty>, mountNode);
```


## API

| 参数      | 类型           | 默认     | 说明                                                                                                                                                                                                                    |
| --------- | -------------- | -------- | --------- |
| className | string         | `null`   | 组件自定义样式.     |
| prefixCls | string         | `texty`  | 组件默认自带样式.    |
| type      | string         | `top`    | 动画的样式, 提供： 'left' \| 'right' \| 'top' \| 'bottom' \|'alpha' \| 'scale' \|  'scaleX' \| 'scaleBig' \| 'scaleY' \| 'mask-bottom' \| 'mask-top' \|  'flash' \| 'bounce' \| 'swing' \| 'swing-y' \| 'swing-rotate'. |
| mode      | string         | `smooth` | 动画的类型，如倒放，随机出现等。提供： 'smooth' \| 'reverse' \| 'random' \| 'sync'   |
| duration | number | `450` | 除  'flash' \| 'bounce' \| 'swing' \| 'swing-y' \| 'swing-rotate' 外的动画时间 |
| delay     | number         | `0`      | 动画开始前的延时.     |
| interval  | number \| func | `50`     | 每单个文字的间隔出现的时间, 如果是 `function: (e: { key: string }) => number.` Key 是 `split` 后的单个文字的加当前文字的序列，如 text, key 是 `t-0`、`e-1`、`x-2`、`t-3`.          |
| split     | func           | `null`   | 自定义将文字拆分，需要返回个数组，默认将每个字符拆分。 |

### Inherit TweenOneGroup API

[TweenOneGroup API](/api/tween-one#TweenOneGroup-API)

| 参数               | 类型                  | 默认                                          | 说明                                                                                                      |
| ------------------ | --------------------- | ------------------- | ------------------------------ |
| appear             | boolean               | true            | 元素是否有刚开始的进场动画          |
| enter              | object / array / func | `null`     | 进场的 tween-one 数据，如果是数组是 tween-one 的 timeline。 func 参照 queue-anim, callbac({ key, index }) |
| leave              | object / array / func | `null`    | 出场时的数据，同上    |
| onEnd              | func                  | -       | 每个动画结束后回调      |
| animatingClassName | array                 | `['tween-one-entering', 'tween-one-leaving']` | 进出场的样式，如果是组件形式，需把 className 带到你的组件里         |
| exclusive          | boolean      | false      | 是否允许在切换时立即执行新的动画。 `enter => leave`：立即执行离开动画    |
| component          | React.Element/String  | div     | 需要替换的标签   |