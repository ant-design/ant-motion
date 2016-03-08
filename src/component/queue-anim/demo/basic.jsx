import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Demo extends React.Component {
  render() {
    return (
      <QueueAnim>
        <div key="a">依次进场</div>
        <div key="b">依次进场</div>
        <div key="c">依次进场</div>
        <div key="d">依次进场</div>
        <div key="e">依次进场</div>
        <div key="f">依次进场</div>
      </QueueAnim>
    );
  }
}

const mdString = `import QueueAnim from 'rc-queue-anim';

ReactDOM.render(
  <QueueAnim delay={500}>
    <div key="a">依次进场</div>
    <div key="b">依次进场</div>
    <div key="c">依次进场</div>
    <div key="d">依次进场</div>
    <div key="e">依次进场</div>
    <div key="f">依次进场</div>
  </QueueAnim>
, mountNode);`;
const title = '默认';
const content = '最简单的进场例子。';

export default {
  Comp: Demo,
  mdString,
  title,
  content,
};
