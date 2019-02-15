import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import './principle.less';

const text = [
  { title: '自然', img: 'https://gw.alipayobjects.com/zos/rmsportal/LyTPSGknLUlxiVdwMWyu.gif', content: '自然运动规律，保证视觉连惯，让用户感知到动作是自然的' },
  { title: '高效', img: 'https://gw.alipayobjects.com/zos/rmsportal/SQOZVQVIossbXpzDmihu.gif', content: '尽量节省过渡的时间，快速完成过渡的动画效果' },
  { title: '克制', img: 'https://gw.alipayobjects.com/zos/rmsportal/OkIXkscKxywYLSrilPIf.gif', content: '做有意义的动效，不去做太多的修饰而干扰用户' },
];

export default class Principle extends React.Component {
  render() {
    const childrenToRender = text.map(item => (
      <Col key={item.title} sm={24} md={8}>
        <div className="principle">
          <div><img src={item.img} width="80%" alt="img" /></div>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
        </div>
      </Col>
    ));
    return (
      <Row gutter={{ md: 32, sm: 0 }} className="principle-wrapper">
        {childrenToRender}
      </Row>
    );
  }
}
