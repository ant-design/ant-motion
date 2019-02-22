---
order: 5
title:
  zh-CN: 过渡
  en-US: Transition
---

> 过渡是更复杂的组合动画效果，组合动画是针对当前的元素进行的一个进出场效果，而过渡往往需要多个不同的动画来完成一段多个页面中间的过渡。

人脑灰质（Gray Matter）会对动态的事物（eg：移动、形变、色变等）保持敏感。 在界面中，适当的加入一些过渡效果，能让界面保持生动，同时也能增强用户和界面的沟通。

## 视觉连贯性三元素

- **Adding**:  新加入的信息元素应被告知如何使用，从页面转变的信息元素需被重新识别。

- **Receding**:  与当前页无关的信息元素应采用适当方式移除。

- **Normal**: 指那些从转场开始到结束都没有发生变化的信息元素。

## 视图变化时保持上下文

视图变化时保持上下文

### 页面间切换

在视图变化时保持上下文; 滑入与滑出: 可以有效构建虚拟空间。

<video src="https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4" loop="true" class="video"/>

### 传送带切换(走马灯)

可极大地扩展虚拟空间。

<video src="https://os.alipayobjects.com/rmsportal/GIutPgZMTyfFfrH.mp4" loop="true" class="video"/>


### 折叠窗口

在视图切换时，有助于保持上下文，同时也能拓展虚拟空间。

<video src="https://os.alipayobjects.com/rmsportal/ERKhqHlcHiCDSQu.mp4" loop="true" class="video"/>

## 解释刚刚发生了什么

将用户操作可视化, 来增强用户对操作行为的感知度, 同时也能对元素内容的认知;

在列表或表格中, 变更一个对象时, 加入对象出现与消失效果, 以提示用户所操作的行为。

### 对象增加

增加后, 用一个动画和背景色来区分新增元素, 过一段时间再恢复正常。

<video src="https://os.alipayobjects.com/rmsportal/FqkQMyFqNqielOw.mp4" class="video"/>

### 对象删除

删除后, 用移出的效果来做删除的效果。

<video src="https://os.alipayobjects.com/rmsportal/pnNkNIMoowmGUQy.mp4" class="video"/>

### 对象更改

用户更改了内容时, 在保存后, 在修改过的位置出现背景色, 表示该对象发生过变更, 然后背景色持续一断时间再消失, 恢复正常。

<video src="https://os.alipayobjects.com/rmsportal/XrUIWmsmOlEnZGc.mp4" class="video"/>

### 弹出框呼出

从页面的某个按钮呼出弹出框时, 弹框从按钮处呼起, 可提示用户弹框与按钮的关系。

<video src="https://os.alipayobjects.com/rmsportal/gSNilqbiXOufDXF.mp4" class="video"/>

## 改善感知性能

当无法有效提升『实际性能』时，可以考虑适当转移用户的注意力，来缩短某项操作的感知时间，改善感知性能。