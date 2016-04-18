import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import animType from '../../common/animType';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
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
      <OverPack replay
        scrollName="banner"
        className={`${this.props.className} root`}
        id={this.props.id}
        playScale={[0.3, 0.1]}

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
          {typeof text === 'object' ? [<h1 key="h1">{title}</h1>,
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
    bgImg: 'https://os.alipayobjects.com/rmsportal/vOPonounXgKXHUK.jpg',
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
