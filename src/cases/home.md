# Home

- category: 页面示例
- order: 0
- chinese: 首页案例
- parentOrder: 3

---

首页（Display Page）一般是指当用户进入某个网站时浏览到的第一个页面，也可以当作着陆页（Landing Page）来吸引用户的注意。在此，我们归纳整理了几种最常见的展示类模板，可以用于灵活的搭配组合。

## 案例

```__react
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AutoResponsiveDemo from '../componentElement/cases/AutoResponsiveDemo';
const imgData = [
  { src: 'https://t.alipayobjects.com/images/T1nbhmXfphXXXXXXXX.jpg', width: 211, height: 535, href: '/template/?page=page/homeDemo1/' },
  { src: 'https://t.alipayobjects.com/images/T18HlmXllgXXXXXXXX.jpg', width: 211, height: 490, href: '#' },
  { src: 'https://t.alipayobjects.com/images/T1PrdmXjVhXXXXXXXX.jpg', width: 211, height: 490, href: '#' },
];

ReactDOM.render(<AutoResponsiveDemo imgArr={imgData} />, mountNode);
```
