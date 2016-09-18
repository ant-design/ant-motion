import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';

class Banner extends React.Component {
  render() {
    const { block1 } = this.props.dataSource;
    const { top, logo, title, content, button, bgImg } = block1;
    const props = { ...this.props };
    delete props.dataSource;
    delete props.name;
    return (
      <OverPack replay
        scrollName={this.props.name}
        playScale={[0.3, 0.1]}
        {...props}
        style={{
          backgroundImage: `url(${bgImg})`,
          ...props.style,
        }}
        hideProps={{ icon: { reverse: true } }}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${this.props.className}-title`}
          key="text"
          style={{ top }}
        >
          {logo ? <span className="logo" key="logo"><img width="100%" src={logo} /></span> : null}
          {title ? <h1 key="h1">{title}</h1> : null}
          <p key="content">{content}</p>
          <Button type="ghost" key="button">{button}</Button>
        </QueueAnim>
        <TweenOne animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${this.props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  dataSource: PropTypes.object,
};

Banner.defaultProps = {
  className: 'banner0',
};

export default Banner;
