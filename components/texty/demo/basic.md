---
order: 0
title: 基本效果
---

默认文字效果

<style>
/* 通用样式 */
.texty-demo {
  font-size: 32px;
  text-align: center;
}
</style>

```jsx
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

ReactDOM.render((
  <div className="texty-demo" style={{ marginTop: 64 }}>
    <Texty>Ant Motion</Texty>
  </div>
), mountNode);
```