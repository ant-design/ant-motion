import React from 'react';

class Grid extends React.Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {

  }

  render() {
    return (<div>
      <h1>大气空间</h1>
      <i className="dotted-line" />
      <p className="text">动效设计中存在Z轴向的空间距离来影响动画效果</p>

    </div>);
  }
}

export default Grid;
