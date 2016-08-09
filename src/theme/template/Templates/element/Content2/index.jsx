import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
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
    className: 'content2',
  };

  getDelay = (e) => {
    return e.index % 3 * 100 + Math.floor(e.index / 3) * 100 + 200;
  };

  render() {
    const props = { ...this.props };
    const { title, content } = props.dataSource.title;
    const children = Object.keys(props.dataSource).filter(key => key.match('block'))
      .map((key, i) => {
        const item = props.dataSource[key];
        return (<li
          key={i}
          style={{ left: `${i%3 * 33.33}%`, top: `${Math.floor(i / 3) * 200}px`}}
        >
          <TweenOne
            animation={{x: '-=10', opacity: 0, type: 'from'}}
            className="img" key="img"
          >
            <img src={item.iconImg} width="100%" />
          </TweenOne>
          <QueueAnim delay={100} leaveReverse key="text" className="text">
            <h1 key="h1">{item.title}</h1>
            <p key="p">{item.content}</p>
          </QueueAnim>
        </li>)
      });
    delete props.dataSource;
    delete props.name;
    const titleAnim = { y: '+=30', opacity: 0, type: 'from' };
    return (
      <div {...props} className="content-template-wrapper">
        <OverPack
          scrollName={this.props.name}
          className={`content-template ${props.className}`}
          hideProps={{ h1: { reverse: true }, p: { reverse: true } }}
        >
          <TweenOne key="h1" animation={titleAnim} component="h1">
            {title}
          </TweenOne>
          <TweenOne key="p" animation={titleAnim} component="p">
            {content}
          </TweenOne>
          <QueueAnim
            key="ul"
            component="ul"
            leaveReverse
            type="bottom"
            interval={0}
            delay={this.getDelay}
          >
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
