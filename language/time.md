---
order: 1
chinese: 时间栅格
english: Time
category: 设计语言
---

时间栅格是将每个动画的 timeline 栅格化，在动画的指定时间里，每个时间段的一个拆分;

比如：一秒有30帧的动画，那么这动画就是由 30 张图片组成，只是每张图片里的元素指定的参数不同, 如下图:

<div style="text-align: center;">
  <img src="https://gw.alipayobjects.com/zos/rmsportal/eZpnsUOxqIQZrAVEgbPC.png" width="450">
</div>

结合自然运动的规律，那物体运动在时间栅格中具有不同运动速率和出场，动画停止与启动都不是瞬间完成的，当物体突然移动或停止，会显的很不自然，因它需要一段缓冲的时间来加速或减速，如下图： 

<div style="text-align: center;">
  <img src="https://gw.alipayobjects.com/zos/rmsportal/kbTlqDaubwgsBKFNoyGF.png" width="450">
</div>

## 自然运动效果

具体效果，可查看以下示例，鼠标 hover 时自动播放动画。

```__react
import EaseExplain from '../src/theme/template/other/EaseExplain';
ReactDOM.render(<EaseExplain
  animation={{
    left: 410, duration: 1000, repeat: -1,
    yoyo: true, repeatDelay: 500, ease: 'easeInOutCubic',
  }}
  title="1.单物体可视范围内点到点之间的运动"
>
  单物体可视范围内点到点之间的运动，采用的是
  <span className="text-highlight"> ease-in-out </span>
</EaseExplain>, mountNode);
```

```__react
import EaseExplain from '../src/theme/template/other/EaseExplain';
ReactDOM.render(<EaseExplain
  title="2.单物体可视范围外进场的运动"
  leftHide
  animation={{left: 410, duration: 1000, repeat: -1,repeatDelay: 500, ease: 'easeOutCubic'}}
  circleStyle={{ left: -100 }}
>
  单物体进入可视范围的运动，采用的是
  <span className="text-highlight"> ease-out </span>
</EaseExplain>, mountNode);
```

```__react
import EaseExplain from '../src/theme/template/other/EaseExplain';
ReactDOM.render(<EaseExplain
  title="3.单物体可视范围内出场的运动"
  rightHide
  animation={{ left: 510, duration: 1000, repeat: -1, repeatDelay: 500, ease: 'easeInCubic' }}
>
  单物体出可视范围的运动，采用的是
  <span className="text-highlight"> ease-in </span>
</EaseExplain>, mountNode);
```

> 需要注意：是离开可视窗口，如果在窗口中消失的，建议使用前后缓动，同理窗口中出现也一样。

```__react
import QueueDemo from '../src/theme/template/other/QueueDemo';
ReactDOM.render(<QueueDemo />, mountNode);
```
