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
    className: 'content1',
  };


  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    delete props.dataSource;
    return (
      <div {...props} className="content-template-wrapper" style={dataSource[name].style}>
        <OverPack
          className={`content-template ${props.className}`}
          hideProps={{ img: { reverse: true } }}
        >
          <QueueAnim
            type="left"
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            style={dataSource[`${name}_textWrapper`].style}
            id={`${this.props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${this.props.id}-title`} style={dataSource[`${name}_title`].style}>
              {dataSource[`${name}_title`].children}
            </h1>
            <p key="p" id={`${this.props.id}-content`} style={dataSource[`${name}_content`].style}>
              {dataSource[`${name}_content`].children}
            </p>
          </QueueAnim>
          <TweenOne
            key="img"
            animation={{ x: '+=30', opacity: 0, type: 'from' }}
            className={`${props.className}-img`}
            id={`${this.props.id}-imgWrapper`}
            style={dataSource[`${name}_imgWrapper`].style}
          >
            <img
              src={dataSource[`${name}_img`].children}
              id={`${this.props.id}-img`}
              style={dataSource[`${name}_img`].style}
            />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
