import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import animType from '../../common/animType';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './banner.less';

class Banner extends React.Component {
  render() {
    const { block1 } = this.props.dataSource;
    const { title, content, button, bgImg } = block1;
    const { type } = this.props.variables;
    const animData = {
      ...this.props.variables,
      type: animType[type].one.type,
    };
    return (
      <OverPack replay
        scrollName="banner"
        className={`${this.props.className} root`}
        id={this.props.id}
        playScale={[0.3, 0.1]}
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <QueueAnim {...animData} className={`${this.props.className}-title`}
          hideProps={{ child: null }}
          key="text"
        >
          {typeof block1 === 'object' ? [<h1 key="h1">{title}</h1>,
          <p key="content">{content}</p>,
          <Button type="ghost" key="button">{button}</Button>] : null}
        </QueueAnim>
        <TweenOne animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${this.props.className}-icon`}
          hideProps={{ reverse: true }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
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
    block1: {
      title: 'Ant Motion Demo',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      'Image source from the network Demo, please upload pictures to replace.',
      button: 'Learn More',
      bgImg: 'https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg',
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
