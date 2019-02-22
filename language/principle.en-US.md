---
order: 1
title: Principle
---

In the product design of enterprise applications, the use animation and front-end products are very different, It is especially important to boost interactive behaviors and enhance information cognition. Based on the design values ​​of ant design, we derive the design of animation three principles:

<br/>

```__react
import Principle from '../site/theme/template/other/Principle';
ReactDOM.render(<Principle locale="en-US"/>, mountNode);
```

<br/>

## Natural

Behind the natural animation is the law of natural movement. this requires the animation to ensure visual consistency during the conversion, so that the user perceives that the action is natural.

Take the button animation design as an example. the designer imagines it as a leaf floating on the surface of the water. when you touch it, the leaves will float and bounce, and then the ripple effect will appear.

<video src="https://gw.alipayobjects.com/os/rmsportal/NTMlQdLIkPjOACXsdRrq.mp4" loop="true" class="video-min" />

## Efficient

Enterprise-class applications pursue an efficient user experience, the corresponding animation design should also be like this, try to save time on transitions, quickly complete the animation of the transition.

For example, in the animation of the leave and entry, there is no need to attract the attention of the user, should be simple and clear, so our leave time is faster, at the same time, does not set the queue to leave in sequence, just need the whole piece to disappear directly.

<video src="https://gw.alipayobjects.com/os/rmsportal/wMKeLGnpDxhwfCsBqKNN.mp4" loop="true" class="video-min" />

## Restraint

Try to avoid exaggerated animations, do something meaningful, do not do too much decoration and interfere with the user.

Like our Menu, when it is open, focus on the content of the menu, the icon switch on the right is not the main element, don't need to over-emphasize to distract users' attention, so just switch inadvertently.

<video src="https://gw.alipayobjects.com/os/rmsportal/FeUCANmoDRwCSmIcnPNF.mp4" loop="true" class="video-min" />