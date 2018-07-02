---
order: 2
chinese: 层级空间
english: Space
category: 设计语言
---

现实空间里，物体存在远小近大的原则，运动则有远慢近快；例如汽车在公路上行驶，离汽车越近的物体，移动速度越接近汽车的速率。所以以汽车点为X轴原点，那离原点越远Z轴越大时，速度就越慢。

那么动效设计中同样存在这个原则，Z轴向的空间距离来影响动画效果，可以使用时间的快慢或幅度的大小来体现。

## 空间示意图

<img src="https://zos.alipayobjects.com/rmsportal/wjBQyXjKSMqJJlf.png" width="100%" class="content-img"/>

## 层级与时间

以下时间为示例，组件动画时间按比例递增。

<img src="https://zos.alipayobjects.com/rmsportal/bVutyJfjzrRzFaV.jpg" width="100%" class="content-img"/>

## banner视差示意图

如果 banner 里加入跟随鼠标移动,加入空间层次，有效的给每层元素不同的参数，就能摸拟现实的视差效果。

<img src="https://zos.alipayobjects.com/rmsportal/IIelDRtkjpRAuvX.png" width="100%" class="content-img"/>

### 动态效果

此效果由 banner-anim 实现。

<video src="https://gw.alipayobjects.com/os/rmsportal/EvKNxwOYRGHOqkvwzQGi.mp4" loop="true" class="video"/>