import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';
import '../../../static/content.less';
import './index.less';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content3',
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
          hideProps={{ h1: { reverse: true }, p: { reverse: true }, video: { reverse: true } }}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${this.props.id}-title`}
            style={dataSource[`${name}_title`].style}
          >
            {dataSource[`${name}_title`].children}
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200 }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${this.props.id}-content`}
            style={dataSource[`${name}_content`].style}
          >
            {dataSource[`${name}_content`].children}
          </TweenOne>
          <TweenOne
            key="video"
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 300 }}
            className={`${props.className}-video`}
            id={`${this.props.id}-video`}
            style={dataSource[`${name}_video`].style}
          >
            <VideoPlay loop src={dataSource[`${name}_video`].children} width="100%" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
