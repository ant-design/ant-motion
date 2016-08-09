import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
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
    className: 'content4',
  };

  getChildrenToRender = (data) => {
    return Object.keys(data).filter(key => key.match('block')).map((key, i) => {
      const item = data[key];
      const delay = i % 4 * 100 + Math.floor(i / 4) * 100 + 300;
      return (<li key={key}>
        <div className="content-wrapper">
          <span><img src={item.img} height="100%" /></span>
          <p>{item.content}</p>
        </div>
      </li>)
    });
  };

  getEnterAnim = (e) => {
    const index = e.index;
    const delay = index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const { title, content } = props.dataSource.title;
    const childrenToRender = this.getChildrenToRender(props.dataSource);
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
            reverseDelay={300}
          >
            {title}
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200 }}
            component="p"
            key="p"
            reverseDelay={200}
          >
            {content}
          </TweenOne>
          <TweenOneGroup
            className={`${props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={this.getEnterAnim}
            leave={{ y: '+=30', opacity: 0 }}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
