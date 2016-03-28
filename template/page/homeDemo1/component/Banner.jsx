import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';

class Banner extends React.Component {
  render() {
    return (
      <TweenOne animation={{ opacity: 0, type: 'from' }} className={this.props.className + ' root'} id={this.props.id}>
        <div
          style={{
          backgroundImage: `url(${this.props.dataSource.bgImg})`,
          }}
          className={`${this.props.className}-bg`}
        />
        <QueueAnim {...this.props.anim} className={`${this.props.className}-title`}>
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="content">Image source from the network Demo, please upload pictures to replace.Image source from the
            network Demo, please upload pictures to replace.</p>
          <Button type="ghost" key="button">Learn More</Button>
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
  },
  anim: {
    type: 'bottom',
    delay: 300,
  }
};

export default Banner;
