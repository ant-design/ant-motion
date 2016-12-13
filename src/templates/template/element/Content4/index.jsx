import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import '../../../static/content.less';
import './index.less';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e.index % 3 * 100 + Math.floor(e.index / 3) * 100 + 200;

  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    delete props.dataSource;
    const children = Object.keys(dataSource).filter(key => key.match('block'))
      .sort((a, b) => {
        const aa = Number(a.replace(/[^0-9]/ig, ''));
        const bb = Number(b.replace(/[^0-9]/ig, ''));
        return aa - bb;
      })
      .map((key, i) => {
        const item = dataSource[key];
        const childrenObj = item.children;
        const styleObj = item.style || {};
        const id = key.split('_')[1];
        return (<li
          key={i}
          style={{ left: `${i % 3 * 33.33}%`, top: `${Math.floor(i / 3) * 200}px`, ...styleObj }}
          id={`${this.props.id}-${id}`}
        >
          <TweenOne
            animation={{ x: '-=10', opacity: 0, type: 'from' }}
            className="img"
            key="img"
            style={childrenObj.icon.style}
          >
            <img src={childrenObj.icon.children} width="100%" />
          </TweenOne>
          <QueueAnim delay={100} leaveReverse key="text" className="text">
            <h1 key="h1" style={childrenObj.title.style}>{childrenObj.title.children}</h1>
            <p key="p" style={childrenObj.content.style}>{childrenObj.content.children}</p>
          </QueueAnim>
        </li>);
      });
    const titleAnim = { y: '+=30', opacity: 0, type: 'from' };
    return (
      <div {...props} className="content-template-wrapper" style={dataSource[name].style}>
        <OverPack
          className={`content-template ${props.className}`}
          hideProps={{ h1: { reverse: true }, p: { reverse: true } }}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={titleAnim}
            component="h1"
            id={`${this.props.id}-title`}
            style={dataSource[`${name}_title`].style}
          >
            {dataSource[`${name}_title`].children}
          </TweenOne>
          <TweenOne
            key="p"
            animation={titleAnim}
            component="p"
            id={`${this.props.id}-titleContent`}
            style={dataSource[`${name}_titleContent`].style}
          >
            {dataSource[`${name}_titleContent`].children}
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
