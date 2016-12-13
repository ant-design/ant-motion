import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Tabs from 'antd/lib/tabs';
import 'antd/lib/tabs/style';
import '../../../static/content.less';
import './index.less';

const TabPane = Tabs.TabPane;

class Content extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content6',
  };

  getBlockChildren = data =>
    Object.keys(data).filter(key => key.match('block'))
      .sort((a, b) => {
        const aa = Number(a.replace(/[^0-9]/ig, ''));
        const bb = Number(b.replace(/[^0-9]/ig, ''));
        return aa - bb;
      })
      .map((key, i) => {
        const item = data[key];
        return (
          <TabPane
            key={key}
            tab={(<span
              className={`${this.props.className}-tag`}
              id={`${this.props.id}-${key.split('_')[1]}`}
            >
              <i><img src={item.children.icon.children} width="100%" /></i>
              {item.children.tag.children}
            </span>)}
          >
            <TweenOne
              animation={{ x: -30, delay: 300, opacity: 0, type: 'from' }}
              className={`${this.props.className}-text`}
              style={item.children.content.style}
              dangerouslySetInnerHTML={{ __html: item.children.content.children }}
            />
            <TweenOne
              animation={{ x: 30, delay: 400, opacity: 0, type: 'from' }}
              className={`${this.props.className}-img`}
              style={item.children.img.style}
            >
              <img src={item.children.img.children} width="100%" />
            </TweenOne>
          </TabPane>
        );
      });

  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    delete props.dataSource;
    const tabsChildren = this.getBlockChildren(dataSource);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${this.props.className}-wrapper`}
        style={dataSource[name].style}
      >
        <OverPack
          className={`content-template ${props.className}`}
          hideProps={{ h1: { reverse: true }, p: { reverse: true } }}
          location={this.props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={200}
            id={`${props.id}-title`}
            style={dataSource[`${name}_title`].style}
          >
            {dataSource[`${name}_title`].children}
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
            style={dataSource[`${name}_content`].style}
          >
            {dataSource[`${name}_content`].children}
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
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
