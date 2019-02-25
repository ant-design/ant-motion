---
order: 5
vertical: true
title: BannerAnim
---

Make your banner animated with a simple configuration. See the specific ref [API](/api/banner-anim)

## When To Use

- When displaying multiple pieces of information on the first screen, you need to switch the elements in the banner.

> [More Demo](http://react-component.github.io/banner-anim/)


---

## How To Use

### Install

```bash
$ npm install rc-banner-anim --save
```

### Usage

```jsx
import BannerAnim, { Element } from 'rc-banner-anim';
ReactDOM.render(<BannerAnim>
  <Element key="demo1">
    <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>
  </Element>
  <Element key="demo2">
    <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>
  </Element>
</BannerAnim>, mountNode);
```


## API

### BannerAnim

> ref to control switching: `<BannerAnim ref={(c) => { this.banner = c; }}/>`

> prev: this.banner.prev();

> next: this.banner.next();

> go to:  this.banner.slickGoTo(number); number starts at 0;

| name       | type       | default    | description    |
|----------|-----------------|--------------|-----------------------|
|   type   |  string / array | All animType | Provide: `across`, `vertical`, `acrossOverlay`, `verticalOverlay`, `gridBar`, `grid`; <br/>`grid` and `gridBar` single block animation time is `duration`; <br/>custom animation [refer](http://react-component.github.io/banner-anim/examples/customAnimType.html). |
| duration |      number     |      450     | -  |
| delay    |      number     |       0      |   -  |
| ease     |      string     | `easeInOutQuad` | ease, [refer](http://easings.net/).        |
| initShow |      number     |    0         |  Init show.          |
| arrow    |      boolean    |      `true`    |  default arrow,  `Arrow` in children, this item is invalid. |
| thumb    |      boolean    |      `true`    |  default thumb(point),  `Thumb` in children, this item is invalid.  |
| autoPlay |      boolean    |      `false`  | Auto play. |
| autoPlaySpeed |  number    |    5000       | Auto play speed. |
| onChange |     func        |    -          |   onChange(type, number) type: `before` or `after`, number: current show number |
| prefixCls |    string      |   -           |  prefix class. |
| children |  react.component|   -           | `Element`(must), `Arrow`, `Thumb` |
| sync      |   boolean      |   false       | Passed to `Element`. |  
| dragPlay  |   boolean      |   true        | drag play. |
| component | React.Element/string         |      `div`    | -  |

### Element 

> When the child element is `TweenOne`, the type in the animation is please set to `from`.

| name       | type       | default    | description    |
|----------|-----------------|--------------|-----------------------|
| key      |     string      |      -       |  must.                 |
| leaveChildHide | boolean |  false   | Whether the animation is switched when the child is playing. | 
| sync      |   boolean      |   false       | Whether the child animation enters synchronization with the sliding animation. `false` is to start the child animation after the slide is complete. |  
| prefixCls |     string      |   -           |  prefix className |
| followParallax | object   |  null        | Follow the mouse shake effect. |
| component | React.Element/string         |      `div`    | -  |
| componentProps | object | {} | Replaced component props |

#### followParallax is object
| name       | type       | default    | description    |
|----------|-----------------|--------------|-----------------------|
| delay    |   number        |  null        | Must, delay the mouse effect after a single block is entered, for example, when the child is `tween-one`, you need to wait for the `tween-one` animation to finish before you execute the mouse effect, otherwise the two will conflict. |
| data     | array           |  null        | Detailed parameters are viewed below [followParallax data](#followParallax-data), Mouse follow example [Demo](http://react-component.github.io/banner-anim/examples/followMouse.html). |
| ease | string        | `easeInOutQuad`         |  ease, [refer](http://easings.net/).  |
| minMove | number     | 0.08        | The area is `0 - 0.1`, `easeInOutQuad(startMousePosition, minMove, 1, currentMousePosition)`. |

#### followParallax data
> data = [{ id, value, type, bgPosition }]

| name       | type       | default    | description    |
|----------|-------------|--------------|-----------------------|
| id       | string     |  -     | children id.   |
| value    | number     |  -      | The value when shaking, if the value is 20, the value of the left and right shaking is: the leftmost -20, the rightmost 20; | 
| type     | string    |  -     |  style name |
| bgPosition | string  | - | The coordinates of the initial background image, only valid when type is backgroundPosition, the default is 50%.  |

### Element.BgElement

| name       | type       | default    | description    |
|----------|-----------------|--------------|-----------------------|
| id      |     string      |      -       |  Must.   |
| className |     string      |   -           |  class name |
| scrollParallax | object   |  null        | { y: 100 }, parallax value。 |
| videoResize | boolean         |      `true`    | Automatic response window size if the child element is video.  |
| component | React.Element/string          |      `div`    | -  |
| componentProps | object | {} | Replaced component props |

### Arrow or Thumb

| name       | type       | default    | description    |
|----------|-----------------|--------------|-----------------------|
| key      |     string      |      -       |  Must.                 |
| prefixCls |     string      |   -           |  Prefix class. |
