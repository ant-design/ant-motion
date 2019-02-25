---
cols: 2
order: 2
vertical: true
title: 
  zh-CN: 进出场动画
  en-US: QueueAnim
---

通过简单的配置对一组元素添加串行的进场动画效果。具体参数请参见 [API](/api/queue-anim)

## 何时使用

- 从内容 A 到内容B的转变过程时能有效的吸引用户注意力，突出视觉中心，提高整体视觉效果。

- 小的信息元素排布或块状较多的情况下，根据一定的路径层次依次进场，区分维度层级，来突显量级，使页面转场更加流畅和舒适，提高整体视觉效果和产品的质感。

- 特别适合首页和需要视觉展示效果的宣传页，以及单页应用的切换页面动效。

---

## 怎么使用
### 安装
```bash
$ npm install rc-queue-anim --save
```
### 使用
```jsx
import QueueAnim from 'rc-queue-anim';
ReactDOM.render(<QueueAnim>
  <div key="demo1">依次进场</div>
  <div key="demo2">依次进场</div>
  <div key="demo3">依次进场</div>
  <div key="demo4">依次进场</div>
</QueueAnim>, mountNode);
```
> 每个子标签必须带 key，如果未设置 key 将不执行动画。

## API

> v1.2.0 animConfig 增加 [timeline](http://react-component.github.io/queue-anim/examples/timeline.html)

|参数        |类型             |默认     |详细             |
|------------|----------------|---------|----------------|
| type       | string / array | `right` | 动画内置参数 <br/> `alpha` `left` `right` `top` `bottom` `scale` `scaleBig` `scaleX` `scaleY`|
| animConfig | object / array | null    | 配置动画参数<br/>  如 `{ opacity:[1, 0] }` <br/>参数为: `{ opacity: Array<end, start> }`<br/>出场则相反: `{ opacity: Array<start, end> }`; 详细说明查看下面的 [animConfig](#animConfig) |
| delay      | number / array | 0       | 整个动画的延时,以毫秒为单位 |
| duration   | number / array | 450     | 每个动画的时间,以毫秒为单位  |
| interval   | number / array | 100     | 每个动画的间隔时间,以毫秒为单位  |
| leaveReverse | boolean      | false   | 出场时是否倒放,从最后一个 dom 开始往上播放 |
| ease       | string / array | `easeOutQuart` | 动画的缓动函数,[查看详细](http://julian.com/research/velocity/#easing) |
| appear     | boolean        | true    | 开始进入时是否有动画    |
| animatingClassName | array | `['queue-anim-entering', 'queue-anim-leaving']` | 进出场动画进行中的类名 |
| component  | React.Element/string | `div` | QueueAnim 替换的标签名 |
| componentProps | object | {} | 组件的 props |
| forcedReplay | boolean | false | 是否强制重放动画，比如：在出场动画时触发了进场动画，立即执行进场动画 |
| onEnd      | func   | null  | 动画结束后回调， callback({ key, type }); type 为 `enter` 或 `leave` |

> 当以上数据类型为 Array 时，`['left', 'top']` 第一个为进场动画属性, 第二个为离场属性。

### animConfig

**数据分为三种：**

- 自定义设定开始样式: `{ opacity:[1, 0] }` ；
<br/> 默认数据类型；
<br/>参数类型: `{ opacity: Array<end, start> }`；
<br/>出场自动反向: `{ opacity: Array<start, end> }`；
<br/>
<br/>

- 自定义样式: `{ opacity: 0 }`；
<br/> 不设置开始位置。
<br/>
<br/>


- 自定义数组进出场样式: `[{ opacity:[1, 0] }, { opacity:[1, 0] }]`；
<br/> 数组型;
<br/> 参数类型: `[{ opacity: Array<end, start> }, { opacity: Array<start, end>}]`