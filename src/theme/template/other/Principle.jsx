import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import './principle.less';

const text = [
  { title: '自然', content: '自然的运动规律，保证视觉的连惯，让用户感知到这个动作是成立的。' },
  { title: '高效', content: '尽量节省过渡的时间，快速完成过渡的动画效果。' },
  { title: '克制', content: '做有意义的动效，不去做太多的修饰和干扰用户。' },
];

export default class Principle extends React.Component {
  render() {
    const childrenToRender = text.map(item => (
      <Col key={item.title} span={8} >
        <div className="principle">
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      </Col>
    ));
    return (
      <Row gutter={32} className="principle-wrapper">
        {childrenToRender}
      </Row>
    );
  }
}
