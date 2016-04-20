---
category: 单元素示例
order: 1
chinese: banner示例
parentOrder: 2
english: Banner
---



首页首屏效果展示，一般由一张或多张图片加上网站的标语组成的 banner 部分。

动画样式可等待 bannerAnim 的完成来设定，现在暂时只用 tweenOne 和 queueAnim 完成的简易的效果展示。

> 多页切换用的是 react-slick，页面切换出去后回来会卡死，暂不要使用，等 baanerAnim 完成。

## 案例

```__react
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AutoResponsiveDemo from '../componentElement/cases/AutoResponsiveDemo';
const imgData = [
  { src: 'https://os.alipayobjects.com/rmsportal/pBNHrhEWePeTCCt.jpg', width: 300, height: 175, href: '/template/?page=element/banner1/' },
  { src: 'https://os.alipayobjects.com/rmsportal/qEySxOcxYwfVWjg.jpg', width: 300, height: 175, href: '/template/?page=element/banner2/' },
  { src: 'https://os.alipayobjects.com/rmsportal/TOEWsleNhiSGLrn.jpg', width: 300, height: 175, href: '/template/?page=element/banner3/' },
];

ReactDOM.render(<AutoResponsiveDemo imgArr={imgData} />, mountNode);
```

