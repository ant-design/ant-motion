---
order: 0
title: Parallax 示例
---

随滚动来播放动画


```jsx
import { Parallax } from 'rc-scroll-anim';

class Demo extends React.Component {
  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <Parallax
          animation={{ x: 0 }}
          style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
          className="code-box-shape"
        />
        <Parallax
          animation={{ scale: 1 }}
          style={{ transform: 'scale(0)', margin: '10px auto' }}
          className="code-box-shape"
        />
        <Parallax
          animation={{ r: 360 }}
          style={{ margin: '10px auto' }}
          className="code-box-shape"
        />
      </div>
    );
  }
}
ReactDOM.render(<Demo/>, mountNode);
```
