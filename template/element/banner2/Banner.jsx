import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import animType from '../../common/animType';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './banner.less';

class Banner extends React.Component {
  render() {
    const { block1, height } = this.props.dataSource;
    const { title, content, button, bgImg } = block1;
    const { type } = this.props.variables;
    const animData = {
      ...this.props.variables,
      type: animType[type].one.type,
    };
    const _height = height.replace(/[0-9|.]/g, '') ? height : `${height}px`;
    return (
      <OverPack replay
        scrollName="banner"
        className={`${this.props.className} root`}
        id={this.props.id}
        playScale={[0.3, 0.6]}
        style={{ height: _height }}
      >
        <TweenOne
          animation={{ opacity: 0, type: 'from' }}
          className={`${this.props.className}-bg`}
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
          hideProps={{ reverse: true }}
          key="bg"
        />
        <QueueAnim {...animData} className={`${this.props.className}-title`}
          hideProps={{ child: null }}
          key="text"
        >
          {typeof block1 === 'object' ? [<h1 key="h1">{title}</h1>,
          <p key="content">{content}</p>,
          <Button type="ghost" key="button">{button}</Button>] : null}
        </QueueAnim>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Banner.defaultProps = {
  className: 'banner',
  dataSource: {
    height: '400px',
    block1: {
      title: 'Ant Motion Demo',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      'Image source from the network Demo, please upload pictures to replace.',
      button: 'Learn More',
      bgImg: 'https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg',
    },
  },
  variables: {
    type: 'bottomPosition',
    ease: 'easeOutQuart',
    duration: 450,
    interval: 100,
    delay: 0,
  },
};

export default Banner;
