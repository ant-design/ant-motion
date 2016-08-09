import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Tabs from 'antd/lib/tabs';
import 'antd/lib/tabs/style';
const TabPane = Tabs.TabPane;

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
    className: 'content6',
  };

  getBlockChildren = (data) => {
    return Object.keys(data).filter(key => key.match('block')).map((key, i) => {
      const item = data[key];
      const title = item.contentTitle.split('\n');
      const content = item.content.split('\n');
      const children = content.map((str, ii) => {
        return (
          <div key={ii}>
            <h3>{title[ii]}</h3>
            <p>{str}</p>
          </div>
        )
      });
      return (
        <TabPane
          key={key}
          tab={(<span className={`${this.props.className}-tag`}>
            <i><img src={item.icon} width="100%"/></i>
            {item.tag}
          </span>)}>
          <QueueAnim delay={300} className={`${this.props.className}-text`} type="left">
            {children}
          </QueueAnim>
          <TweenOne
            animation={{ x: 30, delay: 400, opacity: 0, type: 'from'}}
            className={`${this.props.className}-img`}
          >
            <img src={item.img} width="100%" />
          </TweenOne>
        </TabPane>
      )
    });
  }

  render() {
    const props = { ...this.props };
    const { title } = props.dataSource;
    const tabsChildren = this.getBlockChildren(props.dataSource);
    delete props.dataSource;
    delete props.name;
    return (
      <div {...props} className="content-template-wrapper">
        <OverPack
          scrollName={this.props.name}
          className={`content-template ${props.className}`}
          hideProps={{ h1: { reverse: true }, p: { reverse: true } }}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={200}
          >
            {title.title}
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
          >
            {title.content}
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from'}}
            leave={{ y: 30, opacity: 0 }}
            className={`${props.className}-tabs`}
          >
            <Tabs key="tabs">
              {tabsChildren}
            </Tabs>
          </TweenOne.TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
