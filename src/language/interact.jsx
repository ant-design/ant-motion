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
      <p>在列表或表格中, 新增了一个对象或删除了一个对象, 加入对象出现与消失效果, 以提示用户所操作的行为.</p>
      <VideoExplain src="https://os.alipayobjects.com/rmsportal/GjMxCeEUgvhekUf.mp4" />
      <h2>弹出框唤起</h2>
      <p>从页面的某个按钮唤起弹出框时, 弹框从按钮处唤起, 可提示用户弹框与按钮的关第;</p>
      <VideoExplain src="https://os.alipayobjects.com/rmsportal/bTSzkQpOGRTJmKk.mp4" />
    </div>);
  }
}

export default Interact;
