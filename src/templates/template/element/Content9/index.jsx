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
    className: 'content7',
  };

  getBlockChildren = (data) =>
    Object.keys(data).filter(key => key.match('block'))
      .sort((a, b) => {
        const aa = Number(a.replace(/[^0-9]/ig, ''));
        const bb = Number(b.replace(/[^0-9]/ig, ''));
        return aa - bb;
      })
      .map((key, i) => {
        const item = data[key];
        return (
          <li key={i} style={item.style} id={`${this.props.id}-${key.split('_')[1]}`}>
            <div className="icon" style={item.children.icon.style}>
              <img src={item.children.icon.children} width="100%" />
            </div>
            <h3 style={item.children.title.style}>{item.children.title.children}</h3>
            <p style={item.children.content.style}>{item.children.content.children}</p>
          </li>
        );
      });

  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    delete props.dataSource;
    const listChildren = this.getBlockChildren(dataSource);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${this.props.className}-wrapper`}
        style={dataSource[name].style}
      >
        <OverPack
          className={`content-template ${props.className}`}
          hideProps={{ h1: { reverse: true } }}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
            style={dataSource[`${name}_title`].style}
          >
            {dataSource[`${name}_title`].children}
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
            style={dataSource[`${name}_contentWrapper`].style}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
