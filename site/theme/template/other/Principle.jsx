import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import './principle.less';

const text = [
  {
    title: '自然',
    titleEn: 'Natural',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/LyTPSGknLUlxiVdwMWyu.gif',
    content: '自然运动规律，保证视觉连贯，让用户感知到动作是自然的',
    contentEn: 'The animation should based on law of nature. This assures the animation is smooth by its nature and intuitive to its users.',
  },
  {
    title: '高效',
    titleEn: 'Efficient',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/SQOZVQVIossbXpzDmihu.gif',
    content: '尽量节省过渡的时间，快速完成过渡的动画效果',
    contentEn: 'The animation should have a transition time as minimal as possible so that it serves its purpose in the most effective way.',
  },
  {
    title: '克制',
    titleEn: 'Restrain',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/OkIXkscKxywYLSrilPIf.gif',
    content: '做有意义的动效，不去做太多的修饰而干扰用户',
    contentEn: 'The animation should be meaningful and justified. An over fancy animation will frustrate its users, and therefore should always be avoided.',
  },
];

export default class Principle extends React.Component {
  render() {
    const { locale } = this.props;
    const isEnUs = locale === 'en-US';
    const childrenToRender = text.map((item) => (
      <Col key={item.title} sm={24} md={8}>
        <div className="principle">
          <div><img src={item.img} width="80%" alt="img" /></div>
          <h4>{item[isEnUs ? 'titleEn' : 'title']}</h4>
          <p>{item[isEnUs ? 'contentEn' : 'content']}</p>
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
