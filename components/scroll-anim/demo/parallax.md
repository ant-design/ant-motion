---
order: 0
title: 
  zh-CN: Parallax 示例
  en-US: Parallax
---

## zh-CN
随滚动来播放动画

## en-US
Follow the scroll to play the animation.

```jsx
import { Parallax } from 'rc-scroll-anim';

class Demo extends React.Component {
  render() {
    return (
      <div >
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
          animation={{ rotate: 360 }}
          style={{ margin: '10px auto' }}
          className="code-box-shape"
        />
      </div>
    );
  }
}
ReactDOM.render(<Demo/>, mountNode);
```
