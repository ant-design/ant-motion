---
order: 0
title: 简单的例子
---

最简单的进场例子。

````jsx
import QueueAnim from 'rc-queue-anim';

ReactDOM.render(
  <QueueAnim delay={500} className="queue-simple">
    <div key="a">依次进场</div>
    <div key="b">依次进场</div>
    <div key="c">依次进场</div>
    <div key="d">依次进场</div>
  </QueueAnim>
, mountNode);
````
