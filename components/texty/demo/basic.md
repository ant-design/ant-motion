---
order: 0
title: 
  zh-CN: 基本效果
  en-US: Basic
---

## zh-CN
默认文字效果

## en-US
Default text effect.

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