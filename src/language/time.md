# Time

- category: 基本原则
- order: 0
- chinese: 时间栅格
- index: true
- parentOrder: 0

---

物体运动在时间栅格中具有不同运动速率和出场，动画停止与启动都不是瞬间完成的，因它需要一段缓冲的时间来加速或减速，因此当物体突然移动或停止，会显的很不自然。

```__react
import EaseExplain from '../componentElement/language/EaseExplain';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<EaseExplain
  animation={{
    left: 410, duration: 1000, repeat: -1,
    yoyo: true, repeatDelay: 500, ease: 'easeInOutCubic',
  }}
  title="1.单物体可视范围内点到点之间的运动"
>
  单物体可视范围内点到点之间的运动，采用的是
  <span className="text-highlight"> ease-in-out </span>
</EaseExplain>, mountNode);
```

```__react
import EaseExplain from '../componentElement/language/EaseExplain';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<EaseExplain
  title="2.单物体可视范围外进场的运动"
  leftHide
  animation={{left: 410, duration: 1000, repeat: -1,repeatDelay: 500, ease: 'easeOutCubic'}}
  circleStyle={{ left: -100 }}
>
  单物体进入可视范围的运动，采用的是
  <span className="text-highlight"> ease-out </span>
</EaseExplain>, mountNode);
```

```__react
import EaseExplain from '../componentElement/language/EaseExplain';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<EaseExplain
  title="3.单物体可视范围内出场的运动"
  rightHide
  animation={{ left: 510, duration: 1000, repeat: -1, repeatDelay: 500, ease: 'easeInCubic' }}
>
  单物体出可视范围的运动，采用的是
  <span className="text-highlight"> ease-in </span>
</EaseExplain>, mountNode);
```

```__react
import React from 'react';
import ReactDOM from 'react-dom';
import QueueDemo from '../componentElement/language/QueueDemo';
ReactDOM.render(<QueueDemo />, mountNode);
```
