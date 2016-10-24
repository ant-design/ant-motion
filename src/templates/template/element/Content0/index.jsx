import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import '../../../static/content.less';
import './index.less';

class Content extends React.Component {

  static propTypes = {
    name: React.PropTypes.string,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content0',
  };


  render() {
    const props = { ...this.props };
    const { img, title, content } = this.props.dataSource.block1;
    delete props.dataSource;
    delete props.name;
    return (
      <div {...props} className="content-template-wrapper">
        <OverPack
          scrollName={this.props.name}
          className={`content-template ${props.className}`}
          hideProps={{ img: { reverse: true } }}
        >
          <TweenOne
            key="img"
            animation={{ x: '-=30', opacity: 0, type: 'from' }}
            className={`${props.className}-img`}
          >
            <img height="100%" src={img} />
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
          >
            <h1 key="h1">{title}</h1>
            <p key="p">{content}</p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
