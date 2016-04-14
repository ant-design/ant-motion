# Content

- category: 单元素示例
- order: 2
- chinese: 内容示例
- parentOrder: 2

---

首页首屏下面的信息展示布局。

提供常见的布局与动画效果，可拼接形式组合成页面。

## 案例

```__react
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AutoResponsiveDemo from '../componentElement/cases/AutoResponsiveDemo';
const imgData = [
  { src: 'https://os.alipayobjects.com/rmsportal/UCdkxnpLSjoCbCa.jpg', width: 300, height: 175, href: '/template/?page=element/page1/' },
  { src: 'https://os.alipayobjects.com/rmsportal/ilRAaLLWLByFnbj.jpg', width: 300, height: 175, href: '/template/?page=element/page2/' },
  { src: 'https://os.alipayobjects.com/rmsportal/hudULuLDMJXZjLU.jpg', width: 300, height: 175, href: '/template/?page=element/page3/' },
  { src: 'https://os.alipayobjects.com/rmsportal/ALoKboYgBBNQLnb.jpg', width: 300, height: 175, href: '/template/?page=element/page4/' },
];

ReactDOM.render(<AutoResponsiveDemo imgArr={imgData} />, mountNode);
```
