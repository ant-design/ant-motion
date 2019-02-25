---
cols: 2
order: 2
vertical: true
title: QueueAnim
---

Add queue animation to a set of elements with a simple configuration. See the specific ref [API](/api/queue-anim)

## When To Use

- The transition from content A to content B can effectively attract users' attention, highlight the visual center, and improve the overall visual effect.。

- Small information elements arranged or a lot of blocky cases, entering according to a certain path level, differentiate the dimension hierarchy, make page transitions smoother and more comfortable, improve overall visuals and product texture

- Ideal for homepages, as well as page transitions for single-page apps.

---

## How To Use

### Install

```bash
$ npm install rc-queue-anim --save
```
### Usage

```jsx
import QueueAnim from 'rc-queue-anim';
ReactDOM.render(<QueueAnim>
  <div key="demo1">Queue entering</div>
  <div key="demo2">Queue entering</div>
  <div key="demo3">Queue entering</div>
  <div key="demo4">Queue entering</div>
</QueueAnim>, mountNode);
```
> Each subtag must have a key, and if no key is set, no animation will be performed.

## API

> v1.2.0 animConfig add [timeline](http://react-component.github.io/queue-anim/examples/timeline.html)

| name       | type       | default    | description    |
|------------|----------------|---------|----------------|
| type       | string / array | `right` | Animation type  <br/> `alpha` `left` `right` `top` `bottom` `scale` `scaleBig` `scaleX` `scaleY`|
| animConfig | object / array | null    | Custom config, See below for more details [animConfig](#animConfig) |
| delay      | number / array | 0       | Default unit: `ms`, delay of animation |
| duration   | number / array | 450     | Default unit: `ms`, duration of animation  |
| interval   | number / array | 100     | Default unit: `ms`, interval of duration  |
| leaveReverse | boolean      | false   | 	reverse animation order at leave |
| ease       | string / array | `easeOutQuart` | animation easing config like 'ease', ['easeIn', 'easeOut'], [[.42,0,.58,1], [.42,0,.58,1]], [more](http://julian.com/research/velocity/#easing) |
| appear     | boolean        | true    | whether support appear anim    |
| animatingClassName | array | `['queue-anim-entering', 'queue-anim-leaving']` | className to every element of animating |
| component  | React.Element/string | `div` | QueueAnim replaced tag name |
| componentProps | object | {} | Replaced component props |
| forcedReplay | boolean | false | Whether to forcibly replay the animation, for example: trigger the `leave` when the `enter`, and immediately execute the `enter`. |
| onEnd      | func   | null  | animation end callback({ key, type }); type: `enter` or `leave` |

> Above props support array format, like \['left', 'top'\], `top` is leave config.

### animConfig

**Data fall into three categories:**

- Custom set start: `{ opacity:[1, 0] }` ；
<br/> default;
<br/>type: `{ opacity: Array<end, start> }`；
<br/>leave automatic reverse: `{ opacity: Array<start, end> }`；
<br/>
<br/>

- Custom: `{ opacity: 0 }`；
<br/> Start position is not set.
<br/>
<br/>

- Array: `[{ opacity:[1, 0] }, { opacity:[1, 0] }]`；
<br/> type: `[{ opacity: Array<end, start> }, { opacity: Array<start, end>}]`