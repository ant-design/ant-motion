import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';

export default class Page4 extends React.Component {
  static contextTypes = {
    tweenAnim: React.PropTypes.object,
  };

  static defaultProps = {
    tweenAnim: {},
  };

  render() {
    return (<OverPack
      className="home-content page4 vh"
      playScale={0.8}
      hideProps={{ video: { reverse: true } }}
      scrollName="page4"
    >
      <QueueAnim
        key="text"
        className="page-text white-text"
        type="bottom"
        leaveReverse
      >
        <h1 key="h1">自由搭配模版(模块正在忧化中)</h1>
        <p key="p">
          这是以 Ant Motion 的 React 组件遵从 Ant Design 的视觉规范来完成的 demo 页面，可灵活又快速的配置出你想要的首页模板。
          这里主要提供了单元素示例与配置完后的整页示例。
        </p>
      </QueueAnim>
      <TweenOne
        animation={{ delay: 200, ...this.props.tweenAnim}}
        className="video-button"
        key="video"
      >
        <Icon type="caret-right" />
      </TweenOne>
      <QueueAnim
        key="content"
        type="bottom"
        leaveReverse
        delay={[300, 0]}
        className="depict white-text"
      >
        <div className="depict-list" key="0">
          <i><img src="https://zos.alipayobjects.com/rmsportal/MxYqWrcpLBrNGcy.svg" width="100%" /></i>
          <p>模板丰富</p>
          <p>已有丰富的网站模板，你只需从中选择适合你的</p>
        </div>
        <div className="depict-list" key="1">
          <i><img src="https://zos.alipayobjects.com/rmsportal/PekwJXceXmQUbzJ.svg" width="100%" /></i>
          <p>自由搭配</p>
          <p>可以更换模版中的项目，配置出专属于你的网站</p>
        </div>
        <div className="depict-list" key="2">
          <i><img src="https://zos.alipayobjects.com/rmsportal/fbhuDaYgBGMzTUm.svg" width="100%" /></i>
          <p>一键导出</p>
          <p>当你配置完成你的网站，只需一键就能导出 JSX</p>
        </div>
      </QueueAnim>
    </OverPack>);
  }
}
