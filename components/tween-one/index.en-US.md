---
order: 0
title: TweenOne

---

This is a component that works on a single element label. It can perform all style and label attribute animations, including `transform3d, blur` etc., and can also complete Bezier animation. See the specific ref [API](/api/tween-one)

## When To Use

- When element changes the style.
- When an element completes a different timeline animation for a certain period of time.
- When the number changes.
- When SVG is linearly grown or deformed.
- The element needs to be animated on the specified path.

---

## How To Use

### Install

```bash
$ npm install rc-tween-one --save
```
### Usage

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

| name           | type                 | default    | description                        |
| -------------- | -------------------- | ------- | --------------------- |
| animation      | object / array       | null    | animate configure parameters.                  |
| paused         | boolean              | false   | animate pause.                      |
| reverse        | boolean              | false   | animate revers.                           |
| reverseDelay   | number               | 0       | animate revers start delay. |
| repeat         | number               | 0       | `animation` all data repeat, To repeat indefinitely, use -1 |
| yoyo           | boolean              | false   | `animation` all data alternating backward and forward on each repeat. |
| onChange       | function             | null    | when the animation change called, callback({ moment, target, index, mode, timelineMode }) |
| moment         | number               | null    | Set the moment at the current animation timeline, please set it back to null after setting. |
| attr           | string               | `style` | `style` or `attr`, `attr` is tag attribute. when morph SVG must be. |
| resetStyle     | boolean              | false   | update animation data, reset init style.  |
| component      | React.Element/String | `div`   | component tag |
| componentProps | object               | null    | `component` is React.Element, component tag props, not add style |

### animation

> Basic animation param. please view [animation terms](/language/animate-term);

**Cannot be used at the same time reverse and repeat: -1.**

| name        | type               |    default     |   description  |
| ----------- | ------------------ | --------------- | -------------- |
| type        | string             | `to`            |  Play type, `to` for normal play, `from` for reverse play, `set` is the same as { duration: 0 }. |
| duration    | number             | 450             | animate duration.  |
| delay       | number             | 0               | animate delay. |
| repeat      | number             | 0               | animate repeat, To repeat indefinitely, use -1.|
| repeatDelay | number             | 0               | 	repeat start delay. |
| appearTo    | number             | null            | 	Add to the specified time. |
| yoyo        | boolean            | false           | `true`: alternating backward and forward on each repeat.  |
| ease        | string ／ function | `easeInOutQuad` | animate ease. [refer](http://easings.net/); <br/>function: TweenOne.easing.path(path, param) Details are as follows |
| onStart     | function           | null            | Callback when the animation is begin, callback(e), e: { index, target }. |
| onUpdate    | function           | null            | Callback when the animation is update, callback(e), e: { index, target, ratio }. |
| onComplete  | function           | null            | Callback when the animation is complete, callback(e), e: { index, target }.
| onRepeat    | function           | null            | Callback every time the animation is repeat, callback(e), e: { index, target }. |

- The plugin parameters refer to the following plugin. Such as `bezier`, `SVGDraw`, `path`, `Children` etc. 

> `animation` equal to `array` is timeline animation, ref: `animation={[{ x: 10 }, { y: 10 }]}`;


### TweenOne.easing.path

```jsx

const path = 'M0,100 C30,60 0,20 50,50 C70,70 60,0 100,0';
const ease = TweenOne.easing.path(path);

```
#### path
The value of `d` in the path of the SVG path;
#### param
| name        | type               |    default     |   description  |
| ----------- | ------ | ---- | ------------------------------ |
| rect        | number | 100  | Draw the square size of the easing path.     |
| lengthPixel | number | 1500 | The entire path is divided into 1500 pixels to take points. |

## Plugins

### SvgDrawPlugin

SVGDraw = string or number;

SVG Linear animation

``` jsx
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
TweenOne.plugins.push(SvgDrawPlugin);
<svg>
  <TweenOne animation={{ SVGDraw: 0 }} component="path"/>
</svg>
```
`{ SVGDraw: 30 }` or `{ SVGDraw: 'start end' }` 值可以为 `%`；

### SvgMorphPlugin

Svg path deformation animation, such as `{ d: 'M0 0L100 100' }`

> Note: `SvgMorphPlugin` must be set `attr: 'attr'`

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

string: Default band `x, y, rotate`;

object: Customizable required `x, y, rotate`.

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
| name        | type               |    default     |   description  |
| ---------- | ------- | ------ | -------------------------------------- |
| type       | string  | `soft` | type: `thru` `soft` `quadratic` `cubic` |
| autoRotate | boolean | false  | Following rotation                               |
| vars       | array   | null   | Bezier point location, such as `{ x:100, y:100}`   |

> Bezier API ref [gsap BezierPlugin](http://greensock.com/docs/#/HTML5/GSAP/Plugins/BezierPlugin/)

### ChildrenPlugin

```jsx
import ChildrenPlugin from 'rc-tween-one/lib/plugin/ChildrenPlugin';
TweenOne.plugins.push(ChildrenPlugin);
<TweenOne animation={{
  Children: { value: 10000, floatLength: 2, formatMoney: true }
}} />
```
| name        | type               |    default     |   description  |
| ----------- | ------------------------------- | ----- | -------------------------------------------- |
| value       | number                          | null  | value.                      |
| floatLength | number                          | null  | The length of the float (after the decimal point). |
| formatMoney | boolean / { thousand, decimal } | false | Format the value as a money character, you can customize the punctuation in the middle of the money sign. |

#### formatMoney = { thousand, decimal }
| name        | type               |    default     |   description  |
| -------- | ------ | ---- | ------------ |
| thousand | string | `,`  | Hundreds of symbols.  |
| decimal  | string | `.`  | Decimal point symbol. |

## TweenOneGroup API

| name        | type               |    default     |   description  |
| ----------- | --------------- | --------------------- | -------------------------------- |
| appear             | boolean  | true | Whether the element has an initial appear animation.  |
| enter              | object / array / func | { x: 30, opacity: 0, type: 'from' }           | Enter the tween-one animation data, if the array is tween-one timeline. func reference queue-anim, callbac({key,index}) |
| leave              | object / array / func | { x: 30, opacity: 0 }| Leave the tween-one animation data, same as above.  |
| onEnd              | func                  | -            | Callback after each animation ends. |
| animatingClassName | array                 | `['tween-one-entering', 'tween-one-leaving']` | The style of entering and leaving, if it is a component form, you need to bring the className to your component. |
| resetStyle         | boolean               | true     | TweenOne's `resetStyle`, resets the initial style when switching animations. |
| exclusive          | boolean               | false    | Whether to allow new animations to be executed immediately upon switching. `enter => leave`: execute leaving animation immediately. |
| component          | React.Element/String  | div    | - |
