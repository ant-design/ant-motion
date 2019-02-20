---
order: 3
title:
  zh-CN: 空间
  en-US: Space
---

现实空间里，物体存在远小近大的原则，运动则有远慢近快。在动效设计时，处理和空间相关的话题时，我们需要考虑两方面的因素：

- **视差：**例如汽车在公路上行驶，离汽车越近的物体，移动速度越接近汽车的速率。以行进中的汽车为例，汽车所在的点为 X 轴的基准点，离基准点越远时，速度就越慢。动效设计中同样存在这个原则，元素的空间距离会影响动画效果，从而影响动效设计的决策。
- **大小：**遵循远处的物体小，近处的物体大的原则。


## 空间示意图

<img src="https://zos.alipayobjects.com/rmsportal/wjBQyXjKSMqJJlf.png" width="80%" class="content-img"/>


## 视差

在下面这个案例中，考虑动效设计时，首先应将界面中涉及到动画的元素进行分层，为界面中不同的元素假设不同的距离。而鼠标所在位置作为基准点。建立了这样的空间层次之后，有效地给每层元素赋予不同的参数，就能摸拟自然的视差效果。

<img src="https://zos.alipayobjects.com/rmsportal/IIelDRtkjpRAuvX.png" width="100%" class="content-img"/>

### 动态效果

以距离的差距来体现视差。

<video src="https://gw.alipayobjects.com/os/rmsportal/EvKNxwOYRGHOqkvwzQGi.mp4" loop="true" class="video"/>

<br/>


以时间的差距来体现视差，详细查看动效展示里的[详细说明切换](/exhibition/demo/detail-switch)。

<video src="https://gw.alipayobjects.com/os/rmsportal/GLOykZbKTlTDpzNDwNOq.mp4" loop="true" class="video"/>

## 大小

在下面这个案例中，包含两层抽屉式的的界面展开，遵循远小近大的原则，当近处层级出现时，底部的层级做适当的缩小，体现出空间感。

<video src="https://gw.alipayobjects.com/os/rmsportal/qpTkwUkpOmlbaEVuHDgj.mp4" loop="true" class="video"/>