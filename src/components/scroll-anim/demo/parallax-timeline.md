---
order: 3
cols: 1
title: parallax 的时间轴动画
---

可配置多个动画，然后再配合 playScale 完成滚动动画

```jsx
import { Parallax } from 'rc-scroll-anim';

class Demo extends React.Component {
  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <Parallax
          animation={[
            { x: 0, opacity: 1, playScale: [0, 0.2] },
            { y: 20, playScale: [0, 0.3] },
            { filter: 'blur(10px)', playScale: [0, 0.5] },
          ]}
          style={{ transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0 }}
          className="code-box-shape"
        />
      </div>
    );
  }
}
ReactDOM.render(<Demo/>, mountNode);
```
