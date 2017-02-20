import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import '../../../static/content.less';
import './index.less';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e.index % 3 * 100 + Math.floor(e.index / 3) * 100 + 200;

  render() {
    const props = { ...this.props };
    const dataSource = props.dataSource;
    const isMode = props.isMode;
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    delete props.dataSource;
    delete props.isMode;
    const children = Object.keys(dataSource).filter(key => key.match('block'))
      .sort((a, b) => {
        const aa = Number(a.replace(/[^0-9]/ig, ''));
        const bb = Number(b.replace(/[^0-9]/ig, ''));
        return aa - bb;
      })
      .map((key, i) => {
        const item = dataSource[key];
        const childrenObj = item.children;
        const id = key.split('_')[1];
        const left = isMode ? 'auto' : `${i % 3 * 33.33}%`;
        const top = isMode ? 'auto' : `${Math.floor(i / 3) * 200}px`;
        const childrenAnim = { x: '+=10', opacity: 0, type: 'from', delay: 100, ease: 'easeOutQuad' };
        return (<li
          key={i}
          style={{ left, top }}
          id={`${props.id}-${id}`}
        >
          <TweenOne
            animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            className="img"
            key="img"
          >
            <img src={childrenObj.icon.children} width="100%" />
          </TweenOne>
          <div className="text">
            <TweenOne key="h1" animation={childrenAnim} component="h1">
              {childrenObj.title.children}
            </TweenOne>
            <TweenOne key="p" animation={{ ...childrenAnim, delay: 200 }} component="p">
              {childrenObj.content.children}
            </TweenOne>
          </div>
        </li>);
      });
    const titleAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          hideProps={{ h1: { reverse: true }, p: { reverse: true } }}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={titleAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
            {dataSource[`${name}_title`].children}
          </TweenOne>
          <TweenOne
            key="p"
            animation={titleAnim}
            component="p"
            id={`${props.id}-titleContent`}
          >
            {dataSource[`${name}_titleContent`].children}
          </TweenOne>
          <QueueAnim
            key="ul"
            component="ul"
            leaveReverse
            type="bottom"
            interval={[isMode ? 50 : 0, 0]}
            delay={[isMode ? 0 : this.getDelay, 0]}
          >
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
