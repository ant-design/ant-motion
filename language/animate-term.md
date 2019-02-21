---
order: 6
title:
  zh-CN: 动画术语
  en-US: animate term
category: 
  zh-CN: 动效参数
  en-US: TweenOne param
---

## 动画基本参数术语说明

以下描述以 tween-one 里的可支持 style 动画参数来说明动画基本术语。

动画默认参数: duration: 450毫秒, ease: 'easeInOutQuad'; 以下文本中出现的`到`为默认动画。

## 基本 style 可动画参数

|     参数名称       |    	说明     |
|-------------------|---------------------|
|   width           |  `{ width: 100 }` 元素当前宽度到 100px |
|   maxWidth        |  `{ maxWidth: 100 }` 元素当前最大宽度到 100px |
|   minWidth        |  `{ minWidth: 100 }` 元素当前最小宽度到 100px |
|   height          |  `{ height: 100 }` 元素当前高度到 100px |
|   maxHeight       |  `{ maxHeight: 100 }` 元素当前最大高度到 100px |
|   minHeight       |  `{ minHeight: 100 }` 元素当前最小高度到 100px |
|   lineHeight      |  `{ lineHeight: 100 }` 区块行高到 100px |
|   opacity         |  `{ opacity: 0 }` 元素当前透明度到 0 |
|   top             |  `{ top: 100 }` 元素当前顶部距离到 100px, 需配合 `position: relative | absolute` |
|   right           | `{ right: 100 }` 元素当前右部距离到 100px, 需配合 `position: relative | absolute`  |
|   bottom          | `{ bottom: 100 }` 元素当前下部距离到 100px, 需配合 `position: relative | absolute`  |
|   left            | `{ left: 100 }` 元素当前左部距离到 100px, 需配合 `position: relative | absolute`  |
|   marginTop       | `{ marginTop: 100 }` 元素当前顶部外边距离到 100px  |
|   marginRight     | `{ marginRight: 100 }` 元素当前右部外边距离到 100px  |
|   marginBottom    | `{ marginBottom: 100 }` 元素当前下部外边距离到 100px  |
|   marginLeft      | `{ marginLeft: 100 }` 元素当前左部外边距离到 100px  |
|   paddingTop      | `{ paddingTop: 100 }` 元素当前顶部内边距离到 100px  |
|   paddingRight    | `{ paddingRight: 100 }` 元素当前右部内边距离到 100px  |
|   paddingBottom   | `{ paddingBottom: 100 }` 元素当前下部内边距离到 100px  |
|   paddingLeft     | `{ paddingLeft: 100 }` 元素当前左部内边距离到 100px  |
|   color           | `{ color: '#FFFFFF' }` 元素当前文字颜色到白色   |
|  backgroundColor  | `{ backgroundColor: '#FFFFFF' }` 元素当前背景颜色到白色 |
|   borderWidth     | `{ borderWidth: 2 }` 元素当前边框宽度到 2px，同样可用 `borderTopWidth` `borderRightWidth` `borderBottomWidth` `borderLeftWidth` |
|   borderRadius    | `{ borderRadius: 5 }` 元素当前圆角到 5px, 同上, 同样可用 `上 左 下 右`  |
|   borderColor     | `{ borderColor: '#FFFFFF' }` 元素当前边框颜色到白色 |
|   boxShadow       | `{ boxShadow: '0 0 10px #000' }` 元素当前阴影模糊到 10px |
|   textShadow      | `{ textShadow: '0 0 10px #000' }` 元素当前文字内容阴影模糊到 10px |

## transform 参数

|     参数名称       |    	说明     |
|-------------------|---------------------|
|   translateX / x  | `{ translateX: 10 } or { x: 10 } => transform: translateX(10px)`, x 方向的位置移动 10px |
|   translateY / y  | `{ translateY: 10 } or { y: 10 } => transform: translateY(10px)`, y 方向的位置移动 10px |
|   translateZ / z  | `{ translateZ: 10 } or { z: 10 } => transform: translateZ(10px)`, z 方向的位置移动 10px |
|   rotate          | `{ rotate: 10 } => transform: rotate(10deg)` 元素以 transformOrigin 的中心点旋转 10deg |
|   rotateX         | `{ rotateX: 10 } => transform: rotateX(10deg)` 元素以 transformOrigin 的中心点向 X 旋转 10deg |
|   rotateY         | `{ rotateY: 10 } => transform: rotateY(10deg)` 元素以 transformOrigin 的中心点向 Y 旋转 10deg |
|   scale           | `{ scale: 0 } => transform: scale(0)` 元素以 transformOrigin 的中心点缩放到 0, 不改变元素的宽高 |
|   scaleX          | `{ scaleX: 0 } => transform: scaleX(0)` 元素以 transformOrigin 的中心点 X 缩放到 0, 不改变元素的宽高  |
|   scaleY          | `{ scaleY: 0 } => transform: scaleY(0)` 元素以 transformOrigin 的中心点 Y 缩放到 0, 不改变元素的宽高  |
|   transformOrigin | `{ transformOrigin: '50px 50px'}` 元素当前中心点到 x: 50px y: 50px; |

## filter 参数 

|     参数名称       |    	说明     |
|-------------------|---------------------|
|   grayScale       | `{ grayScale: 1 }` 元素 filter 灰度到 100%; |
|   sepia           | `{ sepia: 1 }` 元素 filter 颜色到 100%; |
|   hueRotate       | `{ hueRotate: '90deg' }` 元素 filter 色相盘旋转 90 度; |
|   invert          | `{ invert: 1 }` 元素 filter 色值反相到 100% |
|   brightness      | `{ brightness: 2 }` 元素 filter 亮度到 200% |
|   contrast        | `{ contrast: 2 }` 对比度到 200% |
|   saturate        | `{ saturate: 2 }` 饱和度到 200% |
|   blur            | `{ blur: '20px' }` 模糊到 20px |

## svg 参数

任何数值为 number 的参数，此处不添加表格，如有需求可查看 [svg 教程](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial)；

> 以上为 tween-one 里的动画可支持参数，如有其它样式可动画或以上有误，烦请 PR 来修改。。
