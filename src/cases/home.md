---
category: 页面示例
order: 0
chinese: 首页示例
parentOrder: 3
english: Home
---



首页（Display Page）一般是指当用户进入某个网站时浏览到的第一个页面，也可以当作着陆页（Landing Page）来吸引用户的注意。在此，我们归纳整理了几种最常见的展示类模板，可以用于灵活的搭配组合。

以下案例为单元素组合后的效果。

## 案例

```__react
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AutoResponsiveDemo from '../componentElement/cases/AutoResponsiveDemo';
const imgData = [
  { src: 'https://os.alipayobjects.com/rmsportal/YKUyqXLytHHdIBg.jpg', width: 300, height: 776, href: '/template/?page=page/homeDemo1/' },
  { src: 'https://os.alipayobjects.com/rmsportal/VTmsWNGxNqSHFQp.jpg', width: 300, height: 709, href: '/template/?page=page/homeDemo2/' },
  { src: 'https://os.alipayobjects.com/rmsportal/sqfxBJZKiCoWDmz.jpg', width: 300, height: 709, href: '/template/?page=page/homeDemo3/' },
];

ReactDOM.render(<AutoResponsiveDemo imgArr={imgData} />, mountNode);
```
