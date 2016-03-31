import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import animType from '../../../common/animType';

class Banner extends React.Component {
  render() {
    const { bgImg, title, content, button } = this.props.dataSource;
    const { type, delay, interval, duration } = this.props.variables;
    const animData = {
      type: animType[type].one.type,
      delay,
      interval,
      duration,
    };
    return (
      <TweenOne animation={{ opacity: 0, type: 'from' }} className={`${this.props.className} root`} id={this.props.id}>
        <div
          style={{
          backgroundImage: `url(${bgImg})`,
          }}
          className={`${this.props.className}-bg`}
        />
        <QueueAnim {...animData} className={`${this.props.className}-title`}>
          <h1 key="h1">{title}</h1>
          <p key="content">{content}</p>
          <Button type="ghost" key="button">{button}</Button>
        </QueueAnim>

        <TweenOne animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${this.props.className}-icon`}
        >
          <Icon type="down" />
        </TweenOne>
      </TweenOne>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  anim: PropTypes.object,
};

Banner.defaultProps = {
  id: 'banner',
  className: 'banner',
  dataSource: {
    bgImg: 'https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg',
    title: 'Ant Motion Demo',
    content: 'Image source from the network Demo, please upload pictures to replace.Image source' +
    ' from the network Demo, please upload pictures to replace.',
    button: 'Learn More'
  },
  variables: {
    type: 'bottomPosition',
    duration: 800,
    interval: 100,
    delay: 100,
  }
};

export default Banner;
