import React from 'react';
import VideoExplain from './VideoExplain';

class Transition extends React.Component {
  render() {
    return (
      <div>
        <h1>巧用过渡</h1>
        <i className="dotted-line" />
        <p>人脑灰质（Gray Matter）会对动态的事物（eg：移动、形变、色变等）保持敏感。
          在界面中，适当的加入一些过渡效果，能让界面保持生动，同时也能增强用户和界面的沟通。
        </p>
        <h2>视觉连贯性三元素</h2>
        <ul className="list">
          <li><p>Adding: 新加入的信息元素应被告知如何使用，从页面转变的信息元素需被重新识别。</p></li>
          <li><p>Receding: 与当前页无关的信息元素应采用适当方式移除。</p></li>
          <li><p>Normal: 指那些从转场开始到结束都没有发生变化的信息元素。</p></li>
        </ul>
        <h2>承上启下（视图变化时保持上下文)</h2>
        <h3>页面间切换</h3>
        <span>在视图变化时保持上下文; 滑入与滑出: 可以有效构建虚拟空</span>
        <VideoExplain src="https://os.alipayobjects.com/rmsportal/MSNqVuabLgPfbxM.mp4" />
        <h3>传送带切换(走马灯)</h3>
        <span>可极大地扩展虚拟空间。</span>
        <VideoExplain src="https://os.alipayobjects.com/rmsportal/MSNqVuabLgPfbxM.mp4" />
        <h3>折叠窗口</h3>
        <span>在视图切换时，有助于保持上下文，同时也能拓展虚拟空间。</span>
        <VideoExplain src="https://os.alipayobjects.com/rmsportal/GjMxCeEUgvhekUf.mp4" />
        <h2></h2>
      </div>
    );
  }
}
export default Transition;
