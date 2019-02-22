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
    <div key="a">Queue Entering</div>
    <div key="b">Queue Entering</div>
    <div key="c">Queue Entering</div>
    <div key="d">Queue Entering</div>
  </QueueAnim>
, mountNode);
````
