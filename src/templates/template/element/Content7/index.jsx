import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import '../../../static/content.less';
import './index.less';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content5',
  };

  getBlockChildren = data =>
    Object.keys(data).filter(key => key.match('block'))
      .sort((a, b) => {
        const aa = Number(a.replace(/[^0-9]/ig, ''));
        const bb = Number(b.replace(/[^0-9]/ig, ''));
        return aa - bb;
      })
      .map((key) => {
        const item = data[key];
        return (<li
          key={key}
          style={item.style}
          id={`${this.props.id}-${key.split('_')[1]}`}
        >
          <span style={item.children.img.style}>
            <img src={item.children.img.children} width="100%" />
          </span>
          <h2 style={item.children.title.style}>{item.children.title.children}</h2>
          <p style={item.children.content.style}>{item.children.content.children}</p>
        </li>);
      });


  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    const ulChildren = this.getBlockChildren(dataSource);
    delete props.dataSource;
    return (
      <div {...props} className="content-template-wrapper" style={dataSource[name].style}>
        <OverPack
          className={`content-template ${props.className}`}
          hideProps={{ img: { reverse: true } }}
        >
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type="left"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
            style={dataSource[`${name}_textWrapper`].style}
          >
            <h1
              key="h1"
              id={`${props.id}-title`}
              style={dataSource[`${name}_title`].style}
            >
              {dataSource[`${name}_title`].children}
            </h1>
            <p
              key="p"
              id={`${props.id}-content`}
              style={dataSource[`${name}_content`].style}
            >
              {dataSource[`${name}_content`].children}
            </p>
            <QueueAnim component="ul" key="ul" type="left">
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={{ x: 30, opacity: 0, type: 'from' }}
            id={`${props.id}-img`}
            style={dataSource[`${name}_img`].style}
          >
            <img src={dataSource[`${name}_img`].children} width="100%" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
