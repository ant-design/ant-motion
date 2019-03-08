---
order: 1
title: Principle
---

Different from animations usage in typical front-office applications, animations in enterprise level applications spend a great amount of efforts on reinforcing user interactions and the effectiveness of those interactions. Therefore, we derived three animation design principles from Ant Design's core design language:

<br/>

```__react
import Principle from '../site/theme/template/other/Principle';
ReactDOM.render(<Principle locale="en-US"/>, mountNode);
```

<br/>

## Natural

Intuitive animations usually are backed by law of nature. This requires the animations to be smooth so that their users can feel the animations' motion being justified. A natural animation triggers its users with positive user experiences.

Take button animation as an example, designers image the button as foliage on water - when you press it and release, the leave will slightly go into the water, and then pop back up, creating ripples around itself.

<video src="https://gw.alipayobjects.com/os/rmsportal/NTMlQdLIkPjOACXsdRrq.mp4" loop="true" class="video-min" />

## Efficient

Enterprise level applications require highly effective user interactions. So is their animation design - with a transition time as minimal as possible.

For example, compared to appearing animations, disappearing animations should not attract too much attention from their users. They just need to be concise and clear. Therefore, disappearing animations are configured to swing out with faster velocity and no disappearing delay between each list items - they disappear all at the same time as one unit.

<video src="https://gw.alipayobjects.com/os/rmsportal/wMKeLGnpDxhwfCsBqKNN.mp4" loop="true" class="video-min" />

## Restrain

Avoid dramatic and complicated animations. A good animation will get the job done instead of frustrating its users.

For example, when a user expands a menu, his main focus is on the menu content, not the direction change of the arrow icon on the right. Therefore, the animation doesn't need to be very complicated and distracting; it changes just enough to indicate the transition.

<video src="https://gw.alipayobjects.com/os/rmsportal/FeUCANmoDRwCSmIcnPNF.mp4" loop="true" class="video-min" />