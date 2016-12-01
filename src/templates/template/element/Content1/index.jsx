import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import Icon from 'antd/lib/icon';
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

    const children = [0, 1].map((i) => {
      const isImg = dataSource[`${name}_title${i}`].children
        .match(/\.(gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/);
      return (<Element

        key={i}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className="bg"
          key="bg"
          style={dataSource[`${name}_bg${i}`].style}
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${this.props.className}-title`} key="text"
          style={dataSource[`${name}_wrapper${i}`].style}
        >
          <span
            className="logo" key="logo"
            style={dataSource[`${name}_title${i}`].style}
          >
            {isImg ?
              (<img width="100%" src={dataSource[`${name}_title${i}`].children} />) :
              dataSource[`${name}_title${i}`].children}
          </span>
          <p
            key="content"
            style={dataSource[`${name}_content${i}`].style}
          >
            {dataSource[`${name}_content${i}`].children}
          </p>
          <Button type="ghost" key="button">
            {dataSource[`${name}_button${i}`].children}
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
            {children}
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
