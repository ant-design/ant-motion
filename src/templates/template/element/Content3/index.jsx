import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';
import '../../../static/content.less';
import './index.less';

class Content extends React.Component {

  static propTypes = {
    name: React.PropTypes.string,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content3',
  };


  render() {
    const props = { ...this.props };
    const { video, title, content } = this.props.dataSource.block1;
    delete props.dataSource;
    delete props.name;
    return (
      <div {...props} className="content-template-wrapper">
        <OverPack
          scrollName={this.props.name}
          className={`content-template ${props.className}`}
          hideProps={{ h1: { reverse: true }, p: { reverse: true }, video: { reverse: true } }}
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
          <TweenOne
            key="video"
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 300 }}
            className={`${props.className}-video`}
          >
            <VideoPlay loop src={video} width="100%" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
