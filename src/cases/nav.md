# Nav

- category: 单元素示例
- order: 0
- chinese: 导航案例
- parentOrder: 2

---

顶部导航的样式, 一般由 logo 与文字组成, 在布局方面为左右型式, 所以在动效方面考虑用左右汇集;

目前就一个案例;

## 案例


```__react
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AutoResponsiveDemo from '../componentElement/cases/AutoResponsiveDemo';
const imgData = [
  { src: 'https://os.alipayobjects.com/rmsportal/HwKUkMryOFmsyhk.jpg', width: 250, height: 155, href: '/template/?page=element/nav1/' },
];

ReactDOM.render(<AutoResponsiveDemo imgArr={imgData} />, mountNode);
```
