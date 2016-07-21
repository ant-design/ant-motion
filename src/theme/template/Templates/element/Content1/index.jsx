import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';

class Content extends React.Component {

  static contextTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string,
    style: React.PropTypes.object,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content1',
    dataSource: {
      block1: {
        img: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
        title: '分布式中间件',
        content: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。' +
        '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
      },
    },
  };


  render() {
    const props = { ...this.props };
    const { img, title, content } = props.dataSource.block1;
    delete props.dataSource;
    delete props.name;
    return (
      <div {...props} className={`${props.className}-wrapper`}>
        <OverPack
          scrollName={this.props.name}
          className={props.className}
          hideProps={{ img: { reverse: true } }}
        >
          <QueueAnim
            type="left"
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
          >
            <h1 key="h1">{title}</h1>
            <p key="p">{content}</p>
          </QueueAnim>
          <TweenOne
            key="img"
            animation={{ x: '+=30', opacity: 0, type: 'from' }}
            className={`${props.className}-img`}
          >
            <img height="100%" src={img} />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
