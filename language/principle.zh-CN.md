---
order: 1
title:
  zh-CN: 原则
  en-US: Principle
---

在企业级应用的产品设计中，使用动效和前台类产品有很大的不同，助力交互行为和增强信息认知显得尤为重要，在 ant design 设计价值观的基础之上，我们衍生出动效设计的三原则：

<br/>

```__react
import Principle from '../site/theme/template/other/Principle';
ReactDOM.render(<Principle />, mountNode);
```

<br/>

## 自然

自然的动效背后体现的是自然运动规律。这就要求动效在转换时保证视觉上的连贯性，让用户感知到这个动作是自然的，是能够引起共鸣的。

以 button 的动效设计为例，设计师将其想像成一片树叶飘浮在水面之上，当你去触碰它时，叶子会下浮再反弹，然后出现涟漪效果。

<video src="https://gw.alipayobjects.com/os/rmsportal/NTMlQdLIkPjOACXsdRrq.mp4" loop="true" class="video-min" />

## 高效

企业级应用追求的是高效的用户体验，与之对应的动效设计也应如此，尽量节省过渡的时间，快速完成过渡的动画效果。

举个例子，在出场与进场的动效里，出场不用大张旗鼓的去吸引用户的注意力，而是做到简单清晰即可。所以我们的出场时间采用了更快的速度,同时也不设置队列依次出场的形式，只需要整块直接消失即可。

<video src="https://gw.alipayobjects.com/os/rmsportal/wMKeLGnpDxhwfCsBqKNN.mp4" loop="true" class="video-min" />

## 克制

尽量避免夸张的动效，做有意义的事，不去做太多的修饰而干扰用户。

如我们的 Menu，在展开时，注重的是菜单的内容，而右侧的 icon 切换并不是主要元素，不需要过度强调去分散用户的注意，所以只需在不经意间切换，明确指示变化即可。

<video src="https://gw.alipayobjects.com/os/rmsportal/FeUCANmoDRwCSmIcnPNF.mp4" loop="true" class="video-min" />