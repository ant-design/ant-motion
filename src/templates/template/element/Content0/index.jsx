import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    const dataSource = props.dataSource;
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    delete props.dataSource;
    delete props.isMobile;
    const isImg = dataSource[`${name}_title`].children
      .match(/\.(gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/);
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${this.props.className}-wrapper`}
          key="text"
          id={`${this.props.id}-wrapper`}
        >
          <span
            className="title"
            key="title"
            id={`${this.props.id}-title`}
          >
            {isImg ?
              (<img width="100%" src={dataSource[`${name}_title`].children} />) :
              dataSource[`${name}_title`].children}
          </span>
          <p
            key="content"
            id={`${this.props.id}-content`}
          >
            {dataSource[`${name}_content`].children}
          </p>
          <Button type="ghost" key="button" id={`${this.props.id}-button`}>
            {dataSource[`${name}_button`].children}
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20', yoyo: true, repeat: -1, duration: 1000,
          }}
          className={`${this.props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
