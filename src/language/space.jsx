import React from 'react';

class Grid extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (<div>
      <h1>大气空间</h1>
      <i className="dotted-line" />
      <p className="text">动效设计中存在Z轴向的空间距离来影响动画效果</p>
      <sapn className="text">现实空间里，物体存在远小近大的原则，运动则有远慢近快；</sapn>
      <span >如汽车在公路上行驶，离汽车越近的物体，移动速度越接近汽车的速率。所以以汽车点为X轴原点，那离原点越远Z轴越大时，
        速度就越慢。</span>
      <h2>空间示意图</h2>
      <p className="content-img">
        <img src="https://os.alipayobjects.com/rmsportal/PyplJuqwiGbBcnm.jpg" width="100%" />
      </p>
      <h2>层级与时间</h2>
      <span className="text">以下时间为示例，组件动画时间按比例递增。</span>
      <p className="content-img">
        <img src="https://os.alipayobjects.com/rmsportal/ysDJkrAfhPWWFZH.png" width="100%" />
      </p>
      <h2>banner 视差示意图</h2>
      <span className="text">如果 banner 里加入跟随鼠标移动,
        加入空间层次，有效的给每层元素不同的参数，摸拟现实的视差效果。</span>
      <p className="content-img">
        <img src="https://os.alipayobjects.com/rmsportal/toYrPymhuHeZSWv.jpg" width="100%" />
      </p>
    </div>);
  }
}

export default Grid;
