import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
// import Icon from 'antd/lib/icon';
import animType from '../../common/animType';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Carousel from 'antd/lib/carousel';
import './banner.less';

class Banner extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      showNum: 0,
    };
    [
      'onChange',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(e) {
    this.setState({
      showNum: e,
    });
  }

  render() {
    const { dataSource, variables } = this.props;
    const { type } = variables;
    const animData = {
      ...this.props.variables,
      type: animType[type].one.type,
    };
    const carouselChildren = Object.keys(dataSource).filter(key => key.indexOf('block') >= 0)
      .map((key, i) => {
        const { title, content, button, bgImg } = dataSource[key];
        if (i === this.state.showNum) {
          return (
            <OverPack replay
              playScale={[0.3, 0.6]}
              key={key}
              className={`${this.props.className}-wrapper`}
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
                {typeof dataSource[key] === 'object' ? [<h1 key="h1">{title}</h1>,
                <p key="content">{content}</p>,
                <Button type="ghost" key="button">{button}</Button>] : null}
              </QueueAnim>
            </OverPack>
          );
        }
        return (
          <OverPack replay
            playScale={[0.3, 0.6]}
            key={key}
            className={`${this.props.className}-wrapper`}
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
          </OverPack>
        );
      });
    return (
      <div id={this.props.id}
        className={`${this.props.className} root`}
      >
        <Carousel
          afterChange={this.onChange}
          autoplay
          autoplaySpeed={5000}
        >
          {carouselChildren}
        </Carousel>
      </div>
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
    block2: {
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
