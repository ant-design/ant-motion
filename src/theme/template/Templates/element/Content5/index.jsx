import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import '../../assets/content.less';
import './index.less';

class Content extends React.Component {

  static contextTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string,
    style: React.PropTypes.object,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content5',
  };

  getBlockChildren = (data) => {
    return Object.keys(data).filter(key => key.match('block')).map((key, i) => {
      const item = data[key];
      return (<li key={key}>
        <span><img src={item.img} width="100%"/></span>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </li>)
    });
  };

  render() {
    const props = { ...this.props };
    const { title, img } = props.dataSource;
    const ulChildren = this.getBlockChildren(props.dataSource);
    delete props.dataSource;
    delete props.name;
    return (
      <div {...props} className="content-template-wrapper">
        <OverPack
          scrollName={this.props.name}
          className={`content-template ${props.className}`}
          hideProps={{ img: { reverse: true } }}
        >
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type="left"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
          >
            <h1 key="h1">{title.title}</h1>
            <p key="p">{title.content}</p>
            <QueueAnim component="ul" key="ul" type="left">
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={{ x: 30, opacity: 0, type: 'from' }}
          >
            <img src={img.img} width="100%" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
