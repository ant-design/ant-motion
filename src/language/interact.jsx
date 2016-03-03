import React from 'react';
import VideoExplain from './VideoExplain';

class Interact extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (<div>
      <h1>增强示意</h1>
      <i className="dotted-line" />
      <p className="text">将用户操作可视化, 来增强用户对操作行为的感知度, 同时也能对元素内容的认知;</p>
      <h2>操作后所发生的事件</h2>
      <p>在列表或表格中, 变更一个对象时, 加入对象出现与消失效果, 以提示用户所操作的行为.</p>
      <h3>对象增加</h3>
      <p>增加后, 用一个动画和背景色来区分新增元素, 过一段时间再恢复正常</p>
      <VideoExplain src="https://os.alipayobjects.com/rmsportal/FqkQMyFqNqielOw.mp4" />
      <h3>对象删除</h3>
      <p>删除后, 用移出的效果来做删除的效果.</p>
      <VideoExplain src="https://os.alipayobjects.com/rmsportal/pnNkNIMoowmGUQy.mp4" />
      <h3>对象更改</h3>
      <p>用户更改了内容时, 在保存后, 在修改过的位置出现背景色, 表示该对象发生过变更, 然后背景色持续一断时间再消失, 恢复正常</p>
      <VideoExplain src="https://os.alipayobjects.com/rmsportal/XrUIWmsmOlEnZGc.mp4" />
      <h2>弹出框唤起</h2>
      <p>从页面的某个按钮唤起弹出框时, 弹框从按钮处唤起, 可提示用户弹框与按钮的关第;</p>
      <VideoExplain src="https://os.alipayobjects.com/rmsportal/gSNilqbiXOufDXF.mp4" />
    </div>);
  }
}

export default Interact;
