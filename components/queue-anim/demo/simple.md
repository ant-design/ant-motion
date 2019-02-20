---
order: 0
title: 
  zh-CN: 简单的例子
  en-US: Simple example
---

## zh-CN
最简单的进场例子。

## en-US
The simplest example of entry.

````jsx
import QueueAnim from 'rc-queue-anim';

ReactDOM.render(
  <QueueAnim delay={300} className="queue-simple">
    <div key="a">依次进场</div>
    <div key="b">依次进场</div>
    <div key="c">依次进场</div>
    <div key="d">依次进场</div>
  </QueueAnim>
, mountNode);
````
