---
order: 3
title: TextyAnim
---

A component for entering and leaving animations for text titles, providing non-rich animation, or configuring different effects according to your own needs. See the specific ref [API](/api/texty);

## When To Use

- Used in the animation elements of the enter and leave, for interval animation of the title or body text.
- An animation of the enter of each word at different times.

---
## How To Use

### Install

```bash
$ npm install rc-texty --save
```
### Usage

```jsx
import Texty from 'rc-texty';
ReactDOM.render(<Texty>text</Texty>, mountNode);
```


## API

| name           | type                 | default    | description                        |
| --------- | -------------- | -------- | ----------------------------------------- |
| className | string         | `null`   | 	class name.      |
| prefixCls | string         | `texty`  | prefix class.             |
| type      | string         | `top`    | animation type,  `left` \| `right` \| `top` \| `bottom` \|`alpha` \| `scale` \|  `scaleX` \| `scaleBig` \| `scaleY` \| `mask-bottom` \| `mask-top` \|  `flash` \| `bounce` \| `swing` \| `swing-y` \| `swing-rotate`. |
| mode      | string         | `smooth` | animate sport mode.  `smooth` \| `reverse` \| `random` \| `sync`      |
| duration | number | `450` | Except for special animation   `flash` \| `bounce` \| `swing` \| `swing-y` \| `swing-rotate`. one text animation duration |
| delay     | number         | `0`      | animation overall delay. |
| interval  | number \| func | `50`     | animation interval, is function: `function: (e: { key: string }) => number.` Key is split text plus sequence(text-1). example: `text`, key is `t-0`、`e-1`、`x-2`、`t-3`.     |
| split     | func           | `null`   | children split, return string   |

### Inherit TweenOneGroup API

[TweenOneGroup API](/api/tween-one#TweenOneGroup-API)

| name           | type                 | default    | description                        |
| ------------------ | --------------------- | ------------------------- | ---- |
| appear             | boolean  | true | Whether the element has an initial appear animation.  |
| enter              | object / array / func | { x: 30, opacity: 0, type: 'from' }           | Enter the tween-one animation data, if the array is tween-one timeline. func reference queue-anim, callbac({key,index}) |
| leave              | object / array / func | { x: 30, opacity: 0 }| Leave the tween-one animation data, same as above.  |
| onEnd              | func                  | -            | Callback after each animation ends. |
| animatingClassName | array                 | `['tween-one-entering', 'tween-one-leaving']` | The style of entering and leaving, if it is a component form, you need to bring the className to your component. |
| resetStyle         | boolean               | true     | TweenOne's `resetStyle`, resets the initial style when switching animations. |
| exclusive          | boolean               | false    | Whether to allow new animations to be executed immediately upon switching. `enter => leave`: execute leaving animation immediately. |
| component          | React.Element/String  | div    | - |