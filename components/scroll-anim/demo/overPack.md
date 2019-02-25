---
order: 3
title: 
  zh-CN: OverPack 例子
  en-US: OverPack
---

## zh-CN
设置了在屏幕下方 50％ 时开始播放动画，子级可支持 `rc-queue-anim` `rc-animate` `rc-tween-one`。

## en-US
Set to start playing the animation at 50% below the screen, the child can support `rc-queue-anim` `rc-animate` `rc-tween-one`.

```jsx
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

class Demo extends React.Component {
  render() {
    return (
      <OverPack style={{ overflow: 'hidden', height: 200 }} >
        <TweenOne key="0" animation={{ opacity: 1 }}
          className="code-box-shape"
          style={{ opacity: 0, marginBottom: 10 }}
        />
        <QueueAnim key="queue"
          leaveReverse
          style={{ float: 'left', position: 'relative', left: '50%', marginLeft: -165 }}
        >
          <div key="a" className="code-box-shape queue-anim-demo" />
          <div key="b" className="code-box-shape queue-anim-demo" />
          <div key="c" className="code-box-shape queue-anim-demo" />
          <div key="d" className="code-box-shape queue-anim-demo" />
          <div key="e" className="code-box-shape queue-anim-demo" />
          <div key="f" className="code-box-shape queue-anim-demo" />
        </QueueAnim>
      </OverPack>
    );
  }
}
ReactDOM.render(<Demo/>, mountNode);
```
