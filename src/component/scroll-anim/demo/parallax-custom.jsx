import React from 'react';
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

const mdString = `import QueueAnim from 'rc-queue-anim';

ReactDOM.render(<div style={{ overflow: 'hidden' }}>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          className="code-box-shape"
        />
      </div>
, mountNode);`;
const title = '自定义 parallax 的 playScale';
const content = '自定义 playScale，在屏幕中间开始播放，到 80％ 结束动画';

export default {
  Comp: Demo,
  mdString,
  title,
  content,
};
