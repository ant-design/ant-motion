import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    delete props.dataSource;
    const childrenData = Object.keys(dataSource)
      .filter(key => key.match('block')).map(key => dataSource[key]);
    const childrenToRender = childrenData.map((item, i) => {
      const children = item.children;
      const isImg = children.title.children
        .match(/\.(gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/);
      return (<Element
        key={i}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className="bg"
          key="bg"
          style={children.bg.style}
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${this.props.className}-title`} key="text"
          style={children.wrapper.style}
        >
          <span
            className="logo" key="logo"
            style={children.title.style}
          >
            {isImg ?
              (<img width="100%" src={children.title.children} />) :
              children.title.children}
          </span>
          <p
            key="content"
            style={children.content.style}
          >
            {children.content.children}
          </p>
          <Button
            type="ghost"
            key="button"
            style={children.button.style}
          >
            {children.button.children}
          </Button>
        </QueueAnim>
      </Element>);
    });
    return (
      <TweenOne animation={{ opacity: 0, type: 'from' }}>
        <OverPack
          {...props}
          hideProps={{ icon: { reverse: true } }}
          style={dataSource[name].style}
        >
          <BannerAnim
            key="banner"
          >
            {childrenToRender}
          </BannerAnim>
          <TweenOne
            animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
            className={`${this.props.className}-icon`}
            style={{ bottom: 40 }}
            key="icon"
          >
            <Icon type="down" />
          </TweenOne>
        </OverPack>
      </TweenOne>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
};

Banner.defaultProps = {
  className: 'banner1',
};

export default Banner;
