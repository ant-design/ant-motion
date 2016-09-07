---
order: 1
title: 自定义 parallax 的 playScale
---

自定义 playScale，在屏幕中间开始播放，到 80％ 结束动画parallax-custom.md


```jsx
import { Parallax } from 'rc-scroll-anim';

class Demo extends React.Component {
  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          className="code-box-shape"
        />
      </div>
    );
  }
}
ReactDOM.render(<Demo/>, mountNode);
```
