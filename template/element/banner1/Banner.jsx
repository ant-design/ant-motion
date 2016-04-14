import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import animType from '../../common/animType';
import './banner.less';

class Banner extends React.Component {
  render() {
    const { bgImg, text } = this.props.dataSource;
    const { title, content, button } = text;
    const { type } = this.props.variables;
    const animData = {
      ...this.props.variables,
      type: animType[type].one.type,
    };
    return (
      <TweenOne
        animation={{ opacity: 0, type: 'from' }}
        className={`${this.props.className} root`}
        id={this.props.id}
      >
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
          className={`${this.props.className}-bg`}
        ></div>
        <QueueAnim {...animData} className={`${this.props.className}-title`}>
          {typeof text === 'object' ? [<h1 key="h1">{title}</h1>,
          <p key="content">{content}</p>,
          <Button type="ghost" key="button">{button}</Button>] : null}
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
  id: PropTypes.string,
  className: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
};

Banner.defaultProps = {
  className: 'banner',
  dataSource: {
    bgImg: 'https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg',
    text: {
      title: 'Ant Motion Demo',
      content: 'Image source from the network Demo, please upload pictures to replace.' +
      'Image source from the network Demo, please upload pictures to replace.',
      button: 'Learn More',
    },
  },
  variables: {
    type: 'bottomPosition',
    duration: 450,
    interval: 100,
    delay: 0,
  },
};

export default Banner;
