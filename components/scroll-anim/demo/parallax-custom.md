---
order: 1
title: 
  zh-CN: 自定义 Parallax 的 playScale
  en-US: Custom Parallax playScale
---

## zh-CN
自定义 playScale，在屏幕中间开始播放，到 80％ 结束动画。

## en-US
Customize playScale, start playing in the middle of the screen, and end the animation at 80%.

```jsx
import { Parallax } from 'rc-scroll-anim';

class Demo extends React.Component {
  render() {
    return (
      <div>
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
