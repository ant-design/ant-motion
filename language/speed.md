---
order: 2
title:
  zh-CN: 速度
  en-US: Speed
---

速度的快或慢取决于时间与缓动，相同的距离，时间越短速度则越快，而缓动则是能将同一段时间划分快与慢的区域。

## 时间

在企业级应用的设计中，动效需要在尽可能短的时间内有效的完成过渡。那么如何把握这个时间的长短呢？伦敦城市学院神经学创立者 [Davina Bristow](http://www.ucl.ac.uk/media/library/blinking) 曾提出， 眨眼是人体最快的潜意识动作，大多数人每分钟眨眼 15 次，眨眼平均持续 100-150 毫秒；所以我们将这个时间段定义成 Ant Design 动效的基本时间单位。

### Ant Design 组件里的基本时间单位

最快时间: 100ms, 基本时间: 200ms, 较大时间：300ms... 100 的倍增方式。

<img src="https://gw.alipayobjects.com/zos/rmsportal/QDjRnqbtZvwUKuqoUfGx.jpg" width="100%" />

### 示例演示

<video src="https://gw.alipayobjects.com/os/rmsportal/tkVloEOCvihTsewuytJu.mp4" alt="radio 的时间为 100ms" loop="true" class="video-min-m"/>

<video src="https://gw.alipayobjects.com/os/rmsportal/DSVnhmNDoxPUbBdrXwid.mp4" alt="select 的时间为 200ms" loop="true" class="video-min-m video-margin-left"/>

<video src="https://gw.alipayobjects.com/os/rmsportal/cmvxKbtOyKCEfTEWpccS.mp4" alt="modal 的时间为 300ms" loop="true" class="video-min video-margin-left"/>


### 页面转换或其它的时间单位

在页面的动效里，我们运用了 150ms 为最小单位。

最快时间: 150ms, 基本时间: 300ms, 平滑时间：450ms, 较大时间: 600ms... 150 的倍增方式

<img src="https://gw.alipayobjects.com/zos/rmsportal/tMwXLPuivzKOElSbiGMe.jpg" width="100%" >

> 示例可参考模板编辑里的模板的动效

## 缓动

按照物理学的解释，如果在任何相等的时间内，元素在动画过程中每个点的距离都是相等的，那么，元素的运动就是匀速运动；如果在任何相等的时间内，元素在动画过程中点的距离不相等的，那么，元素的运动就是非匀速运动，非匀速运动又分为加速运动和减速运动。速度由慢到快的运动称加速运动；速度由快到慢的运动称减速运动。

### 匀速运动

比如：一秒有30帧的动画，那么这动画就是由 30 张图片组成，只是每张图片里的元素指定的参数不同, 如下图:

<div style="text-align: center; margin: 32px 0">
  <img src="https://gw.alipayobjects.com/zos/rmsportal/eZpnsUOxqIQZrAVEgbPC.png" width="100%" style="max-width: 450px">
  <p>线性动画结构图（适合于机械或环状运动）</p>
</div>

### 非匀速运动

结合自然运动的规律，那物体运动在时间栅格中具有不同运动速率和出场，动画停止与启动都不是瞬间完成的，当物体突然移动或停止，会显的很不自然，因它需要一段缓冲的时间来加速或减速，如下图： 

<div style="text-align: center; margin: 32px 0">
  <img src="https://gw.alipayobjects.com/zos/rmsportal/kbTlqDaubwgsBKFNoyGF.png" width="100%" style="max-width: 450px">
  <p>前后缓动动画结构图（自然的运动结构）</p>
</div>

<div>
  如对缓动函数不了解的可参考：<a href="https://easings.net/en" traget="_blank">缓动函数</a>。
</div>

> 注：使用缓动时也需要结合元素所附于什么物体或使用场景来使用，如卡通可用弹性缓动，如 `Elastic`, 稳重性比较强建议使用基本的缓动函数 `Cubic`。

### 动态效果

以下效果为基本的缓动效果，可查看以下示例，鼠标 hover 时自动播放动画。

> 需要注意：如果在可视窗口中消失的，属于点到点之间的运动，建议使用前后缓动，同理可视窗口中出现也一样。

```__react
import EaseExplain from '../site/theme/template/other/EaseExplain';
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
import EaseExplain from '../site/theme/template/other/EaseExplain';
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
import EaseExplain from '../site/theme/template/other/EaseExplain';
ReactDOM.render(<EaseExplain
  title="3.单物体可视范围内出场的运动"
  rightHide
  animation={{ left: 510, duration: 1000, repeat: -1, repeatDelay: 500, ease: 'easeInCubic' }}
>
  单物体出可视范围的运动，采用的是
  <span className="text-highlight"> ease-in </span>
</EaseExplain>, mountNode);
```

