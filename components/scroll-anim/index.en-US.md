---
order: 4
vertical: true
title: ScrollAnim
---

With a simple configuration, the element will follow the scroll bar scrolling animation. See the specific ref [API](/api/scroll-anim)

## When To Use

- scroll to each block to play the animation.
- When adding parallax with the scroll bar.

<style>
.queue-anim-demo{
  float: left;
  margin: 0 5px 0 0!important;
}
.code-box-shape{
  position: relative !important;
}
</style>

[More Demo](http://react-component.github.io/scroll-anim/) 

---


## How To Use

### Install

```bash
$ npm install rc-scroll-anim --save
```

### This component provides

- **Element:** No animation element
- **OverPack:** Scrolling play the animation
- **Parallax:** Scrolling parallax
- **Link:** Anchor positioning
- **scrollScreen:** Enable full screen scrolling, provide: `init()` and `unMount()`;

### Usage

#### Element Example
```jsx
import { Element } from 'rc-scroll-anim';
React.render(<div>
  <Element className="pack-page">
    <div>demo</div>
  </Element>
</div>, mountNode);
```

#### OverPack Example

```jsx
import ScrollAnim from 'rc-scroll-anim';
const ScrollOverPack = ScrollAnim.OverPack;
ReactDOM.render((<ScrollOverPack hideProps={{ tweenOne: { reverse: true }}}>
  <QueueAnim key='queueAnim'>
    <div key='a'>Queue Demo</div>
    <div key='b'>Queue Demo</div>
    <div key='b'>Queue Demo</div>
  </QueueAnim>
  <TweenOne key='tweenOne' vars={{ x:100 }} >text</TweenOne>
  <Animate key='rc-animate' transitionName="fade"
    transitionAppear>
    rc-animate demo
  </Animate>
</ScrollOverPack>), mountNode);
```

#### Parallax Example

```jsx
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
React.render((<ScrollParallax vars={{x:100}}>Parallax</ScrollParallax>), mountNode);
```

#### Link Example
```jsx
import { Link } from 'rc-scroll-anim';
React.render(<div>
  <div className="nav">
    <Link className="nav-list" to="page0">nav0</Link>
    <Link className="nav-list" to="page1">nav1</Link>
  </div>
  <div className="pack-page" id="page0">page0</div>
  <div className="pack-page" id="page1">page1</div>
</div>, mountNode);
```

#### scrollScreen Example

```jsx 
import { scrollScreen } from 'rc-scroll-anim';
scrollScreen.init();
scrollScreen.unMount();
```

> More examples [Demo](http://react-component.github.io/scroll-anim/)

## API

## Element

> When the height of `Element` or `OverPack` does not reach playScale, it will not be rendered, it is recommended to set the `min-height` on the last screen.

| name    | type       | default | description   |
|---------|------------|---------|--------|
| component | React.Element/string  |  'div'  | component tag.            |
| targetId  | string   |  null | Customize the goal of the scroll event, [demo](http://react-component.github.io/scroll-anim/examples/target.html). |
| playScale |  number / array  |  `0.5` | Arrives in the specified area of the window to start playback, 0.5 will be converted to \[0.5, 0.5\]([`bottom-enter`, `top-leave`]),<br />` bottom-enter `is the percentage of entering the window, 0.5 is 50% calculated from the bottom up, `top-leave` is the percentage of leaving the window, 0.5 is 50% calculated from the top up, `top-leave` must be greater than or equal to `bottom-enter`. <br /> Note: Element height must be able to reach the playing height, not the sub-level height, must be the current element height. |
| replay  |  boolean | false | Whether to trigger an event each time it enters, `false`:  Triggered only when the event scrolls down. |
| onChange | func    | null  | change callback({ mode, id }); `mode`: `enter` or `leave` |
| onScroll | func     | null | scroll callback({ domEvent, scrollTop, offsetTop, showHeight, id}). |
| location | string   | null  | Positioning with the position of the parent element, value is parent `id`. |
| componentProps | object | - | If `component` is a component type, the props of the component. |

### OverPack

> `OverPack` inherit `Element`, （`component`、`componentProps`、`playScale`、`replay`、`onChange`、`onScroll`） refer `Element`.

| name    | type       | default | description   |
|---------|------------|---------|--------|
| always  | boolean | true | Repeat play, if it is `false`, it will only enter once, no longer trigger the leave animation. |
| appear  |  boolean  | true  |  The default has an appear animation, `false` will not have an appear animation, it will be displayed directly.|

## Parallax
| name    | type       | default | description   |
|---------|------------|---------|--------|
| animation | object / array | null | animation data. |
| location | string | null | Positioning with the position of the parent element, value is parent `id`. |
| always | boolean | true | Same as above, repeat play. |
| targetId | string | null | Refer to the `targetId` of `Element`. |
| component | React.Element/string | div | Same as above. |
| componentProps | object | - | Same as above. |

#### animation={}
| name    | type       | default | description   |
|---------|------------|---------|--------|
| playScale | array | `[0, 1]` |The area segment to be played, the first is the percentage of the window that starts, and the second is the percentage of the window that ends. When the first number is 0, playback starts from the bottom of the window; <br/> When timeline is used, the previous playback ratio will be added by default. <br/> For example: `[{ playScale: [0, 0.2] }, { playScale: [0, 0.8] }]`, the following 0.8 value is equivalent to 1, ending at the top of the screen. |
| ease    | string  | `easeInQutQuad` | ease, [refer](http://easings.net/). |
| onUpdate | function | - | Callback when the animation is update, callback(e), e: { index, target, ratio }.  |
| onStart | function | - | Scroll down to start the animation callback, is `playScale[0]`.  |
| onComplete | function | - | Scroll down to complete the callback, is `playScale[1]`. |
| onStartBack | function | - | Scroll up to start the animation callback, is `playScale[1]`.  |
| onCompleteBack | function | - | Scroll up to complete the callback, is `playScale[0]`. |

## Link

| name    | type       | default | description   |
|---------|------------|---------|--------|
| to | string | null | The specified element reaches the top, is element `id` value. |
| toHash | boolean  | false  | Add the value in `to` to the url link. |
| duration | number | 450 | Scroll animation duration. |
| ease |  string | `easeInQutQuad` | ease, [refer](http://easings.net/);  |
| active | string | `active` | active className. |
| showHeightActive | sting / number / array | `50%` | When the element has `50%` already displayed, `link` class add `active`.  to up leaveing `50%`, element remove `active`<br/>if it is an Array, the first one is the enter and the second is the leave, [enter, leave]. |
| toShowHeight | boolean | false | Whether to scroll to the value of `showHeightActive`. |
| offsetTop    | number  | 0     | Element off the top. |
| targetId | string | null | Refer to the `targetId` of `Element`. |
| onFocus | function | - | onFocus({ target, to }). |
| onBlur | function | - | onBlur({ target, to }). |
| component |string | div | - |
| componentProps | object | - | - |

## scrollScreen

> scrollScreen.init(vars);

> scrollScreen.unMount();


#### init
- Scroll one screen.

#### vars 
| name    | type       | default | description   |
|---------|------------|---------|--------|
| duration  | number         | 450     | Scroll duration.   |
| ease      | string         | `easeInOutQuad` | ease, Same as above.  |
| docHeight | number         | null    | Custom page height. |
| loop      | boolean        | false   | Front and back cycle.  |
| scrollInterval | number    | 1000    | Scrolling event interval. |

#### unMount
- Clear one screen scrolling.

